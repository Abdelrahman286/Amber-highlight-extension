import React, { useState } from "react";
import { Folder, FolderPlus, Edit2, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { db } from "../../src/db";

import { FolderNode, FolderItemProps } from "./types";
import {
  addFolderToTree,
  renameFolderInTree,
  deleteFolderFromTree,
  moveFolderInTree,
  isDescendant,
  getFolderPath,
} from "./FolderUtils";

import FolderItem from "./FolderItem";
import { buildFolderTree, flattenFolders } from "./FoldersDB";

export default function FolderManager() {
  const [newFolderName, setNewFolderName] = useState("");
  const [selectedFolder, setSelectedFolder] = useState<FolderNode | null>(null);
  const [folders, setFolders] = useState<FolderNode[]>([]);

  useEffect(() => {
    const loadFolders = async () => {
      try {
        // 1️⃣ Load flat folders from IndexedDB
        const flatFolders = await db.folders.toArray();

        // 2️⃣ Sort by createdAt (ascending)
        const sorted = flatFolders.sort((a, b) => {
          return Number(a.createdAt) - Number(b.createdAt);
        });

        // 3️⃣ If empty, set to []
        if (sorted.length === 0) {
          setFolders([]);
          console.warn("No folders found in IndexedDB");
          return;
        }

        // 4️⃣ Transform flat list → nested tree
        const tree = buildFolderTree(sorted);

        // 5️⃣ Update React state
        setFolders(tree);

        console.log("📁 Folders loaded and sorted by createdAt:", tree);
      } catch (error) {
        console.error("❌ Failed to load folders from IndexedDB:", error);
        setFolders([]); // fallback to empty array on error
      }
    };

    loadFolders();
  }, []);

  // saving folders to indexedDB
  useEffect(() => {
    if (!folders) return;

    const saveToDB = async () => {
      try {
        console.log("📂 Folders changed, syncing to IndexedDB...");

        // 1️⃣ Flatten the nested tree (preserving createdAt)
        const flatList = flattenFolders(folders);

        // 2️⃣ Fetch existing IDs from DB
        const existingFolders = await db.folders.toArray();
        const existingIds = new Set(existingFolders.map((f) => f.id));

        // 3️⃣ Collect current IDs from memory
        const currentIds = new Set(flatList.map((f) => f.id));

        // 4️⃣ Find stale IDs to delete
        const toDelete = [...existingIds].filter((id) => !currentIds.has(id));

        if (toDelete?.length > 0) {
          console.log(`🗑️ Removing ${toDelete.length} deleted folders`);
          await db.folders.bulkDelete(toDelete);
        }

        // 5️⃣ Save or update the current folders
        await db.folders.bulkPut(flatList);

        console.log("✅ Synced folders to IndexedDB:", flatList);
      } catch (error) {
        console.error("❌ Failed to sync folders:", error);
      }
    };

    saveToDB();
  }, [folders]);

  const addFolder = (parentId: string | null, name: string) => {
    const newFolder: FolderNode = {
      id: crypto.randomUUID(),
      name: name ? name : "New Folder",
      children: [],
      createdAt: Date.now(),
    };
    setFolders((prev) => addFolderToTree(prev, parentId, newFolder));
  };

  const renameFolder = (id: string, newName: string) => {
    setFolders((prev) => renameFolderInTree(prev, id, newName));
    if (selectedFolder?.id === id) {
      setSelectedFolder({ ...selectedFolder, name: newName });
    }
  };

  const deleteFolder = (id: string) => {
    if (selectedFolder?.id === id) setSelectedFolder(null);
    setFolders((prev) => deleteFolderFromTree(prev, id));
  };

  const moveFolder = (folderId: string, newParentId: string | null) => {
    if (
      newParentId &&
      (folderId === newParentId || isDescendant(folderId, newParentId, folders))
    )
      return;
    setFolders((prev) => moveFolderInTree(prev, folderId, newParentId));
  };

  const handleAddRootFolder = () => {
    if (newFolderName.trim()) {
      addFolder(null, newFolderName.trim());
      setNewFolderName("");
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleAddRootFolder();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-slate-800 mb-2">
            Folder Manager
          </h1>
          <p className="text-slate-600">
            Create, organize, and manage your folders with ease
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <Card className="p-6 shadow-lg">
              <div className="mb-6">
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Create New Folder
                </label>
                <div className="flex gap-2">
                  <Input
                    placeholder="Enter folder name..."
                    value={newFolderName}
                    onChange={(e) => setNewFolderName(e.target.value)}
                    onKeyDown={handleKeyDown}
                    className="flex-1"
                  />
                  <Button
                    onClick={handleAddRootFolder}
                    disabled={!newFolderName.trim()}
                  >
                    <FolderPlus className="w-4 h-4 mr-2" />
                    Add Folder
                  </Button>
                </div>
              </div>

              <div className="border-t pt-4">
                {folders.length === 0 ? (
                  <div className="text-center py-12 text-slate-400">
                    <Folder className="w-16 h-16 mx-auto mb-3 opacity-50" />
                    <p className="text-lg">No folders yet</p>
                    <p className="text-sm">
                      Create your first folder to get started
                    </p>
                  </div>
                ) : (
                  <div
                    className="space-y-1 min-h-[400px]"
                    onDragOver={(e) => {
                      e.preventDefault();
                      e.dataTransfer.dropEffect = "move";
                    }}
                    onDrop={(e) => {
                      e.preventDefault();
                      const folderId = e.dataTransfer.getData("folderId");
                      if (folderId) {
                        moveFolder(folderId, null);
                      }
                    }}
                  >
                    {folders.map((folder) => (
                      <FolderItem
                        key={folder.id}
                        folder={folder}
                        onAddChild={addFolder}
                        onRename={renameFolder}
                        onDelete={deleteFolder}
                        onMove={moveFolder}
                        onSelect={setSelectedFolder}
                        selectedId={selectedFolder?.id || null}
                        level={0}
                      />
                    ))}
                  </div>
                )}
              </div>
            </Card>
          </div>

          <div className="lg:col-span-1">
            <Card className="p-6 shadow-lg sticky top-8">
              <h2 className="text-lg font-semibold text-slate-800 mb-4 flex items-center gap-2">
                <Folder className="w-5 h-5 text-blue-500" />
                Selected Folder
              </h2>

              {selectedFolder ? (
                <div className="space-y-4">
                  <div>
                    <label className="text-xs font-medium text-slate-500 uppercase tracking-wide">
                      Name
                    </label>
                    <div className="mt-1 p-3 bg-blue-50 rounded-lg border-2 border-blue-200">
                      <p className="text-lg font-semibold text-blue-900">
                        {selectedFolder.name}
                      </p>
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-medium text-slate-500 uppercase tracking-wide">
                      Path
                    </label>
                    <div className="mt-1 p-3 bg-slate-50 rounded-lg border border-slate-200">
                      <p className="text-sm text-slate-700 font-mono break-all">
                        {getFolderPath(folders, selectedFolder.id)}
                      </p>
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-medium text-slate-500 uppercase tracking-wide">
                      ID
                    </label>
                    <div className="mt-1 p-3 bg-slate-50 rounded-lg border border-slate-200">
                      <p className="text-xs text-slate-600 font-mono break-all">
                        {selectedFolder.id}
                      </p>
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-medium text-slate-500 uppercase tracking-wide">
                      Subfolders
                    </label>
                    <div className="mt-1 p-3 bg-slate-50 rounded-lg border border-slate-200">
                      <p className="text-2xl font-bold text-slate-700">
                        {selectedFolder.children.length}
                      </p>
                    </div>
                  </div>

                  <div className="pt-2 flex gap-2">
                    <Button
                      variant="outline"
                      className="flex-1"
                      onClick={() => {
                        const newName = prompt(
                          "Enter new folder name:",
                          selectedFolder.name
                        );
                        if (newName && newName.trim()) {
                          renameFolder(selectedFolder.id, newName.trim());
                        }
                      }}
                    >
                      <Edit2 className="w-4 h-4 mr-2" />
                      Rename
                    </Button>
                    <Button
                      variant="outline"
                      className="flex-1 hover:bg-red-50 hover:text-red-600 hover:border-red-300"
                      onClick={() => {
                        if (
                          confirm(
                            `Delete "${selectedFolder.name}" and all its contents?`
                          )
                        ) {
                          deleteFolder(selectedFolder.id);
                        }
                      }}
                    >
                      <Trash2 className="w-4 h-4 mr-2" />
                      Delete
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="text-center py-12 text-slate-400">
                  <Folder className="w-12 h-12 mx-auto mb-3 opacity-30" />
                  <p className="text-sm">No folder selected</p>
                  <p className="text-xs mt-1">
                    Click on a folder to view details
                  </p>
                </div>
              )}
            </Card>
          </div>
        </div>

        <div className="mt-6 text-center text-sm text-slate-500">
          <p>
            <strong>Tips:</strong> Use the grip icon (⋮⋮) to drag folders •
            Click folders to select • Hover for quick actions
          </p>
        </div>
      </div>
    </div>
  );
}
