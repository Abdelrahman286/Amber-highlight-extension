import React, { useEffect, useState } from "react";
import { db } from "../../../src/db"; // ✅ Dexie instance
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ScrollArea } from "@/components/ui/scroll-area";
import { toast } from "sonner";
import {
  Folder,
  Globe,
  Upload,
  Download,
  CheckSquare,
  XSquare,
  UploadCloud,
} from "lucide-react";

type FolderType = {
  id: string;
  createdAt: number;
  name: string;
  parentId?: string | null;
};

type WebsiteType = {
  id: string;
  createdAt: number;
  url: string;
};

type HighlightType = {
  id: string;
  createdAt: number;
  urlId?: string;
  folderId?: string;
  color?: string;
  fontSettings?: any;
  notes?: string;
  selectionString?: string;
  anchorOffset?: number;
  focusOffset?: number;
  anchorPath?: string;
  focusPath?: string;
  anchorContext?: string;
  focusContext?: string;
};

export default function ImportExportPage() {
  const [folders, setFolders] = useState<FolderType[]>([]);
  const [websites, setWebsites] = useState<WebsiteType[]>([]);
  const [selectedFolders, setSelectedFolders] = useState<string[]>([]);
  const [selectedWebsites, setSelectedWebsites] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  // --- Load folders + websites from IndexedDB ---
  useEffect(() => {
    (async () => {
      const [f, w] = await Promise.all([
        db.folders.toArray(),
        db.websites.toArray(),
      ]);
      setFolders(f);
      setWebsites(w);
    })();
  }, []);

  // --- Selection toggles ---
  const toggleFolder = (id: string) => {
    setSelectedFolders((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  const toggleWebsite = (id: string) => {
    setSelectedWebsites((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  const toggleAllFolders = () => {
    if (selectedFolders.length === folders.length) setSelectedFolders([]);
    else setSelectedFolders(folders.map((f) => f.id));
  };

  const toggleAllWebsites = () => {
    if (selectedWebsites.length === websites.length) setSelectedWebsites([]);
    else setSelectedWebsites(websites.map((w) => w.id));
  };

  // --- Export ---
  const handleExport = async () => {
    setLoading(true);
    try {
      const exportFolders =
        selectedFolders.length > 0
          ? await db.folders.bulkGet(selectedFolders)
          : await db.folders.toArray();

      const exportWebsites =
        selectedWebsites.length > 0
          ? await db.websites.bulkGet(selectedWebsites)
          : await db.websites.toArray();

      const allHighlights = await db.highlights.toArray();
      const exportHighlights = allHighlights.filter(
        (h) =>
          exportFolders.some((f) => f?.id === h.folderId) ||
          exportWebsites.some((w) => w?.id === h.urlId)
      );

      const data = {
        folders: exportFolders.filter(Boolean),
        websites: exportWebsites.filter(Boolean),
        highlights: exportHighlights,
      };

      const blob = new Blob([JSON.stringify(data, null, 2)], {
        type: "application/json",
      });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `amber-backup-${new Date().toISOString()}.json`;
      a.click();
      URL.revokeObjectURL(url);
      toast.success("Export successful!");
    } catch (err) {
      console.error(err);
      toast.error("Failed to export data");
    } finally {
      setLoading(false);
    }
  };

  // --- Import ---
  const handleImport = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setLoading(true);
    try {
      const text = await file.text();
      const data = JSON.parse(text);

      if (data.folders?.length) await db.folders.bulkPut(data.folders);
      if (data.websites?.length) await db.websites.bulkPut(data.websites);
      if (data.highlights?.length) await db.highlights.bulkPut(data.highlights);

      toast.success("Import successful!");
    } catch (err) {
      console.error(err);
      toast.error("Import failed — invalid or corrupt file");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6 space-y-6">
      <p className="text-center text-muted-foreground text-md font-bold ">
        Backup or restore your Amber highlights, folders, and websites.
      </p>

      {/* --- Export Section --- */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Download className="w-5 h-5" /> Export Data
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Folders */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-semibold flex items-center gap-1">
                <Folder className="w-4 h-4" /> Folders
              </h3>
              {folders.length > 0 && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={toggleAllFolders}
                  className="text-xs flex items-center gap-1"
                >
                  {selectedFolders.length === folders.length ? (
                    <>
                      <XSquare className="w-4 h-4" /> Deselect All
                    </>
                  ) : (
                    <>
                      <CheckSquare className="w-4 h-4" /> Select All
                    </>
                  )}
                </Button>
              )}
            </div>

            {folders.length === 0 ? (
              <p className="text-sm text-muted-foreground italic">
                No folders found.
              </p>
            ) : (
              <ScrollArea className="h-40 border rounded-md p-1">
                <div className="space-y-1">
                  {folders.map((f) => (
                    <div
                      key={f.id}
                      className="flex items-center space-x-2 text-sm p-0.5"
                    >
                      <Checkbox
                        checked={selectedFolders.includes(f.id)}
                        onCheckedChange={() => toggleFolder(f.id)}
                      />
                      <Label>{f.name}</Label>
                    </div>
                  ))}
                </div>
              </ScrollArea>
            )}
          </div>

          {/* Websites */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-semibold flex items-center gap-1">
                <Globe className="w-4 h-4" /> Websites
              </h3>
              {websites.length > 0 && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={toggleAllWebsites}
                  className="text-xs flex items-center gap-1"
                >
                  {selectedWebsites.length === websites.length ? (
                    <>
                      <XSquare className="w-4 h-4" /> Deselect All
                    </>
                  ) : (
                    <>
                      <CheckSquare className="w-4 h-4" /> Select All
                    </>
                  )}
                </Button>
              )}
            </div>

            {websites.length === 0 ? (
              <p className="text-sm text-muted-foreground italic">
                No websites found.
              </p>
            ) : (
              <ScrollArea className="h-40 border rounded-md p-2">
                <div className="space-y-1">
                  {websites.map((w) => (
                    <div
                      key={w.id}
                      className="flex items-center space-x-2 text-sm p-0.5"
                    >
                      <Checkbox
                        checked={selectedWebsites.includes(w.id)}
                        onCheckedChange={() => toggleWebsite(w.id)}
                      />
                      <Label className="truncate w-full">{w.url}</Label>
                    </div>
                  ))}
                </div>
              </ScrollArea>
            )}
          </div>

          <Button
            onClick={handleExport}
            disabled={loading || (!folders.length && !websites.length)}
            className="w-full"
          >
            {loading ? "Exporting..." : "Export Selected as JSON"}
          </Button>
        </CardContent>
      </Card>

      {/* --- Import Section --- */}
      {/* --- Import Section --- */}
      <Card className="border border-border/50 shadow-sm">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-lg font-semibold">
            <Upload className="w-5 h-5 text-primary" />
            Import Data
          </CardTitle>
        </CardHeader>

        <CardContent className="space-y-4">
          <Label htmlFor="importFile" className="text-sm font-medium">
            Select a JSON file to import:
          </Label>

          {/* Input wrapper with icon */}
          <div className="relative">
            <Input
              id="importFile"
              type="file"
              accept="application/json"
              onChange={handleImport}
              disabled={loading}
              className="cursor-pointer pr-10 file:hidden"
            />
            <UploadCloud className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground pointer-events-none peer-disabled:opacity-50" />
          </div>

          <p className="text-sm text-muted-foreground">
            The file should contain <code>"folders"</code>,{" "}
            <code>"websites"</code>, or <code>"highlights"</code> data.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
