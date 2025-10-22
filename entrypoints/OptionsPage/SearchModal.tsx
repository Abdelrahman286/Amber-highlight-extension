"use client";

import React, { useEffect, useState, useCallback } from "react";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Loader2, Search, Folder, Link2 } from "lucide-react";
import { StoredHighlight } from "../content/type";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { db } from "../src/db";
import { delay } from "../src/dbFunction";

export default function SearchHighlightsModal() {
  const [open, setOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState<
    (StoredHighlight & { folderName?: string; url?: string })[]
  >([]);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [offset, setOffset] = useState(0);

  const PAGE_SIZE = 100;

  // --- Shortcut handler (Ctrl/Cmd + K) ---
  useEffect(() => {
    const handleShortcut = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.code === "KeyK") {
        e.preventDefault();
        setOpen((prev) => !prev);
      }
    };

    window.addEventListener("keydown", handleShortcut);
    return () => window.removeEventListener("keydown", handleShortcut);
  }, []);

  const performSearch = useCallback(
    async (reset = false) => {
      if (!searchTerm.trim()) {
        setResults([]);
        setOffset(0);
        setHasMore(true);
        return;
      }

      setLoading(true);
      try {
        const term = searchTerm.toLowerCase();
        const startOffset = reset ? 0 : offset;

        await delay(300);

        const chunk = await db.highlights
          .orderBy("createdAt")
          .reverse()
          .offset(startOffset)
          .limit(PAGE_SIZE)
          .toArray();

        const matched = chunk.filter((h) => {
          const text = `${h.selectionString || ""} ${
            h.notes || ""
          }`.toLowerCase();
          return text.includes(term);
        });

        const folderIds = matched.map((h) => h.folderId);
        const urlIds = matched.map((h) => h.urlId);

        const foldersMap = Object.fromEntries(
          (await db.folders.where("id").anyOf(folderIds).toArray()).map((f) => [
            f.id,
            f.name,
          ])
        );

        const websitesMap = Object.fromEntries(
          (await db.websites.where("id").anyOf(urlIds).toArray()).map((w) => [
            w.id,
            w.url,
          ])
        );

        const enriched = matched.map((h) => ({
          ...h,
          folderName: foldersMap[h.folderId],
          url: websitesMap[h.urlId],
        }));

        setResults(reset ? enriched : [...results, ...enriched]);
        setOffset(startOffset + PAGE_SIZE);
        setHasMore(chunk.length === PAGE_SIZE);
      } catch (err) {
        console.error("Search error:", err);
      } finally {
        setLoading(false);
      }
    },
    [searchTerm, offset, results]
  );

  useEffect(() => {
    performSearch(true);
  }, [searchTerm]);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      {/* Trigger Button */}
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="flex items-center gap-2 font-medium shadow-sm"
        >
          <Search className="w-4 h-4" />
          Search
          <span className="ml-2 text-xs text-muted-foreground border rounded px-1">
            Ctrl K
          </span>
        </Button>
      </DialogTrigger>

      {/* Modal */}
      <DialogContent className="sm:max-w-[50vw] w-[90vw] p-6 rounded-2xl shadow-lg">
        <DialogHeader className="mb-4">
          <DialogTitle className="text-xl font-semibold tracking-tight">
            Search Highlights
          </DialogTitle>
        </DialogHeader>

        {/* Search Input */}
        <div className="mb-3">
          <div className="relative">
            <Search className="absolute left-3 top-2.5 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="Search by text or notes..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-9 rounded-xl border border-border/60 shadow-sm focus:ring-2 focus:ring-primary/40 transition-all"
            />
          </div>
        </div>

        <div className="  h-[60vh] overflow-y-auto">
          {/* Result Count */}
          {results.length > 0 && !loading && (
            <p className=" text-xs text-muted-foreground mb-2">
              {results.length} result{results.length !== 1 && "s"} found
            </p>
          )}

          {/* Loading State */}
          {loading && (
            <div className=" flex items-center justify-center py-4 text-sm text-muted-foreground">
              <Loader2 className="w-5 h-5 animate-spin mr-2" />
              Searching...
            </div>
          )}

          {/* Results */}
          {!loading && (
            <div className="space-y-3   pr-2">
              {results.length === 0 ? (
                <p className="text-sm text-muted-foreground text-center py-10">
                  No results found
                </p>
              ) : (
                results.map((h) => (
                  <div
                    key={h.id}
                    className="flex items-stretch border border-border/50 rounded-lg overflow-hidden hover:bg-muted/40 transition"
                  >
                    {/* Colored line */}
                    <div
                      className="w-1.5 flex-shrink-0"
                      style={{
                        backgroundColor: h.color || "#ccc",
                      }}
                    />

                    {/* Content */}
                    <div className="flex-1 p-3">
                      <p className="font-medium text-sm mb-1 leading-snug">
                        {h.selectionString}
                      </p>

                      {h.notes && (
                        <p className="text-xs text-muted-foreground mb-2 leading-relaxed">
                          {h.notes}
                        </p>
                      )}

                      <div className="flex items-center gap-4 text-xs text-muted-foreground flex-wrap">
                        <span className="flex items-center gap-1">
                          <Folder className="w-3.5 h-3.5" />{" "}
                          {h.folderName || "—"}
                        </span>
                        <span className="flex items-center gap-1">
                          <Link2 className="w-3.5 h-3.5" />
                          {h.url ? (
                            <a
                              href={h.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="underline hover:text-primary transition"
                            >
                              {new URL(h.url).hostname.replace("www.", "")}
                            </a>
                          ) : (
                            "—"
                          )}
                        </span>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          )}

          {/* Load More */}
          {!loading && hasMore && results.length > 0 && (
            <div className="flex justify-center mt-6">
              <Button
                variant="secondary"
                size="sm"
                onClick={() => performSearch()}
                className="rounded-lg"
              >
                Load more
              </Button>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
