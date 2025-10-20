import React, { useState, useEffect } from "react";
import { RefreshCw, Globe, Moon, Sun } from "lucide-react";
import { useTheme } from "../theme-provider";

export default function HeaderSection({
  activeUrl,
  loading,
  loadWebsiteHighlights,
}: {
  activeUrl?: string;
  loading: boolean;
  loadWebsiteHighlights: () => void;
}) {
  const { setTheme, theme } = useTheme();

  const faviconUrl = activeUrl
    ? `https://www.google.com/s2/favicons?domain=${
        new URL(activeUrl).hostname
      }&sz=64`
    : "";

  return (
    <div className="flex items-center justify-between gap-3 w-full px-3 py-2 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm mb-3 transition-colors">
      {/* Left Section: Favicon + URL */}
      <div className="flex items-center gap-2 min-w-0">
        {activeUrl ? (
          <>
            <img
              src={faviconUrl}
              alt="favicon"
              className="w-4 h-4 rounded-sm flex-shrink-0"
            />
            <a
              href={activeUrl}
              target="_blank"
              rel="noreferrer"
              className="text-sm text-blue-600 dark:text-blue-400 hover:underline truncate max-w-[200px] sm:max-w-[300px] md:max-w-[400px] lg:max-w-[500px]"
              title={activeUrl}
            >
              {activeUrl}
            </a>
          </>
        ) : (
          <div className="flex items-center gap-2 text-gray-400">
            <Globe className="w-4 h-4" />
            <span className="text-sm italic">No active tab</span>
          </div>
        )}
      </div>

      {/* Right Section: Refresh + Theme Toggle */}
      <div className="flex items-center gap-2 flex-shrink-0">
        <button
          onClick={loadWebsiteHighlights}
          disabled={loading}
          className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-sm font-medium text-gray-700 dark:text-gray-200 shadow-sm hover:bg-gray-50 dark:hover:bg-gray-600 active:scale-[0.97] transition disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <RefreshCw
            className={`w-4 h-4 ${
              loading
                ? "animate-spin text-amber-500"
                : "text-gray-600 dark:text-gray-200"
            }`}
          />
          {loading ? "Refreshing" : "Refresh"}
        </button>

        <button
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          className="p-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 transition active:scale-[0.97]"
          title={
            theme == "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"
          }
        >
          {theme == "dark" ? (
            <Sun className="w-4 h-4 text-yellow-400" />
          ) : (
            <Moon className="w-4 h-4 text-gray-700" />
          )}
        </button>
      </div>
    </div>
  );
}
