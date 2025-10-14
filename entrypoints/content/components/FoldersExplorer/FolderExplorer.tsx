import React, { useState } from "react";
import { FolderOpen, Clock, Search, X } from "lucide-react";
import FolderManager from "./ContentScriptFoldersViewer";
import { useAppContext } from "../../context/AppContext";
import { FolderNode } from "../../../src/FoldersManager/types";
import { db } from "../../../src/db";
import { buildFolderTree } from "@/entrypoints/src/FoldersManager/FoldersDB";

const FolderExplorer: React.FC = () => {
  const { setShowFolders, selectedFolder, setSelectedFolder } = useAppContext();

  const [showSearch, setShowSearch] = useState(false);
  const [activeTab, setActiveTab] = useState<"folders" | "recent">("folders");
  const [searchTerm, setSearchTerm] = useState("");
  const [folders, setFolders] = useState<FolderNode[]>([]);

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

  return (
    <div className="folder-explorer thin-scrollbar">
      {/* Header */}
      <div className="folder-header">
        <div className="folder-actions">
          <button
            className={`icon-btn ${activeTab === "folders" ? "active" : ""}`}
            title="Open Folders"
            onClick={() => setActiveTab("folders")}
          >
            <FolderOpen className="icon" />
            <span>Folders</span>
          </button>

          <button
            className={`icon-btn ${activeTab === "recent" ? "active" : ""}`}
            title="Recent Folders"
            onClick={() => setActiveTab("recent")}
          >
            <Clock className="icon" />
            <span>Recent</span>
          </button>
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
        {activeTab === "folders" ? (
          <div>
            {/* Search section */}
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
            <FolderManager
              folders={folders}
              setFolders={setFolders}
              selectedFolder={selectedFolder}
              setSelectedFolder={setSelectedFolder}
            />
          </div>
        ) : (
          <div className="coming-soon">Coming soon...</div>
        )}
      </div>
    </div>
  );
};

export default FolderExplorer;
