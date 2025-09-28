import { browser } from "wxt/browser";

export default defineBackground(() => {
  // Set uninstall URL (no await)

  // Listen for install event
  browser.runtime.onInstalled.addListener((details) => {
    if (details.reason === "install") {
    }
  });

  // open sidepanel
  browser.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === "openSidePanel") {
      browser.windows.getCurrent((currentWindow) => {
        if (currentWindow?.id && browser.sidePanel?.open) {
          browser.sidePanel
            .open({ windowId: currentWindow.id })
            .catch((err) => {
              console.error("Error opening side panel:", err);
            });
        } else {
          console.log("Side panel API not supported");
        }
      });
    }
  });
});
