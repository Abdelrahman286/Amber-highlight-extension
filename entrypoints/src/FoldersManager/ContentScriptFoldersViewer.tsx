import React, { useState, useEffect } from "react";
import { Folder, ChevronRight, ChevronDown } from "lucide-react";
import { dummyData } from "./data";
import { FolderNode } from "./types";

const FolderItem: React.FC<{
  folder: FolderNode;
  onSelect: (folder: FolderNode) => void;
  selectedId: string | null;
  level: number;
}> = ({ folder, onSelect, selectedId, level }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const isSelected = selectedId === folder.id;

  return (
    <div className="folder-item">
      <div
        style={{ paddingLeft: `${level * 20 + 12}px` }}
        className={`folder-row ${isSelected ? "selected" : ""} ${
          isHovered && !isSelected ? "hovered" : ""
        }`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => onSelect(folder)}
      >
        <div className="folder-toggle">
          {folder.children.length > 0 ? (
            <button
              className="toggle-button"
              onClick={(e) => {
                e.stopPropagation();
                setIsExpanded(!isExpanded);
              }}
            >
              {isExpanded ? (
                <ChevronDown className="icon-chevron" />
              ) : (
                <ChevronRight className="icon-chevron" />
              )}
            </button>
          ) : (
            <div className="toggle-spacer" />
          )}
        </div>

        <Folder
          className={`icon-folder ${isSelected ? "icon-selected" : ""}`}
        />
        <span className={`folder-name ${isSelected ? "text-selected" : ""}`}>
          {folder.name}
        </span>
      </div>

      {isExpanded && folder.children.length > 0 && (
        <div className="folder-children">
          {folder.children.map((child) => (
            <FolderItem
              key={child.id}
              folder={child}
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
  const [folders, setFolders] = useState<FolderNode[]>(dummyData);
  const [selectedFolder, setSelectedFolder] = useState<FolderNode | null>(null);

  useEffect(() => {
    console.log(selectedFolder);
  }, [selectedFolder]);

  return (
    <div className="folder-manager thin-scrollbar">
      <div className="folder-container">
        {folders.length === 0 ? (
          <div className="empty-state">
            <Folder className="empty-icon" />
            <p className="empty-title">No folders yet</p>
            <p className="empty-subtitle">
              Create your first folder to get started
            </p>
          </div>
        ) : (
          <div className="folder-list">
            {folders.map((folder) => (
              <FolderItem
                key={folder.id}
                folder={folder}
                onSelect={setSelectedFolder}
                selectedId={selectedFolder?.id || null}
                level={0}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
