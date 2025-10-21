import { defineConfig } from "wxt";
import tailwindcss from "@tailwindcss/vite";

// See https://wxt.dev/api/config.html
export default defineConfig({
  modules: ["@wxt-dev/module-react"],
  manifest: {
    permissions: [
      "storage",
      "unlimitedStorage",
      "sidePanel",
      "tabs",
      "contextMenus",
    ],
    name: "Amber - Highlight, Annotate, Summarize & Translate",
    version: "1.0.0",
    description:
      "AI-powered text highlighting Chrome extension built with Gemini Nano",
  },
  // @ts-expect-error: vite is valid in WXT config but not typed
  vite: () => ({
    plugins: [tailwindcss()],
  }),
});
