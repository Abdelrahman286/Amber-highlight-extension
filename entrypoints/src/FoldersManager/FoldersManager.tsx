import React, { useState } from "react";
import { Folder, FolderPlus, Edit2, Trash2, FolderOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { db } from "../../src/db";

import { FolderNode, FolderItemProps } from "./types";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  addFolderToTree,
  renameFolderInTree,
  deleteFolderFromTree,
  moveFolderInTree,
  isDescendant,
  getFolderPath,
} from "./FolderUtils";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogTrigger,
} from "@/components/ui/dialog";

import FolderItem from "./FolderItem";
import { buildFolderTree, flattenFolders } from "./FoldersDB";

export default function FolderManager() {
  const [newFolderName, setNewFolderName] = useState("");
  const [selectedFolder, setSelectedFolder] = useState<FolderNode | null>(null);
  const [folders, setFolders] = useState<FolderNode[]>([]);

  const [open, setOpen] = useState(false);
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

  const handleSave = () => {
    const name = newFolderName.trim();
    if (!name) return;
    addFolder(null, name);
    setNewFolderName("");
    setOpen(false);
  };
  return (
    <>
      <div className="flex items-center justify-between  gap-2 px-4 py-2 shrink-0">
        <div className="flex flex-row gap-1">
          <FolderOpen className="h-5 w-5 text-muted-foreground" />
          <h2 className="text-sm font-medium uppercase tracking-wide text-muted-foreground">
            Folders
          </h2>
        </div>
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button
              variant="ghost"
              size={"icon-sm"}
              className="flex items-center  border border-muted-foreground/20 hover:bg-accent/60 hover:text-accent-foreground hover:shadow-sm"
            >
              <FolderPlus className="w-4 h-4" />
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>Create New Folder</DialogTitle>
            </DialogHeader>

            <div className="py-4">
              <Input
                placeholder="Enter folder name..."
                value={newFolderName}
                onChange={(e) => setNewFolderName(e.target.value)}
                autoFocus
              />
            </div>

            <DialogFooter>
              <Button
                variant="outline"
                onClick={() => {
                  setNewFolderName("");
                  setOpen(false);
                }}
              >
                Cancel
              </Button>
              <Button onClick={handleSave} disabled={!newFolderName.trim()}>
                Save
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
      <ScrollArea className="flex-1 overflow-auto ">
        <div>
          <div className="border-t pt-4 ">
            {folders.length === 0 ? (
              <div className="text-center py-12 text-foreground">
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
        </div>
      </ScrollArea>
    </>
  );
}
