import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import {
  Plus,
  Trash2,
  Edit3,
  Folder,
  FolderOpen,
  File,
  Search,
  ChevronRight,
  Check,
  X,
  FolderPlus,
  FilePlus,
} from "lucide-react";

type TreeNode = {
  id: string;
  name: string;
  type: "folder" | "file";
  children?: TreeNode[];
};

const initialData: TreeNode[] = [
  //   { id: "1", name: "Unread", type: "file" },
  //   { id: "2", name: "Threads", type: "file" },
  {
    id: "3",
    name: "Chat Rooms",
    type: "folder",
    children: [
      { id: "c1", name: "General", type: "folder" },
      { id: "c2", name: "Random", type: "folder" },
      { id: "c3", name: "Open Source Projects", type: "folder" },
    ],
  },
  {
    id: "4",
    name: "Direct Messages",
    type: "folder",
    children: [
      { id: "d1", name: "Alice", type: "file" },
      { id: "d2", name: "Bob", type: "file" },
      { id: "d3", name: "Charlie", type: "file" },
    ],
  },
];

const TreeItem = ({
  node,
  level = 0,
  onUpdate,
  onDelete,
  onAddChild,
  onMove,
  selectedId,
  onSelect,
  searchTerm,
  draggedId,
  onDragStart,
  onDragEnd,
}: any) => {
  const [isExpanded, setIsExpanded] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [editName, setEditName] = useState(node.name);
  const [isHovered, setIsHovered] = useState(false);
  const [isDragOver, setIsDragOver] = useState(false);

  const hasChildren = node.children && node.children.length > 0;
  const isSelected = selectedId === node.id;
  const matchesSearch = node.name
    .toLowerCase()
    .includes(searchTerm.toLowerCase());
  const isDragging = draggedId === node.id;

  const handleSave = () => {
    if (editName.trim()) {
      onUpdate(node.id, editName.trim());
    }
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditName(node.name);
    setIsEditing(false);
  };

  const handleDragStart = (e: any) => {
    e.stopPropagation();
    onDragStart(node.id);
    e.dataTransfer.effectAllowed = "move";
  };

  const handleDragOver = (e: any) => {
    e.preventDefault();
    e.stopPropagation();
    if (draggedId && draggedId !== node.id && node.type === "folder") {
      e.dataTransfer.dropEffect = "move";
      setIsDragOver(true);
    }
  };

  const handleDragLeave = (e: any) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragOver(false);
  };

  const handleDrop = (e: any) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragOver(false);

    if (draggedId && draggedId !== node.id && node.type === "folder") {
      onMove(draggedId, node.id);
      setIsExpanded(true);
    }
  };

  if (searchTerm && !matchesSearch && !hasChildren) return null;

  return (
    <div className="select-none">
      <div
        draggable={!isEditing}
        onDragStart={handleDragStart}
        onDragEnd={onDragEnd}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        className={`h-[50px]  group flex items-center gap-2 px-3 py-2 rounded cursor-pointer transition-colors ${
          isDragging
            ? "opacity-40"
            : isSelected
            ? "bg-blue-50 border-l-2 border-blue-500"
            : isDragOver
            ? "bg-blue-100 border-2 border-blue-400 border-dashed"
            : isHovered
            ? "bg-slate-50"
            : ""
        }`}
        style={{ paddingLeft: `${level * 24 + 12}px` }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => onSelect(node.id)}
      >
        {node.type === "folder" && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              setIsExpanded(!isExpanded);
              console.log(node);
            }}
            className="p-1 hover:bg-slate-200 rounded"
          >
            <ChevronRight
              className={`h-4 w-4 text-slate-600 transition-transform ${
                isExpanded ? "rotate-90" : ""
              }`}
            />
          </button>
        )}

        <div className="flex-shrink-0">
          {node.type === "folder" ? (
            isExpanded ? (
              <FolderOpen className="h-5 w-5 text-blue-500" />
            ) : (
              <Folder className="h-5 w-5 text-slate-500" />
            )
          ) : (
            <File className="h-5 w-5 text-slate-400" />
          )}
        </div>

        <div className="flex-1 min-w-0 ">
          {isEditing ? (
            <div
              className="flex items-center gap-2"
              onClick={(e) => e.stopPropagation()}
            >
              <Input
                value={editName}
                onChange={(e) => setEditName(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") handleSave();
                  if (e.key === "Escape") handleCancel();
                }}
                className="h-7 text-sm"
                autoFocus
              />
              <Button size="sm" onClick={handleSave} className="h-7 px-2">
                <Check className="h-3 w-3" />
              </Button>
              <Button
                size="sm"
                variant="ghost"
                onClick={handleCancel}
                className="h-7 px-2"
              >
                <X className="h-3 w-3" />
              </Button>
            </div>
          ) : (
            <span
              className={`text-sm truncate ${
                node.type === "folder"
                  ? "font-medium text-slate-900"
                  : "text-slate-700"
              } ${matchesSearch && searchTerm ? "bg-yellow-200" : ""}`}
            >
              {node.name}
            </span>
          )}
        </div>

        {!isEditing && (isHovered || isSelected) && (
          <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
            {node.type === "folder" && (
              <>
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={(e) => {
                    e.stopPropagation();
                    onAddChild(node.id, "folder");
                    setIsExpanded(true);
                  }}
                  className="h-7 px-2"
                  title="Add folder"
                >
                  <FolderPlus className="h-3 w-3" />
                </Button>
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={(e) => {
                    e.stopPropagation();
                    onAddChild(node.id, "file");
                    setIsExpanded(true);
                  }}
                  className="h-7 px-2"
                  title="Add file"
                >
                  <FilePlus className="h-3 w-3" />
                </Button>
              </>
            )}
            <Button
              size="sm"
              variant="ghost"
              onClick={(e) => {
                e.stopPropagation();
                setIsEditing(true);
              }}
              className="h-7 px-2"
              title="Rename"
            >
              <Edit3 className="h-3 w-3" />
            </Button>
            <Button
              size="sm"
              variant="ghost"
              onClick={(e) => {
                e.stopPropagation();
                if (confirm(`Delete "${node.name}"?`)) {
                  onDelete(node.id);
                }
              }}
              className="h-7 px-2"
              title="Delete"
            >
              <Trash2 className="h-3 w-3" />
            </Button>
          </div>
        )}
      </div>

      {node.type === "folder" && isExpanded && hasChildren && (
        <div>
          {node.children.map((child: TreeNode) => (
            <TreeItem
              key={child.id}
              node={child}
              level={level + 1}
              onUpdate={onUpdate}
              onDelete={onDelete}
              onAddChild={onAddChild}
              onMove={onMove}
              selectedId={selectedId}
              onSelect={onSelect}
              searchTerm={searchTerm}
              draggedId={draggedId}
              onDragStart={onDragStart}
              onDragEnd={onDragEnd}
            />
          ))}
        </div>
      )}
    </div>
  );
};

