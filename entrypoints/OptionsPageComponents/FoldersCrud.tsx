import React, { useState } from "react";
import {
  Folder,
  FolderPlus,
  Edit2,
  Trash2,
  ChevronRight,
  ChevronDown,
  GripVertical,
  MoreVertical,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";

interface FolderNode {
  id: string;
  name: string;
  children: FolderNode[];
}

interface FolderItemProps {
  folder: FolderNode;
  //   onAddChild: (parentId: string) => any;
  onAddChild: any;
  onRename: (id: string, newName: string) => void;
  onDelete: (id: string) => void;
  onMove: (folderId: string, newParentId: string | null) => void;
  onSelect: (folder: FolderNode) => void;
  selectedId: string | null;
  level: number;
}

const FolderItem: React.FC<FolderItemProps> = ({
  folder,
  onAddChild,
  onRename,
  onDelete,
  onMove,
  onSelect,
  selectedId,
  level,
}) => {
  const [isExpanded, setIsExpanded] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [editName, setEditName] = useState(folder.name);
  const [isHovered, setIsHovered] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [isDragOver, setIsDragOver] = useState(false);

  const isSelected = selectedId === folder.id;

  const handleRename = () => {
    if (editName.trim() && editName !== folder.name) {
      onRename(folder.id, editName.trim());
    }
    setIsEditing(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleRename();
    } else if (e.key === "Escape") {
      setEditName(folder.name);
      setIsEditing(false);
    }
  };

  const handleDragStart = (e: React.DragEvent) => {
    e.stopPropagation();
    setIsDragging(true);
    e.dataTransfer.effectAllowed = "move";
    e.dataTransfer.setData("folderId", folder.id);
  };

  const handleDragEnd = () => {
    setIsDragging(false);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const draggedFolderId = e.dataTransfer.types.includes("folderid")
      ? "exists"
      : null;
    if (draggedFolderId) {
      e.dataTransfer.dropEffect = "move";
      setIsDragOver(true);
    }
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragOver(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragOver(false);

    const draggedFolderId = e.dataTransfer.getData("folderId");

    if (draggedFolderId && draggedFolderId !== folder.id) {
      onMove(draggedFolderId, folder.id);
      setIsExpanded(true);
    }
  };

  return (
    <div className="select-none">
      <div
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        className={`flex items-center gap-2 py-2 px-3 rounded-lg${
          isDragOver ? "bg-blue-100 border border-blue-400 border-dashed" : ""
        } ${isSelected ? "bg-blue-50 " : "hover:bg-slate-100"} ${
          isHovered && !isDragOver && !isSelected ? "bg-slate-50" : ""
        }`}
        style={{ paddingLeft: `${level * 20 + 12}px` }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => !isEditing && onSelect(folder)}
      >
        <div
          draggable
          onDragStart={handleDragStart}
          onDragEnd={handleDragEnd}
          className={`cursor-grab active:cursor-grabbing p-1 rounded hover:bg-slate-200 transition-colors ${
            isDragging ? "opacity-30" : ""
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <GripVertical className="w-4 h-4 text-slate-400" />
        </div>

        <button
          onClick={(e) => {
            e.stopPropagation();
            setIsExpanded(!isExpanded);
          }}
          className="p-0.5 hover:bg-slate-200 rounded transition-colors"
        >
          {folder.children.length > 0 ? (
            isExpanded ? (
              <ChevronDown className="w-4 h-4 text-slate-600" />
            ) : (
              <ChevronRight className="w-4 h-4 text-slate-600" />
            )
          ) : (
            ""
          )}
        </button>

        <Folder
          className={`w-5 h-5 flex-shrink-0 ${
            isSelected ? "text-blue-600" : "text-blue-500"
          }`}
        />

        {isEditing ? (
          <Input
            value={editName}
            onChange={(e) => setEditName(e.target.value)}
            onBlur={handleRename}
            onKeyDown={handleKeyDown}
            onClick={(e) => e.stopPropagation()}
            className="h-7 text-sm flex-1"
            autoFocus
            onFocus={(e) => e.target.select()}
          />
        ) : (
          <span
            className={`flex-1 text-sm font-medium ${
              isSelected ? "text-blue-700" : "text-slate-700"
            }`}
          >
            {folder.name}
          </span>
        )}

        <div
          className={`flex items-center ${
            isHovered || isEditing ? "opacity-100" : "opacity-0"
          } transition-opacity`}
        >
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                size="sm"
                className="h-7 w-7 p-0"
                onClick={(e) => e.stopPropagation()}
              >
                <MoreVertical className="w-4 h-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" sideOffset={4}>
              <DropdownMenuItem
                onClick={(e) => {
                  e.stopPropagation();
                  onAddChild(folder.id);
                }}
              >
                <FolderPlus className="w-4 h-4 mr-2" />
                Add subfolder
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={(e) => {
                  e.stopPropagation();
                  setIsEditing(true);
                  setEditName(folder.name);
                }}
              >
                <Edit2 className="w-4 h-4 mr-2" />
                Rename
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem
                onClick={(e) => {
                  e.stopPropagation();
                  onDelete(folder.id);
                }}
                className="text-red-600 focus:bg-red-50"
              >
                <Trash2 className="w-4 h-4 mr-2" />
                Delete
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      {isExpanded && folder.children.length > 0 && (
        <div>
          {folder.children.map((child) => (
            <FolderItem
              key={child.id}
              folder={child}
              onAddChild={onAddChild}
              onRename={onRename}
              onDelete={onDelete}
              onMove={onMove}
              onSelect={onSelect}
              selectedId={selectedId}
              level={level + 1}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default function FolderManager() {
  const [folders, setFolders] = useState<FolderNode[]>([
    {
      id: crypto.randomUUID(),
      name: "Documents",
      children: [
        {
          id: crypto.randomUUID(),
          name: "Work",
          children: [],
        },
      ],
    },
    {
      id: crypto.randomUUID(),
      name: "Projects",
      children: [],
    },
  ]);

  const [newFolderName, setNewFolderName] = useState("");
  const [selectedFolder, setSelectedFolder] = useState<FolderNode | null>(null);

  const findFolder = (folders: FolderNode[], id: string): FolderNode | null => {
    for (const folder of folders) {
      if (folder.id === id) return folder;
      const found = findFolder(folder.children, id);
      if (found) return found;
    }
    return null;
  };

  const addFolder = (parentId: string | null, name: string) => {
    const newFolder: FolderNode = {
      id: crypto.randomUUID(),
      name: name ? name : "New Folder",
      children: [],
    };

    if (parentId === null) {
      setFolders([...folders, newFolder]);
    } else {
      setFolders((prevFolders) => {
        const addToParent = (folders: FolderNode[]): FolderNode[] => {
          return folders.map((folder) => {
            if (folder.id === parentId) {
              return { ...folder, children: [...folder.children, newFolder] };
            }
            return { ...folder, children: addToParent(folder.children) };
          });
        };
        return addToParent(prevFolders);
      });
    }
  };

  const renameFolder = (id: string, newName: string) => {
    setFolders((prevFolders) => {
      const rename = (folders: FolderNode[]): FolderNode[] => {
        return folders.map((folder) => {
          if (folder.id === id) {
            const renamed = { ...folder, name: newName };
            if (selectedFolder?.id === id) {
              setSelectedFolder(renamed);
            }
            return renamed;
          }
          return { ...folder, children: rename(folder.children) };
        });
      };
      return rename(prevFolders);
    });
  };

  const deleteFolder = (id: string) => {
    if (selectedFolder?.id === id) {
      setSelectedFolder(null);
    }
    setFolders((prevFolders) => {
      const remove = (folders: FolderNode[]): FolderNode[] => {
        return folders
          .filter((folder) => folder.id !== id)
          .map((folder) => ({
            ...folder,
            children: remove(folder.children),
          }));
      };
      return remove(prevFolders);
    });
  };

  const isDescendant = (
    parentId: string,
    childId: string,
    folders: FolderNode[]
  ): boolean => {
    const parent = findFolderInTree(folders, parentId);
    if (!parent) return false;

    const checkChildren = (folder: FolderNode): boolean => {
      if (folder.id === childId) return true;
      return folder.children.some((child) => checkChildren(child));
    };

    return checkChildren(parent);
  };

  const findFolderInTree = (
    folders: FolderNode[],
    id: string
  ): FolderNode | null => {
    for (const folder of folders) {
      if (folder.id === id) return folder;
      const found = findFolderInTree(folder.children, id);
      if (found) return found;
    }
    return null;
  };

  const moveFolder = (folderId: string, newParentId: string | null) => {
    if (
      newParentId &&
      (folderId === newParentId || isDescendant(folderId, newParentId, folders))
    ) {
      return;
    }

    setFolders((prevFolders) => {
      let movedFolder: FolderNode | null = null;

      const removeFolder = (folders: FolderNode[]): FolderNode[] => {
        return folders
          .filter((folder) => {
            if (folder.id === folderId) {
              movedFolder = folder;
              return false;
            }
            return true;
          })
          .map((folder) => ({
            ...folder,
            children: removeFolder(folder.children),
          }));
      };

      const foldersWithoutMoved = removeFolder(prevFolders);

      if (!movedFolder) return prevFolders;

      if (newParentId === null) {
        return [...foldersWithoutMoved, movedFolder];
      } else {
        const addToParent = (folders: FolderNode[]): FolderNode[] => {
          return folders.map((folder) => {
            if (folder.id === newParentId) {
              return {
                ...folder,
                children: [...folder.children, movedFolder!],
              };
            }
            return { ...folder, children: addToParent(folder.children) };
          });
        };
        return addToParent(foldersWithoutMoved);
      }
    });
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

  const getFolderPath = (folderId: string): string => {
    const path: string[] = [];

    const findPath = (
      folders: FolderNode[],
      targetId: string,
      currentPath: string[]
    ): boolean => {
      for (const folder of folders) {
        const newPath = [...currentPath, folder.name];
        if (folder.id === targetId) {
          path.push(...newPath);
          return true;
        }
        if (findPath(folder.children, targetId, newPath)) {
          return true;
        }
      }
      return false;
    };

    findPath(folders, folderId, []);
    return path.join(" / ");
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
                        {getFolderPath(selectedFolder.id)}
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
