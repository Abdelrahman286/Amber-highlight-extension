import { browser } from "wxt/browser";
import {
  getAllHighlightsDB,
  addHighlightDB,
  deleteAllHighlightsDB,
  addWebsiteDB,
  getWebsiteHighlightsDB,
  deleteHighlightDB,
  updateHighlightDB,
  getHighlightDB,
  getAllWebsitesDB,
  deleteWebsiteDB,
  getAllFoldersDb,
  getFolderByHighlightIdDB,
  getFolderHighlightsDB,
} from "./src/dbFunction";

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
  getWebsites: async (message, sender, sendResponse) => {
    try {
      const res = await getAllWebsitesDB();
      sendResponse(res);
    } catch (err: any) {
      sendResponse(err);
    }
  },

  getWebsiteHighlights: async (message, sender, sendResponse) => {
    try {
      const res = await getWebsiteHighlightsDB(message.data);
      sendResponse(res);
    } catch (err: any) {
      sendResponse(err);
    }
  },

  deleteSingleHighlight: async (message, sender, sendResponse) => {
    try {
      const res = await deleteHighlightDB(message.data);
      sendResponse(res);
    } catch (err: any) {
      sendResponse(err);
    }
  },

  deleteHighlightFromDocumentToBgScript: (message, sender, sendResponse) => {
    try {
      browser.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        if (tabs[0]?.id) {
          browser.tabs.sendMessage(tabs[0].id, {
            action: "deleteHighlightFromDocumentToContentScript",
            data: message.data,
          });
        }
        // ✅ respond once done
        sendResponse({ success: true });
      });
    } catch (err: any) {
      sendResponse({ success: false, error: err });
    }

    // ✅ keep channel open until sendResponse is called
    return true;
  },

  updateHighlight: async (message, sender, sendResponse) => {
    try {
      const { id, updates } = message.data;
      const res = await updateHighlightDB(id, updates);
      sendResponse(res);
    } catch (err: any) {
      sendResponse({ success: false, error: err });
    }
  },

  getSingleHighlight: async (message, sender, sendResponse) => {
    try {
      const res = await getHighlightDB(message.data);
      sendResponse(res);
    } catch (err: any) {
      sendResponse({ success: false, error: err });
    }
  },

  deleteWebsite: async (message, sender, sendResponse) => {
    try {
      const res = await deleteWebsiteDB(message.data);
      sendResponse(res);
    } catch (err: any) {
      sendResponse({ success: false, error: err });
    }
  },

  getFolders: async (message, sender, sendResponse) => {
    try {
      const res = await getAllFoldersDb();
      sendResponse(res);
    } catch (err: any) {
      sendResponse(err);
    }
  },

  openFoldersManager: async (message, sender, sendResponse) => {
    try {
      const url =
        browser.runtime.getURL("amberOptionsPage.html" as any) +
        "?section=folders";

      browser.tabs.create({ url });
      sendResponse({ success: true });
    } catch (err: any) {
      sendResponse(err);
    }
  },

  openHelpPage: async (message, sender, sendResponse) => {
    try {
      const url =
        browser.runtime.getURL("amberOptionsPage.html" as any) +
        "?section=help";

      browser.tabs.create({ url });
      sendResponse({ success: true });
    } catch (err: any) {
      sendResponse(err);
    }
  },

  getFolderByHighlightId: async (message, sender, sendResponse) => {
    try {
      const res = await getFolderByHighlightIdDB(message.data);
      sendResponse(res);
    } catch (err: any) {
      sendResponse(err);
    }
  },

  getFolderHighlights: async (message, sender, sendResponse) => {
    try {
      const res = await getFolderHighlightsDB(message.data);
      sendResponse(res);
    } catch (err: any) {
      sendResponse(err);
    }
  },

  scrollToHighlight: async (message, sender, sendResponse) => {
    try {
      const [tab] = await browser.tabs.query({
        active: true,
        currentWindow: true,
      });
      if (tab?.id) {
        await browser.tabs.sendMessage(tab.id, {
          action: "scrollToHighlight",
          data: message.data,
        });
      }
    } catch (err: any) {
      sendResponse(err);
    }
  },
};

export default defineBackground(() => {
  // on install guide
  browser.runtime.onInstalled.addListener(async (details) => {
    // 1. Only run on fresh install (not update)
    if (details.reason === "install") {
      console.log("Extension installed — refreshing tabs and opening guide...");

      try {
        // 2. Refresh all open tabs
        const tabs = await browser.tabs.query({});
        for (const tab of tabs) {
          if (tab.id && tab.url?.startsWith("http")) {
            browser.tabs.reload(tab.id);
          }
        }

        // 3. Open your guide URL
        const guideUrl = browser.runtime.getURL("AmberGuide.html" as any);
        await browser.tabs.create({ url: guideUrl });
      } catch (error) {
        console.error("Error during install handling:", error);
      }
    }
  });

  // Handle Messages
  browser.runtime.onMessage.addListener((message, sender, sendResponse) => {
    const handler = messageHandlers[message?.action];
    if (handler) {
      handler(message, sender, sendResponse);
      return true; // keep sendResponse alive for async
    }
  });
});
