import React, { useState } from "react";
import { Globe, Star, MoreVertical, ExternalLink, Trash2 } from "lucide-react";
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
import { websitesData } from "./data";
import { Websites, StoredHighlight } from "../../../content/type";

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

        const websites = res?.data ?? [];
        setWebsites(websites);
      } catch (error) {
        console.error("Error fetching websites list:", error);
        setWebsites([]);
      }
    };

    fetchWebsites();
  }, []);

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

  //   const handleDeleteWebsite = (id: string) => {
  //     setWebsites((prev) => prev.filter((w) => w.id !== id));
  //     if (selectedWebsite?.id === id) setSelectedWebsite(null);
  //   };

  //   const handleDeleteHighlight = (highlightId: string) => {
  //     if (!selectedWebsite) return;
  //     setWebsites((prev) =>
  //       prev.map((site) =>
  //         site.id === selectedWebsite.id
  //           ? {
  //               ...site,
  //               highlights: site.highlights.filter((h) => h.id !== highlightId),
  //             }
  //           : site
  //       )
  //     );
  //   };

  return (
    <div className=" h-[calc(100vh-5.6rem)] w-full flex bg-background border rounded-lg overflow-hidden">
      <ResizablePanelGroup
        direction="horizontal"
        className="flex-1 h-full overflow-hidden"
      >
        {/* Websites Panel */}

        <ResizablePanel defaultSize={25} minSize={20} maxSize={50}>
          <div className="flex flex-col h-full bg-muted/40">
            {/* Header */}
            <div className="flex items-center gap-2 px-4 py-3  shrink-0">
              <Globe className="h-5 w-5 text-muted-foreground" />
              <h2 className="text-sm font-medium uppercase tracking-wide text-muted-foreground">
                Website Pages
              </h2>
            </div>

            {/* Scrollable List */}
            <ScrollArea className="flex-1 overflow-auto">
              <ul className="p-3 space-y-1.5">
                {websites?.length > 0 ? (
                  websites.map((site) => (
                    <li
                      key={site.id}
                      className={cn(
                        "flex items-center justify-between px-2 py-0.5 rounded-md border text-sm cursor-pointer select-none",
                        selectedWebsite?.id === site.id
                          ? "border-zinc-700"
                          : "border-zinc-200"
                      )}
                      onClick={() => setSelectedWebsite(site)}
                    >
                      <p className="truncate flex-1 overflow-hidden text-ellipsis whitespace-nowrap w-[100px]">
                        {site.url}
                      </p>

                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <MoreVertical className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className="w-32">
                          <DropdownMenuItem
                            onClick={() => window.open(site.url, "_blank")}
                          >
                            <ExternalLink className="mr-2 h-4 w-4" /> Open
                          </DropdownMenuItem>
                          <DropdownMenuItem
                            onClick={() => window.open(site.url, "_blank")}
                            className="text-destructive focus:text-destructive"
                          >
                            <Trash2 className="mr-2 h-4 w-4" /> Delete
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </li>
                  ))
                ) : (
                  <div className="flex flex-col items-center justify-center py-10 text-center text-muted-foreground">
                    <Globe className="h-6 w-6 mb-2 opacity-50" />
                    <p className="text-sm">No websites with highlights yet.</p>
                    <p className="text-xs text-muted-foreground">
                      Add highlights on any webpage to see them appear in
                      websites list.
                    </p>
                  </div>
                )}
              </ul>
            </ScrollArea>
          </div>
        </ResizablePanel>

        <ResizableHandle />

        {/* Highlights Panel */}
        <ResizablePanel defaultSize={75}>
          <div className="flex flex-col h-full bg-zinc-100/20">
            {/* Header */}
            <div className="flex items-center gap-2 px-4 py-3  shrink-0">
              <Star className="h-5 w-5 text-muted-foreground" />
              <h2 className="text-sm font-medium uppercase tracking-wide text-muted-foreground">
                Highlights
              </h2>
            </div>

            {/* Scrollable Highlights */}
            <ScrollArea className="flex-1 h-full p-4 max-h-screen pb-14 ">
              {selectedWebsite ? (
                websiteHighlights?.length > 0 ? (
                  <div className="space-y-3 ">
                    {websiteHighlights.map((highlight) => (
                      <div
                        key={highlight.id}
                        className="bg-background group rounded-md border hover:shadow-md transition-shadow flex overflow-hidden"
                      >
                        {/* Color bar */}
                        <div
                          className="w-2"
                          style={{
                            background: highlight?.color || "yellow",
                          }}
                        ></div>

                        {/* Content area */}
                        <div className="flex-1 p-3 flex flex-col gap-1">
                          <div className="flex justify-between items-start">
                            <h3 className="text-sm tracking-wide font-medium flex-1 pr-2">
                              {highlight.selectionString}
                            </h3>

                            {/* Dropdown menu */}
                            <DropdownMenu>
                              <DropdownMenuTrigger asChild>
                                <Button
                                  variant="ghost"
                                  size="icon-sm"
                                  className="opacity-0 group-hover:opacity-100 transition-opacity"
                                  onClick={(e) => e.stopPropagation()}
                                >
                                  <MoreVertical className="h-4 w-4" />
                                </Button>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent align="end" className="w-32">
                                <DropdownMenuItem
                                  // onClick={() => handleDeleteHighlight(highlight.id)}
                                  className="text-destructive focus:text-destructive"
                                >
                                  <Trash2 className="mr-2 h-4 w-4" /> Delete
                                </DropdownMenuItem>
                              </DropdownMenuContent>
                            </DropdownMenu>
                          </div>

                          {/* Notes section */}
                          {highlight.notes && (
                            <p className="text-sm text-muted-foreground leading-snug mt-1 ml-6">
                              {highlight.notes}
                            </p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="h-full flex items-center justify-center text-muted-foreground italic text-sm">
                    No highlights yet.
                  </div>
                )
              ) : (
                <div className="h-full flex items-center justify-center text-muted-foreground italic text-sm">
                  Select a website to view its highlights.
                </div>
              )}
            </ScrollArea>
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
}
