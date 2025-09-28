import { browser } from "wxt/browser";
import { db } from "./src/db";

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

  // --- Add Dummy Website ---
  addDummyWebsite: (message, sender, sendResponse) => {
    db.websites
      .add({
        id: String(Math.random()),
        createdAt: Date.now(),
        url: "asadsad",
      })
      .then(() => sendResponse({ success: true }))
      .catch((err) => {
        console.error("Error adding website:", err);
        sendResponse({ success: false, error: err.message });
      });
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
