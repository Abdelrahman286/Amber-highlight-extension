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

type Highlight = {
  id: string;
  title: string;
  description: string;
  color: string;
};

export type Website = {
  id: string;
  url: string;
  highlights: Highlight[];
};

export default function WebsitesHighlights() {
  const [websites, setWebsites] = useState(websitesData);
  const [selectedWebsite, setSelectedWebsite] = useState<Website | null>(null);

  const handleDeleteWebsite = (id: string) => {
    setWebsites((prev) => prev.filter((w) => w.id !== id));
    if (selectedWebsite?.id === id) setSelectedWebsite(null);
  };

  const handleDeleteHighlight = (highlightId: string) => {
    if (!selectedWebsite) return;
    setWebsites((prev) =>
      prev.map((site) =>
        site.id === selectedWebsite.id
          ? {
              ...site,
              highlights: site.highlights.filter((h) => h.id !== highlightId),
            }
          : site
      )
    );
  };

  return (
    <div className=" h-[calc(100vh-6rem)] w-full flex bg-background border rounded-lg overflow-hidden">
      <ResizablePanelGroup
        direction="horizontal"
        className="flex-1 h-full overflow-hidden"
      >
        {/* Websites Panel */}

        <ResizablePanel defaultSize={25} minSize={25} maxSize={50}>
          <div className="flex flex-col h-full">
            {/* Header */}
            <div className="flex items-center gap-2 px-4 py-3  shrink-0">
              <Globe className="h-5 w-5 text-muted-foreground" />
              <h2 className="text-sm font-medium uppercase tracking-wide text-muted-foreground">
                Websites
              </h2>
            </div>

            {/* Scrollable List */}
            <ScrollArea className="flex-1  overflow-auto ">
              <ul className="p-3 space-y-1.5">
                {websites.map((site) => (
                  <li
                    key={site.id}
                    className={cn(
                      "flex items-center justify-between px-2 py-1 rounded-md border text-sm cursor-pointer select-none transition-colors",
                      selectedWebsite?.id === site.id
                        ? "bg-primary text-primary-foreground border-primary"
                        : "hover:bg-muted"
                    )}
                    onClick={() => setSelectedWebsite(site)}
                  >
                    <p className="truncate flex-1">{site.url}</p>

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
                          onClick={() => handleDeleteWebsite(site.id)}
                          className="text-destructive focus:text-destructive"
                        >
                          <Trash2 className="mr-2 h-4 w-4" /> Delete
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </li>
                ))}
              </ul>
            </ScrollArea>
          </div>
        </ResizablePanel>

        <ResizableHandle withHandle />

        {/* Highlights Panel */}
        <ResizablePanel defaultSize={75}>
          <div className="flex flex-col h-full">
            {/* Header */}
            <div className="flex items-center gap-2 px-4 py-3  shrink-0">
              <Star className="h-5 w-5 text-muted-foreground" />
              <h2 className="text-sm font-medium uppercase tracking-wide text-muted-foreground">
                Highlights
              </h2>
            </div>

            {/* Scrollable Highlights */}
            <ScrollArea className="flex-1 h-full p-4 max-h-screen pb-14">
              {selectedWebsite ? (
                selectedWebsite.highlights.length > 0 ? (
                  <div className="space-y-3">
                    {selectedWebsite.highlights.map((highlight) => (
                      <div
                        key={highlight.id}
                        className={cn(
                          "p-4 rounded-lg border relative group ",
                          highlight.color
                        )}
                      >
                        <div className="flex justify-between items-start">
                          <h3 className="font-semibold mb-1 flex items-center gap-2">
                            <Star className="h-4 w-4 text-muted-foreground" />
                            {highlight.title}
                          </h3>

                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button
                                variant="ghost"
                                size="icon"
                                className="opacity-0 group-hover:opacity-100 transition-opacity"
                                onClick={(e) => e.stopPropagation()}
                              >
                                <MoreVertical className="h-4 w-4" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end" className="w-32">
                              <DropdownMenuItem>Open</DropdownMenuItem>
                              <DropdownMenuItem
                                onClick={() =>
                                  handleDeleteHighlight(highlight.id)
                                }
                                className="text-destructive focus:text-destructive"
                              >
                                <Trash2 className="mr-2 h-4 w-4" /> Delete
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </div>

                        <p className="text-sm text-muted-foreground leading-snug">
                          {highlight.description}
                        </p>
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
