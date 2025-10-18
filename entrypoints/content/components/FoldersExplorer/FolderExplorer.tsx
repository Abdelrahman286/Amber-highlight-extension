import React, { useState } from "react";
import { Search, X, Ban, ReceiptEuro } from "lucide-react";
import FolderManager from "./ContentScriptFoldersViewer";
import { useAppContext } from "../../context/AppContext";
import { FolderNode } from "../../../src/FoldersManager/types";
import { db } from "../../../src/db";
import { buildFolderTree } from "@/entrypoints/src/FoldersManager/FoldersDB";
import Tooltip from "../CustomToolTip/Tooltip";
import { getFolderPath } from "../../../src/FoldersManager/FolderUtils";

const FolderExplorer: React.FC = () => {
  const {
    setShowFolders,
    selectedFolder,
    setSelectedFolder,
    selectHighlightId,
  } = useAppContext();

  const [showSearch, setShowSearch] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [folders, setFolders] = useState<FolderNode[]>([]);

  // saving highlight to the selected folder

  useEffect(() => {
    if (selectHighlightId && selectedFolder?.id) {
      const updateHighlight = async () => {
        try {
          await browser.runtime.sendMessage({
            action: "updateHighlight",
            data: {
              id: selectHighlightId,
              updates: { folderId: selectedFolder.id },
            },
          });
        } catch (err) {
          console.error("Failed to update notes:", err);
        }
      };

      updateHighlight();
    }
  }, [selectedFolder]);

  useEffect(() => {
    const loadFolders = async (): Promise<void> => {
      try {
        // 🔹 Step 1: Fetch flat folders from IndexedDB via background script
        const response = await browser.runtime.sendMessage({
          action: "getFolders",
        });

        if (!response?.success) {
          console.warn("⚠️ Failed to load folders: invalid response");
          setFolders([]);
          return;
        }

        const flatFolders = response.data ?? [];
        if (!Array.isArray(flatFolders)) {
          console.error("❌ Invalid folder data format:", flatFolders);
          setFolders([]);
          return;
        }

        // 🔹 Step 2: Sort by createdAt (ascending)
        const sortedFolders = [...flatFolders].sort(
          (a, b) => Number(a.createdAt) - Number(b.createdAt)
        );

        // 🔹 Step 3: Handle empty list
        if (sortedFolders.length === 0) {
          console.warn("📂 No folders found in IndexedDB");
          setFolders([]);
          return;
        }

        // 🔹 Step 4: Transform flat list → nested tree
        const folderTree = buildFolderTree(sortedFolders);

        // 🔹 Step 5: Update state
        setFolders(folderTree);
      } catch (err) {
        console.error("❌ Failed to load folders from IndexedDB:", err);
        setFolders([]);
      }
    };

    loadFolders();
  }, [setFolders]);

  const removeFolderSelection = async () => {
    if (!selectedFolder?.id || !selectHighlightId) return;
    try {
      const res = await browser.runtime.sendMessage({
        action: "updateHighlight",
        data: {
          id: selectHighlightId,
          updates: { folderId: "" },
        },
      });
      if (res.success) {
        setSelectedFolder(null);
      }
    } catch (err) {
      console.error("Failed to update notes:", err);
    }
  };

  return (
    <div className="folder-explorer thin-scrollbar">
      {/* Header */}
      <div className="folder-header">
        <div className="folder-actions">
          <Tooltip text="Unselect Folder" position="bottom">
            <button
              className={`icon-btn ${selectedFolder ? "active" : ""}`}
              onClick={removeFolderSelection}
            >
              <Ban className="icon" />
            </button>
          </Tooltip>

          <div className="folder-search">
            {!showSearch ? (
              <button
                className="icon-btn search-toggle"
                title="Search"
                onClick={() => setShowSearch(true)}
              >
                <Search className="icon" />
                <span>Search</span>
              </button>
            ) : (
              <div className="search-box">
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="search-input"
                  placeholder="Search folders..."
                  autoFocus
                />
                <button
                  className="close-search-btn"
                  onClick={() => {
                    setSearchTerm("");
                    setShowSearch(false);
                  }}
                >
                  <X className="icon" />
                </button>
              </div>
            )}
          </div>
        </div>

        <button
          className="close-btn"
          title="Close"
          onClick={() => setShowFolders(false)}
        >
          <X className="icon" />
        </button>
      </div>

      {/* Content */}
      <div className="folder-content thin-scrollbar">
        <FolderManager
          searchTerm={searchTerm}
          folders={folders}
          setFolders={setFolders}
          selectedFolder={selectedFolder}
          setSelectedFolder={setSelectedFolder}
        />
      </div>
    </div>
  );
};

export default FolderExplorer;
