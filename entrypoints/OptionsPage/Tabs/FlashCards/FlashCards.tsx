import React, { useEffect, useState, useMemo } from "react";
import { db } from "../../../src/db";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  FolderTree,
  Globe,
  Layers,
  PlusCircle,
  Loader2,
  X,
  FolderIcon,
  Search,
} from "lucide-react";

import { Folder, Websites, StoredHighlight } from "@/entrypoints/content/type";
import FlashcardsModal from "./FlashCardsModal";
import FlashcardsInfoAlert from "./FlashcardsInfoAlert";

const FlashCards: React.FC = () => {
  const [folders, setFolders] = useState<Folder[]>([]);
  const [websites, setWebsites] = useState<Websites[]>([]);
  const [highlights, setHighlights] = useState<StoredHighlight[]>([]);

  const [selectedFolders, setSelectedFolders] = useState<string[]>([]);
  const [selectedWebsites, setSelectedWebsites] = useState<string[]>([]);

  const [loading, setLoading] = useState(true);
  const [openModal, setOpenModal] = useState(false);

  const [folderSearch, setFolderSearch] = useState("");
  const [websiteSearch, setWebsiteSearch] = useState("");

  // Load data from IndexedDB
  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      const [f, w] = await Promise.all([
        db.folders.toArray(),
        db.websites.toArray(),
      ]);
      setFolders(f);
      setWebsites(w);
      setLoading(false);
    };
    loadData();
  }, []);

  const handleSelect = (
    id: string,
    type: "folder" | "website",
    checked: boolean
  ) => {
    if (type === "folder") {
      setSelectedFolders((prev) =>
        checked ? [...prev, id] : prev.filter((x) => x !== id)
      );
    } else {
      setSelectedWebsites((prev) =>
        checked ? [...prev, id] : prev.filter((x) => x !== id)
      );
    }
  };

  const openFlashcardsModal = async () => {
    const [byFolder, byWebsite] = await Promise.all([
      db.highlights.where("folderId").anyOf(selectedFolders).toArray(),
      db.highlights.where("urlId").anyOf(selectedWebsites).toArray(),
    ]);

    const h = [...byFolder, ...byWebsite];
    setHighlights(h);
    setOpenModal(true);
  };

  const filteredFolders = useMemo(
    () =>
      folders.filter((f) =>
        f.name.toLowerCase().includes(folderSearch.toLowerCase())
      ),
    [folders, folderSearch]
  );

  const filteredWebsites = useMemo(
    () =>
      websites.filter((w) =>
        w.url.toLowerCase().includes(websiteSearch.toLowerCase())
      ),
    [websites, websiteSearch]
  );

  useEffect(() => {
    console.log(highlights);
  }, [highlights]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64 text-muted-foreground">
        <Loader2 className="animate-spin w-5 h-5 mr-2" /> Loading data…
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4 p-4 max-w-6xl mx-auto">
      {/* Alert */}
      <FlashcardsInfoAlert />

      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold flex items-center gap-2">
          <Layers className="w-5 h-5 text-primary" />
          Flashcards
        </h2>

        <Button
          onClick={openFlashcardsModal}
          disabled={
            selectedFolders.length === 0 && selectedWebsites.length === 0
          }
          className="flex items-center gap-2"
        >
          <PlusCircle className="w-4 h-4" />
          Create Flashcards
        </Button>
      </div>

      {/* Two Sections */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Folders Section */}
        <div className="rounded-2xl border bg-background shadow-sm flex flex-col h-[70vh] min-h-0">
          <div className="flex items-center justify-between p-3 border-b">
            <div className="flex items-center gap-2 text-base font-medium">
              <FolderTree className="w-4 h-4 text-muted-foreground" />
              Folders
            </div>
            {folders.length > 0 && (
              <Button
                variant="ghost"
                size="sm"
                onClick={() =>
                  setSelectedFolders(
                    selectedFolders.length === folders.length
                      ? []
                      : folders.map((f) => f.id)
                  )
                }
              >
                {selectedFolders.length === folders.length
                  ? "Unselect all"
                  : "Select all"}
              </Button>
            )}
          </div>

          {/* Search */}
          {/* Search Box */}
          <div className="p-2">
            <div className="relative flex items-center">
              <Search className="absolute left-3 text-muted-foreground w-4 h-4" />
              <Input
                value={folderSearch}
                onChange={(e) => setFolderSearch(e.target.value)}
                placeholder="Search folders..."
                className="pl-9 pr-8 h-8 text-sm"
              />
              {folderSearch && (
                <button
                  onClick={() => setFolderSearch("")}
                  className="absolute right-3 text-muted-foreground hover:text-foreground transition"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>

          {/* Scroll Area */}
          <div className="flex-1 min-h-0 px-2">
            <ScrollArea className="h-full">
              <div className="space-y-2 py-2">
                {filteredFolders.length === 0 ? (
                  <p className="text-sm text-muted-foreground p-2">
                    No folders found.
                  </p>
                ) : (
                  filteredFolders.map((folder) => (
                    <div
                      key={folder.id}
                      className="flex items-center justify-between p-2 rounded-lg hover:bg-muted transition"
                    >
                      <div className="flex items-center gap-2">
                        <Checkbox
                          checked={selectedFolders.includes(folder.id)}
                          onCheckedChange={(checked) =>
                            handleSelect(folder.id, "folder", !!checked)
                          }
                        />
                        <FolderIcon className="w-4 h-4 text-muted-foreground" />
                        <span className="text-sm font-medium truncate">
                          {folder.name}
                        </span>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </ScrollArea>
          </div>
        </div>

        {/* Websites Section */}
        <div className="rounded-2xl border bg-background shadow-sm flex flex-col h-[70vh] min-h-0">
          <div className="flex items-center justify-between p-3 border-b">
            <div className="flex items-center gap-2 text-base font-medium">
              <Globe className="w-4 h-4 text-muted-foreground" />
              Websites
            </div>
            {websites.length > 0 && (
              <Button
                variant="ghost"
                size="sm"
                onClick={() =>
                  setSelectedWebsites(
                    selectedWebsites.length === websites.length
                      ? []
                      : websites.map((w) => w.id)
                  )
                }
              >
                {selectedWebsites.length === websites.length
                  ? "Unselect all"
                  : "Select all"}
              </Button>
            )}
          </div>

          {/* Search Box */}
          <div className="p-2">
            <div className="relative flex items-center">
              <Search className="absolute left-3 text-muted-foreground w-4 h-4" />
              <Input
                value={websiteSearch}
                onChange={(e) => setWebsiteSearch(e.target.value)}
                placeholder="Search websites..."
                className="pl-9 pr-8 h-8 text-sm"
              />
              {websiteSearch && (
                <button
                  onClick={() => setWebsiteSearch("")}
                  className="absolute right-3 text-muted-foreground hover:text-foreground transition"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>

          <div className="flex-1 min-h-0 px-2">
            <ScrollArea className="h-full">
              <div className="space-y-2 py-2">
                {filteredWebsites.length === 0 ? (
                  <p className="text-sm text-muted-foreground p-2">
                    No websites found.
                  </p>
                ) : (
                  filteredWebsites.map((website) => (
                    <div
                      key={website.id}
                      className="flex items-center justify-between p-2 rounded-lg hover:bg-muted transition"
                    >
                      <div className="flex items-center gap-2">
                        <Checkbox
                          checked={selectedWebsites.includes(website.id)}
                          onCheckedChange={(checked) =>
                            handleSelect(website.id, "website", !!checked)
                          }
                        />
                        <span className="text-sm font-medium truncate">
                          {website.url}
                        </span>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </ScrollArea>
          </div>
        </div>
      </div>

      {/* Flashcards Modal */}
      <FlashcardsModal
        open={openModal}
        onOpenChange={setOpenModal}
        highlights={highlights}
      ></FlashcardsModal>
    </div>
  );
};

export default FlashCards;
