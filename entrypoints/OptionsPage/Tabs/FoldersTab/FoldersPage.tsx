import React, { useState, useEffect } from "react";
import { Star } from "lucide-react";
import {
  ResizablePanelGroup,
  ResizablePanel,
  ResizableHandle,
} from "@/components/ui/resizable";
import { StoredHighlight } from "../../../content/type";
import FolderHighlights from "./HighlightsListLayout";
import FolderManager from "../../../src/FoldersManager/FoldersManager";
import { FolderNode } from "@/entrypoints/src/FoldersManager/types";

export default function WebsitesHighlights() {
  const [folderHighlights, setFolderHighlights] = useState<StoredHighlight[]>(
    []
  );
  const [selectedFolder, setSelectedFolder] = useState<FolderNode | null>(null);

  useEffect(() => {
    const fetchHighlights = async () => {
      if (!selectedFolder?.id) return;
      try {
        const response = await browser.runtime.sendMessage({
          action: "getFolderHighlights",
          data: selectedFolder.id,
        });

        if (response?.success) {
          setFolderHighlights(response.data);
        } else {
          console.error("Failed to fetch highlights:", response?.error);
        }
      } catch (error) {
        console.error("Error fetching highlights:", error);
      }
    };
    fetchHighlights();
  }, [selectedFolder]);

  const handleDeleteHighlight = async (id: string) => {
    if (!selectedFolder) return;
    setFolderHighlights((prev) => prev.filter((h) => h.id !== id));
    try {
      // update folderID
      await browser.runtime.sendMessage({
        action: "updateHighlight",
        data: {
          id: id,
          updates: { folderId: "" },
        },
      });
    } catch (err) {
      console.error("Error deleting highlight:", err);
    }
    return;
  };

  return (
    <div className="h-[calc(100vh-5.6rem)] w-full flex bg-background border rounded-lg overflow-hidden">
      <ResizablePanelGroup
        direction="horizontal"
        className="flex-1 h-full overflow-hidden"
      >
        {/* Websites Panel */}
        <ResizablePanel defaultSize={25} minSize={20} maxSize={50}>
          <div className="flex flex-col h-full bg-muted/40">
            {/* folders tree */}
            <FolderManager
              selectedFolder={selectedFolder}
              setSelectedFolder={setSelectedFolder}
            ></FolderManager>
          </div>
        </ResizablePanel>

        <ResizableHandle />

        {/* Highlights Panel */}
        <ResizablePanel defaultSize={75}>
          <div className="flex flex-col h-full bg-muted/55">
            <div className="flex items-center gap-2 px-4 py-3 shrink-0">
              <Star className="h-5 w-5 text-muted-foreground" />
              <h2 className="text-sm font-medium uppercase tracking-wide text-muted-foreground">
                Highlights
              </h2>
            </div>

            <FolderHighlights
              selectedFolder={selectedFolder}
              folderHighlights={folderHighlights}
              setFolderHighlights={setFolderHighlights}
              handleDeleteHighlight={handleDeleteHighlight}
            />
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
}
