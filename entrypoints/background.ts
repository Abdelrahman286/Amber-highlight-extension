import { browser } from "wxt/browser";

export default defineBackground(() => {
  // Set uninstall URL (no await)

  // Listen for install event
  browser.runtime.onInstalled.addListener((details) => {
    if (details.reason === "install") {
    }
  });
});