const SimpleFolderManager = () => {
  const [treeData, setTreeData] = useState<TreeNode[]>(initialData);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [draggedId, setDraggedId] = useState<string | null>(null);

  const generateId = () =>
    `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;

  const updateNode = (
    nodes: TreeNode[],
    id: string,
    name: string
  ): TreeNode[] => {
    return nodes.map((node) => {
      if (node.id === id) {
        return { ...node, name };
      }
      if (node.children) {
        return { ...node, children: updateNode(node.children, id, name) };
      }
      return node;
    });
  };

  const deleteNode = (nodes: TreeNode[], id: string): TreeNode[] => {
    return nodes.filter((node) => {
      if (node.id === id) return false;
      if (node.children) {
        node.children = deleteNode(node.children, id);
      }
      return true;
    });
  };

  const addChild = (
    nodes: TreeNode[],
    parentId: string,
    type: "folder" | "file"
  ): TreeNode[] => {
    return nodes.map((node) => {
      if (node.id === parentId) {
        const newChild: TreeNode = {
          id: generateId(),
          name: type === "folder" ? "New Folder" : "New File",
          type,
          children: type === "folder" ? [] : undefined,
        };
        return {
          ...node,
          children: [...(node.children || []), newChild],
        };
      }
      if (node.children) {
        return { ...node, children: addChild(node.children, parentId, type) };
      }
      return node;
    });
  };

  const findAndRemoveNode = (
    nodes: TreeNode[],
    id: string
  ): { nodes: TreeNode[]; removed: TreeNode | null } => {
    let removed: TreeNode | null = null;

    const newNodes = nodes.filter((node) => {
      if (node.id === id) {
        removed = node;
        return false;
      }
      if (node.children) {
        const result = findAndRemoveNode(node.children, id);
        node.children = result.nodes;
        if (result.removed) removed = result.removed;
      }
      return true;
    });

    return { nodes: newNodes, removed };
  };

  const moveNode = (draggedId: string, targetId: string) => {
    setTreeData((prev) => {
      const { nodes: afterRemoval, removed } = findAndRemoveNode(
        prev,
        draggedId
      );

      if (!removed) return prev;

      const isMovingIntoSelf = (
        checkNode: TreeNode,
        targetId: string
      ): boolean => {
        if (checkNode.id === targetId) return true;
        if (checkNode.children) {
          return checkNode.children.some((child) =>
            isMovingIntoSelf(child, targetId)
          );
        }
        return false;
      };

      if (isMovingIntoSelf(removed, targetId)) {
        return prev;
      }

      const addToTarget = (nodes: TreeNode[]): TreeNode[] => {
        return nodes.map((node) => {
          if (node.id === targetId && node.type === "folder") {
            return {
              ...node,
              children: [...(node.children || []), removed],
            };
          }
          if (node.children) {
            return { ...node, children: addToTarget(node.children) };
          }
          return node;
        });
      };

      return addToTarget(afterRemoval);
    });
  };

  const handleUpdate = (id: string, name: string) => {
    setTreeData((prev) => updateNode(prev, id, name));
  };

  const handleDelete = (id: string) => {
    setTreeData((prev) => deleteNode(prev, id));
    if (selectedId === id) setSelectedId(null);
  };

  const handleAddChild = (parentId: string, type: "folder" | "file") => {
    setTreeData((prev) => addChild(prev, parentId, type));
  };

  const addRoot = (type: "folder" | "file") => {
    const newItem: TreeNode = {
      id: generateId(),
      name: type === "folder" ? "New Root Folder" : "New Root File",
      type,
      children: type === "folder" ? [] : undefined,
    };
    setTreeData((prev) => [...prev, newItem]);
  };

  const countItems = (nodes: TreeNode[], type?: "folder" | "file"): number => {
    return nodes.reduce((count, node) => {
      let current = !type || node.type === type ? 1 : 0;
      if (node.children) {
        current += countItems(node.children, type);
      }
      return count + current;
    }, 0);
  };

  const selectedNode = (() => {
    const find = (nodes: TreeNode[], id: string): TreeNode | null => {
      for (const node of nodes) {
        if (node.id === id) return node;
        if (node.children) {
          const found = find(node.children, id);
          if (found) return found;
        }
      }
      return null;
    };
    return selectedId ? find(treeData, selectedId) : null;
  })();

  return (
    <div className="min-h-screen bg-slate-50 p-8">
      <div className="max-w-5xl mx-auto space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Folder Manager</h1>
          <p className="text-slate-600 mt-1">
            Organize your files and folders • Drag & drop to move items
          </p>
        </div>

        <Card className="shadow">
          <div className="border-b bg-white p-4 space-y-3">
            <div className="flex flex-wrap gap-2">
              <Button onClick={() => addRoot("folder")} size="sm">
                <FolderPlus className="mr-2 h-4 w-4" />
                New Folder
              </Button>
              <Button
                onClick={() => addRoot("file")}
                variant="outline"
                size="sm"
              >
                <FilePlus className="mr-2 h-4 w-4" />
                New File
              </Button>
              {selectedNode && (
                <>
                  {selectedNode.type === "folder" && (
                    <>
                      <Button
                        onClick={() => handleAddChild(selectedId!, "folder")}
                        variant="outline"
                        size="sm"
                      >
                        <Plus className="mr-2 h-4 w-4" />
                        Add Subfolder
                      </Button>
                      <Button
                        onClick={() => handleAddChild(selectedId!, "file")}
                        variant="outline"
                        size="sm"
                      >
                        <Plus className="mr-2 h-4 w-4" />
                        Add File
                      </Button>
                    </>
                  )}
                  <Button
                    onClick={() => {
                      if (confirm(`Delete "${selectedNode.name}"?`)) {
                        handleDelete(selectedId!);
                      }
                    }}
                    variant="outline"
                    size="sm"
                  >
                    <Trash2 className="mr-2 h-4 w-4" />
                    Delete
                  </Button>
                </>
              )}
            </div>

            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
              <Input
                placeholder="Search folders and files..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-9"
              />
            </div>
          </div>

          <div className="p-4">
            <div className="border rounded bg-white">
              <div className="max-h-[600px] overflow-auto p-2">
                {treeData.length === 0 ? (
                  <div className="text-center py-12 text-slate-400">
                    <Folder className="h-12 w-12 mx-auto mb-3 opacity-30" />
                    <p className="font-medium">No items yet</p>
                    <p className="text-sm">
                      Create a folder or file to get started
                    </p>
                  </div>
                ) : (
                  treeData.map((node) => (
                    <TreeItem
                      key={node.id}
                      node={node}
                      onUpdate={handleUpdate}
                      onDelete={handleDelete}
                      onAddChild={handleAddChild}
                      onMove={moveNode}
                      selectedId={selectedId}
                      onSelect={setSelectedId}
                      searchTerm={searchTerm}
                      draggedId={draggedId}
                      onDragStart={setDraggedId}
                      onDragEnd={() => setDraggedId(null)}
                    />
                  ))
                )}
              </div>
            </div>

            {selectedNode && (
              <div className="mt-4 p-4 border rounded bg-blue-50">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    {selectedNode.type === "folder" ? (
                      <div className="p-2 bg-blue-100 rounded">
                        <Folder className="h-5 w-5 text-blue-600" />
                      </div>
                    ) : (
                      <div className="p-2 bg-slate-100 rounded">
                        <File className="h-5 w-5 text-slate-600" />
                      </div>
                    )}
                    <div>
                      <h3 className="font-semibold text-slate-900">
                        {selectedNode.name}
                      </h3>
                      <p className="text-sm text-slate-600">
                        {selectedNode.type === "folder" ? "Folder" : "File"}
                        {selectedNode.children &&
                          selectedNode.children.length > 0 && (
                            <span className="ml-2">
                              • {selectedNode.children.length} items
                            </span>
                          )}
                      </p>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setSelectedId(null)}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            )}
          </div>
        </Card>

        <div className="grid grid-cols-3 gap-4">
          <Card className="p-4">
            <div className="text-2xl font-bold text-slate-900">
              {countItems(treeData, "folder")}
            </div>
            <div className="text-sm text-slate-600">Folders</div>
          </Card>
          <Card className="p-4">
            <div className="text-2xl font-bold text-slate-900">
              {countItems(treeData, "file")}
            </div>
            <div className="text-sm text-slate-600">Files</div>
          </Card>
          <Card className="p-4">
            <div className="text-2xl font-bold text-slate-900">
              {countItems(treeData)}
            </div>
            <div className="text-sm text-slate-600">Total Items</div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default SimpleFolderManager;
