import React, { useEffect, useState } from "react";
import { browser } from "wxt/browser";
import { StoredHighlight } from "../../content/type"; // adjust import if needed
import { Button } from "@/components/ui/button";
import { Trash2, Loader2 } from "lucide-react"; // Loader2 is a nice spinner
import { delay } from "../../src/dbFunction";

const MainTab = () => {
  const [highlights, setHighlights] = useState<StoredHighlight[]>([]);
  const [lostHighlights, setLostHighlights] = useState<StoredHighlight[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeUrl, setActiveUrl] = useState<string>("");

  // Track which highlight is being deleted
  const [deletingId, setDeletingId] = useState<string | null>(null);

  const [num, setNum] = useState(0);

  const handleDelete = async (id: string) => {
    try {
      setDeletingId(id);

      // testing delay
      //   await delay(1000);

      const res = await browser.runtime.sendMessage({
        action: "deleteSingleHighlight",
        data: id,
      });

      if (res.success) {
        // send message to content script to delete the highlight from dom
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
        console.warn("No active tab URL found");
        setHighlights([]);
        setActiveUrl("");
        setLoading(false);
        return;
      }

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
        console.error("Failed to fetch highlights:", websiteRes.error);
        setHighlights([]);
      }
    } catch (err) {
      console.error("Error loading website highlights:", err);
      setHighlights([]);
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

  const renderHighlight = (site: StoredHighlight) => (
    <li
      key={site.id}
      className="rounded-xl shadow-md border p-4 flex flex-col gap-2"
      style={{
        backgroundColor: site.color,
        color: site.textColor,
      }}
    >
      <Button
        size={"iconSm"}
        onClick={() => handleDelete(site.id)}
        disabled={deletingId === site.id}
      >
        {deletingId === site.id ? (
          <Loader2 className="animate-spin" />
        ) : (
          <Trash2 />
        )}
      </Button>

      <div className="flex justify-between items-center flex-col gap-4">
        <span className="text-sm font-mono opacity-70">ID: {site.id}</span>
        <span className="text-xs opacity-60">
          {new Date(site.createdAt).toLocaleString()}
        </span>
        <hr />
        <span className="text-sm font-mono opacity-70">
          website: {site.urlId}
        </span>
      </div>

      <p className="text-lg font-semibold">{site.selectionString}</p>
    </li>
  );

  return (
    <div className="p-2">
      <h1>{num}</h1>
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-xl font-bold">Highlights</h1>
        <button
          onClick={loadWebsiteHighlights}
          disabled={loading}
          className="px-3 py-1 rounded-md border text-sm font-medium hover:bg-gray-100 disabled:opacity-50"
        >
          {loading ? "Refreshing..." : "Refresh"}
        </button>
      </div>

      {activeUrl && (
        <div className="mb-4 p-2 rounded-md bg-gray-100 text-gray-700 text-sm break-words">
          <span className="font-medium">Active Tab:</span>{" "}
          <a
            href={activeUrl}
            target="_blank"
            rel="noreferrer"
            className="text-blue-600 underline break-all"
          >
            {activeUrl}
          </a>
        </div>
      )}

      {loading ? (
        <p className="text-center text-gray-400 italic">Loading...</p>
      ) : (
        <>
          {highlights.length === 0 ? (
            <p className="text-center text-gray-500 italic">
              No highlights yet.
            </p>
          ) : (
            <ul className="space-y-4">{highlights.map(renderHighlight)}</ul>
          )}

          {lostHighlights.length > 0 && (
            <div className="mt-6">
              <h2 className="text-lg font-bold text-red-600 mb-2">
                Lost Highlights
              </h2>
              <ul className="space-y-4">
                {lostHighlights.map(renderHighlight)}
              </ul>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default MainTab;
