import { defineConfig } from "wxt";
import tailwindcss from "@tailwindcss/vite";
// See https://wxt.dev/api/config.html
export default defineConfig({
  modules: ["@wxt-dev/module-react"],
  manifest: {
    permissions: ["storage", "unlimitedStorage", "sidePanel"],
    optional_permissions: ["tabs", "downloads"],
    name: "MemoTab - New Tab Notes",
    version: "2.9.4",
    description: "__MSG_extDescription__",
    default_locale: "en",
  },
  // @ts-expect-error: vite is valid in WXT config but not typed
  vite: () => ({
    plugins: [tailwindcss()],
  }),
});
