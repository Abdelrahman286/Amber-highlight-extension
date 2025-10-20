import React, { useEffect, useState } from "react";
import { browser } from "wxt/browser";
import { StoredHighlight } from "../../content/type";
import { Button } from "@/components/ui/button";
import {
  Eye,
  Trash2,
  AlertTriangle,
  MoreVertical,
  Info,
  Highlighter,
} from "lucide-react";
import HeaderSection from "./HeaderSection";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const MainPage = () => {
  const [highlights, setHighlights] = useState<StoredHighlight[]>([]);
  const [lostHighlights, setLostHighlights] = useState<StoredHighlight[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeUrl, setActiveUrl] = useState<string>("");
  const [deletingId, setDeletingId] = useState<string | null>(null);

  const handleDelete = async (id: string) => {
    try {
      setDeletingId(id);
      const res = await browser.runtime.sendMessage({
        action: "deleteSingleHighlight",
        data: id,
      });

      if (res.success) {
        await browser.runtime.sendMessage({
          action: "deleteHighlightFromDocumentToBgScript",
          data: id,
        });
        setHighlights((prev) => prev.filter((h) => h.id !== id));
        setLostHighlights((prev) => prev.filter((h) => h.id !== id));
      } else {
        console.error("Failed to delete highlight:", res.error);
      }
    } catch (err) {
      console.error("Error deleting highlight:", err);
    } finally {
      setDeletingId(null);
    }
  };

  const loadWebsiteHighlights = async () => {
    try {
      setLoading(true);
      const tabs = await browser.tabs.query({
        active: true,
        currentWindow: true,
      });
      const activeTab = tabs[0];
      if (!activeTab?.url) {
        setHighlights([]);
        setLostHighlights([]); // ✅ clear lost highlights when no active URL
        setActiveUrl("");
        setLoading(false);
        return;
      }

      // ✅ if URL changed, clear lost highlights to avoid mixing with old data
      setLostHighlights([]);
      setActiveUrl(activeTab.url);

      const websiteRes = await browser.runtime.sendMessage({
        action: "getWebsiteHighlights",
        data: activeTab.url,
      });

      if (websiteRes?.success) {
        const sorted = (websiteRes.data || []).sort(
          (a: StoredHighlight, b: StoredHighlight) =>
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );
        setHighlights(sorted);
      } else {
        setHighlights([]);
      }
    } catch (err) {
      console.error("Error loading website highlights:", err);
      setHighlights([]);
      setLostHighlights([]); // ✅ clear on error too
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadWebsiteHighlights();

    const listener = (message: any) => {
      if (message.action === "invalidateSidepanelHighlights") {
        loadWebsiteHighlights();
      }

      if (message.action === "lostHighlights" && Array.isArray(message.data)) {
        setHighlights((prev) => {
          const lost: StoredHighlight[] = [];
          const remaining: StoredHighlight[] = [];

          prev.forEach((h) => {
            if (message.data.includes(h.id)) {
              lost.push(h);
            } else {
              remaining.push(h);
            }
          });

          if (lost.length > 0) {
            setLostHighlights((prevLost) => [
              ...prevLost,
              ...lost.filter((lh) => !prevLost.find((pl) => pl.id === lh.id)),
            ]);
          }

          return remaining;
        });
      }
    };

    browser.runtime.onMessage.addListener(listener);
    return () => browser.runtime.onMessage.removeListener(listener);
  }, []);

  const handleScrollToHighlight = async (id: string) => {
    try {
      await browser.runtime.sendMessage({
        action: "scrollToHighlight",
        data: id,
      });
    } catch (err) {
      console.error("Error scrolling to highlight:", err);
    }
  };

  const renderHighlight = (highlight: StoredHighlight, isLost = false) => (
    <div
      key={highlight.id}
      className="bg-background group rounded-md border flex overflow-hidden"
    >
      {/* Color bar */}
      <div
        className="w-2"
        style={{
          background: highlight?.color || "yellow",
        }}
      ></div>

      {/* Content area */}
      <div className="flex-1 p-3 flex flex-col gap-1 w-full overflow-auto">
        <div className="flex justify-between items-start">
          <h3 className="text-sm tracking-wide font-medium flex-1 pr-2 break-words whitespace-pre-wrap">
            {highlight.selectionString}
          </h3>

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
            <DropdownMenuContent align="end" className="w-36">
              {!isLost && (
                <DropdownMenuItem
                  onClick={() => {
                    handleScrollToHighlight(highlight.id);
                  }}
                >
                  <Eye className="mr-2 h-4 w-4" /> Show
                </DropdownMenuItem>
              )}

              <DropdownMenuItem
                onClick={() => {
                  handleDelete(highlight.id);
                }}
                className="text-destructive focus:text-destructive"
              >
                <Trash2 className="mr-2 h-4 w-4" /> Delete
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <p className="text-sm text-muted-foreground leading-snug mt-1 ml-6 break-all whitespace-pre-wrap">
          {highlight?.notes || ""}
        </p>
      </div>
    </div>
  );

  return (
    <div className="p-2">
      <HeaderSection
        activeUrl={activeUrl}
        loading={loading}
        loadWebsiteHighlights={loadWebsiteHighlights}
      />

      {loading ? (
        <p className="text-center text-gray-400 italic mt-4">Loading...</p>
      ) : (
        <>
          {/* Highlights Section */}
          <div className="mb-5">
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-base font-semibold flex items-center gap-2">
                <Highlighter size={16} /> Highlights
              </h2>
              <span className="text-xs text-gray-500">
                {highlights.length} total
              </span>
            </div>

            {highlights.length === 0 ? (
              <p className="text-center text-gray-500 italic">
                No highlights yet.
              </p>
            ) : (
              <ul className="space-y-3">
                {highlights.map((ele) => {
                  return renderHighlight(ele, false);
                })}
              </ul>
            )}
          </div>

          {/* Lost Highlights */}
          {lostHighlights.length > 0 && (
            <div className="mt-6">
              <div className="flex items-center justify-between mb-2">
                <h2 className="text-base font-semibold text-red-600 flex items-center gap-2">
                  <AlertTriangle size={16} /> Lost Highlights
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Info
                          size={15}
                          className="text-gray-500 hover:text-gray-700 cursor-pointer"
                        />
                      </TooltipTrigger>
                      <TooltipContent side="top" className="max-w-xs text-sm">
                        The page’s content has changed since the highlights were
                        created. This could be due to changes in the page
                        structure or deleted highlights. Please try to highlight
                        the text again.
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </h2>

                <span className="text-xs text-gray-500">
                  {lostHighlights.length} lost
                </span>
              </div>
              <ul className="space-y-3">
                {lostHighlights.map((ele) => {
                  return renderHighlight(ele, true);
                })}
              </ul>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default MainPage;
