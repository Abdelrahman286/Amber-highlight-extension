import React, { useState } from "react";
import {
  Star,
  MoreVertical,
  Trash2,
  FilePlus,
  Pencil,
  Check,
  X,
} from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { StoredHighlight, Websites } from "../../../content/type";

interface WebsiteHighlightsListProps {
  selectedWebsite: Websites | null;
  websiteHighlights: StoredHighlight[];
  setWebsiteHighlights: React.Dispatch<React.SetStateAction<StoredHighlight[]>>;
  handleDeleteHighlight: (highlightId: string) => Promise<void>;
}

export default function WebsiteHighlightsList({
  selectedWebsite,
  websiteHighlights,
  setWebsiteHighlights,
  handleDeleteHighlight,
}: WebsiteHighlightsListProps) {
  const [editingHighlightId, setEditingHighlightId] = useState<string | null>(
    null
  );
  const [tempNote, setTempNote] = useState<string>("");

  const handleAddOrEditNotes = (highlight: StoredHighlight) => {
    setEditingHighlightId(highlight.id);
    setTempNote(highlight.notes || "");
  };

  const handleSaveNotes = async (highlightId: string) => {
    try {
      const res = await browser.runtime.sendMessage({
        action: "updateHighlight",
        data: { id: highlightId, updates: { notes: tempNote } },
      });

      if (res?.success) {
        setWebsiteHighlights((prev) =>
          prev.map((h) =>
            h.id === highlightId ? { ...h, notes: tempNote } : h
          )
        );
      } else {
        console.warn("Failed to update notes:", res?.error);
      }
    } catch (err) {
      console.error("Error updating notes:", err);
    } finally {
      setEditingHighlightId(null);
      setTempNote("");
    }
  };

  const handleCancelEdit = () => {
    setEditingHighlightId(null);
    setTempNote("");
  };

  if (!selectedWebsite) {
    return (
      <div className="h-full flex items-center justify-center text-muted-foreground italic text-sm">
        Select a website to view its highlights.
      </div>
    );
  }

  if (websiteHighlights.length === 0) {
    return (
      <div className="h-full flex items-center justify-center text-muted-foreground italic text-sm">
        No highlights yet.
      </div>
    );
  }

  return (
    <ScrollArea className="flex-1 h-full p-4 max-h-screen pb-14 w-full">
      <div className="space-y-3 w-full">
        {websiteHighlights.map((highlight) => (
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
                    {!highlight?.notes ? (
                      <DropdownMenuItem
                        onClick={() => handleAddOrEditNotes(highlight)}
                      >
                        <FilePlus className="mr-2 h-4 w-4" /> Add Notes
                      </DropdownMenuItem>
                    ) : (
                      <DropdownMenuItem
                        onClick={() => handleAddOrEditNotes(highlight)}
                      >
                        <Pencil className="mr-2 h-4 w-4" /> Edit Notes
                      </DropdownMenuItem>
                    )}
                    <DropdownMenuItem
                      onClick={() => handleDeleteHighlight(highlight.id)}
                      className="text-destructive focus:text-destructive"
                    >
                      <Trash2 className="mr-2 h-4 w-4" /> Delete
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>

              {/* Notes / Edit area */}
              {editingHighlightId === highlight.id ? (
                <div className="mt-2 ml-6 space-y-2">
                  <Textarea
                    value={tempNote}
                    onChange={(e) => setTempNote(e.target.value)}
                    placeholder="Write your note here..."
                    className="text-sm"
                  />
                  <div className="flex gap-2 justify-end">
                    <Button
                      size="sm"
                      variant="secondary"
                      onClick={handleCancelEdit}
                    >
                      <X className="h-4 w-4 mr-1" /> Cancel
                    </Button>
                    <Button
                      size="sm"
                      onClick={() => handleSaveNotes(highlight.id)}
                    >
                      <Check className="h-4 w-4 mr-1" /> Save
                    </Button>
                  </div>
                </div>
              ) : highlight.notes ? (
                <p className="text-sm text-muted-foreground leading-snug mt-1 ml-6 break-all whitespace-pre-wrap">
                  {highlight.notes}
                </p>
              ) : null}
            </div>
          </div>
        ))}
      </div>
    </ScrollArea>
  );
}
