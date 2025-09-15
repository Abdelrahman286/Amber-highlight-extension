import { defineConfig } from "wxt";
import tailwindcss from "@tailwindcss/vite";
// See https://wxt.dev/api/config.html
export default defineConfig({
  modules: ["@wxt-dev/module-react"],
  manifest: {
    permissions: ["storage", "unlimitedStorage", "sidePanel"],
    optional_permissions: ["tabs", "downloads"],
    name: "Amber",
    version: "0.0.1",
    description: "Text Hihglighting chrome extension",
  },
  // @ts-expect-error: vite is valid in WXT config but not typed
  vite: () => ({
    plugins: [tailwindcss()],
  }),
});
