import React, { useState } from "react";
import {
  Globe,
  FolderTree,
  Import,
  HelpCircle,
  Info,
  Sun,
  Moon,
  Layers,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar";
import { Separator } from "@/components/ui/separator";
import { Toaster } from "sonner";

import WebsitesSection from "./Tabs/WebsiteHighlights/WebsiteHighlights";
import FoldersPage from "./Tabs/FoldersTab/FoldersPage";
import HelpPage from "./Tabs/Help/HelpPage";
import AboutPage from "./Tabs/AboutPage";
import FlashCards from "./Tabs/FlashCards/FlashCards";

type Section =
  | "websites"
  | "folders"
  | "import"
  | "help"
  | "about"
  | "flashcards";

const menuItems = [
  { id: "websites" as Section, icon: Globe, label: "Highlighted Pages" },
  { id: "folders" as Section, icon: FolderTree, label: "Folders" },
  { id: "flashcards" as Section, icon: Layers, label: "Flash Cards" },
  { id: "import" as Section, icon: Import, label: "Import / Export" },
  { id: "help" as Section, icon: HelpCircle, label: "Help" },
  { id: "about" as Section, icon: Info, label: "About" },
];

import { useTheme } from "./theme-provider";
import ImportExportPage from "./Tabs/ImportExport/ImportExportPage";
import HighlightsSearch from "./SearchModal";

export default function SettingsPage() {
  const { state } = useSidebar();
  const [activeSection, setActiveSection] = useState<Section>();

  const { setTheme, theme } = useTheme();

  // change the activeSection based on url parameter
  useEffect(() => {
    const section = new URLSearchParams(window.location.search).get(
      "section"
    ) as Section;
    const validIds = menuItems.map((item) => item.id);
    setActiveSection(validIds.includes(section) ? section : "websites");
  }, []);

  return (
    <div className="flex min-h-screen w-full ">
      <Toaster
        closeButton
        richColors
        duration={3000}
        position="top-center"
        theme="system"
      />
      {/* Sidebar */}
      <Sidebar collapsible="icon">
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupContent>
              <SidebarMenu>
                {menuItems.map((item) => (
                  <SidebarMenuItem key={item.id}>
                    <SidebarMenuButton
                      onClick={() => {
                        setActiveSection(item.id);

                        // Construct the new URL
                        const baseUrl = browser.runtime.getURL(
                          "amberOptionsPage.html" as any
                        );
                        const newUrl = `${baseUrl}?section=${item.id}`;

                        // Update the URL in the address bar without navigation
                        window.history.replaceState(null, "", newUrl);
                      }}
                      isActive={activeSection === item.id}
                      tooltip={item.label}
                    >
                      <item.icon className="w-4 h-4" />
                      <span>{item.label}</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
      {/* Main Area */}
      <main className="flex-1 flex flex-col ">
        {/* 🔹 Top Header */}
        <header className="flex items-center justify-between px-4 py-3 border-b bg-background ">
          <div className="flex items-center gap-3">
            {/* Sidebar trigger first */}
            <SidebarTrigger />

            <div className="flex items-center gap-2">
              <img
                src={browser.runtime.getURL("icon-128.png" as any)}
                alt="Amber Logo"
                className="w-7 h-7"
              />
              <span className="font-semibold text-lg">Amber</span>
            </div>
          </div>

          {/* Theme toggle */}
          <div className="flex flex-row gap-2">
            <HighlightsSearch></HighlightsSearch>
            <button
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              className="flex items-center gap-2 px-3 py-1.5 rounded-md border hover:bg-muted transition-colors"
            >
              {theme === "light" ? (
                <Moon className="w-4 h-4" />
              ) : (
                <Sun className="w-4 h-4" />
              )}
            </button>
          </div>
        </header>

        {/* Page Content */}
        <div className="flex-1 p-3 bg-background ">
          {activeSection === "websites" && <WebsitesSection />}
          {activeSection === "folders" && <FoldersPage></FoldersPage>}
          {activeSection === "import" && <ImportExportPage></ImportExportPage>}
          {activeSection === "help" && <HelpPage></HelpPage>}
          {activeSection === "about" && <AboutPage></AboutPage>}
          {activeSection === "flashcards" && <FlashCards></FlashCards>}
        </div>
      </main>
    </div>
  );
}

/* ---------------------- Empty Section ---------------------- */
function EmptySection({ title }: { title: string }) {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center text-muted-foreground">
      <h2 className="text-2xl font-semibold mb-2">{title}</h2>
      <p>Content coming soon...</p>
    </div>
  );
}
