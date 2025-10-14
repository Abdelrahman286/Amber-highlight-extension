import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { browser } from "wxt/browser";
import "@/assets/tailwind.css";
import { AppContextProvider } from "./context/AppContext.tsx";
import { SidebarProvider } from "@/components/ui/sidebar.tsx";
import { ThemeProvider } from "./theme-provider.tsx";

// import "@/assets/contentScript.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
    <AppContextProvider>
      <SidebarProvider>
        <App></App>
      </SidebarProvider>
    </AppContextProvider>
  </ThemeProvider>
);
