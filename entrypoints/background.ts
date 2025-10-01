import { browser } from "wxt/browser";
import { db } from "./src/db";
import {
  getAllHighlightsDB,
  addHighlightDB,
  deleteAllHighlightsDB,
  addWebsiteDB,
} from "./src/dbFunction";

console.log("background script");

// Define handlers map
const messageHandlers: Record<
  string,
  (message: any, sender: any, sendResponse: (res: any) => void) => void
> = {
  // --- Open Side Panel ---
  openSidePanel: (message, sender, sendResponse) => {
    browser.windows.getCurrent((currentWindow) => {
      if (currentWindow?.id && browser.sidePanel?.open) {
        browser.sidePanel.open({ windowId: currentWindow.id }, () => {
          if (browser.runtime.lastError) {
            console.error(
              "Error opening side panel:",
              browser.runtime.lastError
            );
            sendResponse({
              success: false,
              error: browser.runtime.lastError.message,
            });
          } else {
            sendResponse({ success: true });
          }
        });
      } else {
        console.log("Side panel API not supported");
        sendResponse({ success: false, error: "Side panel not supported" });
      }
    });
  },

  // --- Get All Highlights ---
  getAllHighlights: async (message, sender, sendResponse) => {
    try {
      const data = await getAllHighlightsDB();
      sendResponse(data);
    } catch (err: any) {
      sendResponse(err);
    }
  },

  // --- Add Highlight ---
  addHighlight: async (message, sender, sendResponse) => {
    try {
      const res = await addHighlightDB(message.data);
      sendResponse(res);
    } catch (err: any) {
      sendResponse(err);
    }
  },

  // --- Delete All Highlights ---
  deleteAllHighlights: async (message, sender, sendResponse) => {
    try {
      const res = await deleteAllHighlightsDB();
      sendResponse(res);
    } catch (err: any) {
      sendResponse(err);
    }
  },

  // --- Save Website ----

  addWebsite: async (message, sender, sendResponse) => {
    try {
      const res = await addWebsiteDB(message.data);
      sendResponse(res);
    } catch (err: any) {
      sendResponse(err);
    }
  },
};

export default defineBackground(() => {
  browser.runtime.onMessage.addListener((message, sender, sendResponse) => {
    const handler = messageHandlers[message?.action];
    if (handler) {
      handler(message, sender, sendResponse);
      return true; // keep sendResponse alive for async
    }
  });
});
