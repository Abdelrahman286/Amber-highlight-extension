import React, { useEffect, useState } from "react";
import { Websites, StoredHighlight } from "../../content/type";
import { Button } from "@/components/ui/button";

import { RefreshCcw } from "lucide-react";
import { useAppContext } from "../context/AppContext";

const App = () => {
  const { myRandomNumber } = useAppContext();
  const [highlights, setHighlights] = useState<StoredHighlight[]>([]);

  const deleteAllDB = async (): Promise<boolean> => {
    try {
      const res = await browser.runtime.sendMessage({
        action: "deleteAllHighlights",
      });

      console.log(res);

      if (res.success) {
        console.log("✅ All highlights deleted successfully.");
        return true;
      } else {
        console.warn("⚠️ Failed to delete highlights:", res.error);
        return false;
      }
    } catch (error) {
      console.error("❌ Error sending deleteAllHighlights message:", error);
      return false;
    }
  };
  // Function to load highlights
  const loadHighlights = async (): Promise<StoredHighlight[]> => {
    try {
      const res = await browser.runtime.sendMessage({
        action: "getAllHighlights",
      });
      if (res.success) {
        console.log("✅ Loaded highlights:", res.data);
        setHighlights(res.data);
        return res.data as StoredHighlight[];
      } else {
        console.warn("⚠️ Failed to load highlights:", res.error);
        return [];
      }
    } catch (error) {
      console.error("❌ Error fetching highlights:", error);
      return [];
    }
  };

  // Load highlights when component mounts
  useEffect(() => {
    const fetchData = async () => {
      const data = await loadHighlights();
      setHighlights(data);
    };

    fetchData();
  }, []);

  return (
    <div>
      <div className="border m-2 p-2 bg-slate-300">
        <Button size={"sm"} onClick={deleteAllDB}>
          Delete All DB
        </Button>
      </div>

      {/* Highlights Section */}
      <div className="border m-2 p-2 bg-slate-300 h-[500px] overflow-y-auto rounded-2xl">
        <div className="flex flex-row items-center justify-between">
          <h1 className="bold underline text-xl">Highlighrs</h1>
          <Button size={"icon-sm"} onClick={loadHighlights}>
            <RefreshCcw></RefreshCcw>
          </Button>
        </div>
        {highlights?.length === 0 ? (
          <p className="text-center text-gray-500 italic">No highlights yet.</p>
        ) : (
          <ul className="space-y-4">
            {highlights.map((site) => (
              <li
                key={site.id}
                className="rounded-xl shadow-md border p-4 flex flex-col gap-2"
                style={{
                  backgroundColor: site.color,
                  color: site.fontSettings?.color,
                }}
              >
                <div className="flex justify-between items-center flex-col gap-4">
                  <span className="text-sm font-mono opacity-70">
                    ID: {site.id}
                  </span>
                  <span className="text-xs opacity-60">
                    {new Date(site.createdAt).toLocaleString()}
                  </span>
                  <hr></hr>
                  <span className="text-sm font-mono opacity-70">
                    website: {site.urlId}
                  </span>
                </div>

                <p className="text-lg font-semibold">{site.selectionString}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default App;
