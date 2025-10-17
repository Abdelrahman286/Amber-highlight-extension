import React, { useState } from "react";
import { Folder, ChevronRight, ChevronDown } from "lucide-react";
import { browser } from "wxt/browser";
import { FolderNode } from "../../../src/FoldersManager/types";

export interface FolderExplorerProps {
  folders: FolderNode[];
  setFolders: React.Dispatch<React.SetStateAction<FolderNode[]>>;
  selectedFolder: FolderNode | null;
  setSelectedFolder: React.Dispatch<React.SetStateAction<FolderNode | null>>;
  searchTerm: string;
}

const FolderItem: React.FC<{
  folder: FolderNode;
  onSelect: (folder: FolderNode) => void;
  selectedId: string | null;
  level: number;
  forceExpand?: boolean;
}> = ({ folder, onSelect, selectedId, level, forceExpand = false }) => {
  const [isExpanded, setIsExpanded] = useState(forceExpand);
  const [isHovered, setIsHovered] = useState(false);
  const isSelected = selectedId === folder.id;

  // Expand automatically when forceExpand changes
  React.useEffect(() => {
    if (forceExpand) setIsExpanded(true);
  }, [forceExpand]);

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
              forceExpand={forceExpand}
            />
          ))}
        </div>
      )}
    </div>
  );
};

// Recursive helper: returns filtered folders and expansion flags
function filterFoldersBySearchTerm(
  folders: FolderNode[],
  searchTerm: string
): FolderNode[] {
  const lower = searchTerm.toLowerCase();

  return folders
    .map((folder) => {
      const matches = folder.name.toLowerCase().includes(lower);
      const filteredChildren = filterFoldersBySearchTerm(
        folder.children,
        searchTerm
      );

      if (matches || filteredChildren.length > 0) {
        return {
          ...folder,
          children: filteredChildren,
          // mark this folder for expansion if it contains a match
          _match: matches,
          _expand: matches || filteredChildren.length > 0,
        } as FolderNode & { _expand?: boolean; _match?: boolean };
      }
      return null;
    })
    .filter(Boolean) as FolderNode[];
}

const openFoldersManager = () => {
  try {
    browser.runtime.sendMessage({ action: "openFoldersManager" });
  } catch (err) {
    console.log(err);
  }
};

export default function FolderManager({
  folders,
  setFolders,
  selectedFolder,
  setSelectedFolder,
  searchTerm,
}: FolderExplorerProps) {
  const filteredFolders =
    searchTerm.trim() === ""
      ? folders
      : filterFoldersBySearchTerm(folders, searchTerm);

  return (
    <div className="folder-manager thin-scrollbar">
      <div className="folder-container">
        {filteredFolders.length === 0 ? (
          <div className="empty-state">
            <Folder className="empty-icon" />
            <p className="empty-title">No folders found</p>
          </div>
        ) : (
          <div className="folder-list">
            {filteredFolders.map((folder) => (
              <FolderItem
                key={folder.id}
                folder={folder}
                onSelect={setSelectedFolder}
                selectedId={selectedFolder?.id || null}
                level={0}
                forceExpand={!!searchTerm}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
