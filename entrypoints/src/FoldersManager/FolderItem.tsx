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
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";

import { FolderNode, FolderItemProps } from "./types";
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
  const [isExpanded, setIsExpanded] = useState(false);
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

        <div className="flex items-center">
          {folder.children.length > 0 ? (
            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsExpanded(!isExpanded);
              }}
              className=" hover:bg-slate-200 rounded "
            >
              {isExpanded ? (
                <ChevronDown className="w-4 h-4 text-slate-600" />
              ) : (
                <ChevronRight className="w-4 h-4 text-slate-600" />
              )}
            </button>
          ) : (
            <div className="w-4 h-4" /> // plain spacer, no hover
          )}
        </div>

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
            onDoubleClick={(e) => {
              e.stopPropagation();
              setIsEditing(true);
              setEditName(folder.name);
            }}
            className={`flex-1 text-sm font-medium cursor-text ${
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

export default FolderItem;
