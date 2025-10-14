import React, { useState, useEffect } from "react";
import {
  Globe,
  Star,
  MoreVertical,
  ExternalLink,
  Trash2,
  FolderOpen,
} from "lucide-react";
import {
  ResizablePanelGroup,
  ResizablePanel,
  ResizableHandle,
} from "@/components/ui/resizable";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Websites, StoredHighlight } from "../../../content/type";
import WebsiteHighlightsList from "./HighlightsListLayout";
import FolderManager from "../../../src/FoldersManager/FoldersManager";

export default function WebsitesHighlights() {
  const [websites, setWebsites] = useState<Websites[]>([]);
  const [selectedWebsite, setSelectedWebsite] = useState<Websites | null>(null);
  const [websiteHighlights, setWebsiteHighlights] = useState<StoredHighlight[]>(
    []
  );

  // Fetch Wesbites List
  useEffect(() => {
    const fetchWebsites = async () => {
      try {
        const res = await browser.runtime.sendMessage({
          action: "getWebsites",
        });
        if (!res?.success) {
          console.warn("Failed to fetch websites:", res?.error);
          setWebsites([]);
          return;
        }
        setWebsites(res.data ?? []);
      } catch (error) {
        console.error("Error fetching websites list:", error);
        setWebsites([]);
      }
    };
    fetchWebsites();
  }, []);

  const handleDeleteHighlight = async (highlightId: string) => {
    if (!selectedWebsite) return;
    setWebsiteHighlights((prev) => prev.filter((h) => h.id !== highlightId));
    try {
      await browser.runtime.sendMessage({
        action: "deleteSingleHighlight",
        data: highlightId,
      });
    } catch (err) {
      console.error("Error deleting highlight:", err);
    }
  };

  const handleDeleteWebsite = async (id: string) => {
    setWebsites((prev) => prev.filter((w) => w.id !== id));
    setWebsiteHighlights([]);
    try {
      await browser.runtime.sendMessage({
        action: "deleteWebsite",
        data: id,
      });
    } catch (err) {
      console.error("Error deleting website:", err);
    }
  };

  useEffect(() => {
    const fetchHighlights = async () => {
      if (!selectedWebsite?.url) return;
      try {
        const response = await browser.runtime.sendMessage({
          action: "getWebsiteHighlights",
          data: selectedWebsite.url,
        });

        if (response?.success) {
          setWebsiteHighlights(response.data);
        } else {
          console.error("Failed to fetch highlights:", response?.error);
        }
      } catch (error) {
        console.error("Error fetching highlights:", error);
      }
    };
    fetchHighlights();
  }, [selectedWebsite]);

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
            <FolderManager></FolderManager>
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
            {/* Replaced content */}
            list of websites
            {/* <WebsiteHighlightsList
              selectedWebsite={selectedWebsite}
              websiteHighlights={websiteHighlights}
              setWebsiteHighlights={setWebsiteHighlights}
              handleDeleteHighlight={handleDeleteHighlight}
            /> */}
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
}
