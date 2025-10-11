import React, { useState } from "react";
import {
  Globe,
  FolderTree,
  Import,
  HelpCircle,
  Info,
  Sun,
  Moon,
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

import WebsitesSection from "./Tabs/WebsiteHighlights/WebsiteHighlights";
import amberIcon from "../../assets/amber-icon.png";

type Section = "websites" | "folders" | "import" | "help" | "about";

const menuItems = [
  { id: "websites" as Section, icon: Globe, label: "Websites" },
  { id: "folders" as Section, icon: FolderTree, label: "Folders" },
  { id: "import" as Section, icon: Import, label: "Import / Export" },
  { id: "help" as Section, icon: HelpCircle, label: "Help" },
  { id: "about" as Section, icon: Info, label: "About" },
];

export default function SettingsPage() {
  const { state } = useSidebar();
  const [activeSection, setActiveSection] = useState<Section>("websites");
  const [theme, setTheme] = useState("light");

  return (
    <div className="flex min-h-screen w-full ">
      {/* Sidebar */}
      <Sidebar collapsible="icon">
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupContent>
              <SidebarMenu>
                {menuItems.map((item) => (
                  <SidebarMenuItem key={item.id}>
                    <SidebarMenuButton
                      onClick={() => setActiveSection(item.id)}
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
      <main className="flex-1 flex flex-col">
        {/* 🔹 Top Header */}
        <header className="flex items-center justify-between px-4 py-3 border-b bg-background">
          <div className="flex items-center gap-3">
            {/* Sidebar trigger first */}
            <SidebarTrigger />

            <div className="flex items-center gap-2">
              <img src={amberIcon} alt="Amber Logo" className="w-7 h-7" />
              <span className="font-semibold text-lg">Amber</span>
            </div>
          </div>

          {/* Theme toggle */}
          <button
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            className="flex items-center gap-2 px-3 py-1.5 rounded-md border hover:bg-muted transition-colors"
          >
            {theme === "light" ? (
              <>
                <Moon className="w-4 h-4" />
                <span className="text-sm">Dark Mode</span>
              </>
            ) : (
              <>
                <Sun className="w-4 h-4" />
                <span className="text-sm">Light Mode</span>
              </>
            )}
          </button>
        </header>

        {/* Page Content */}
        <div className="flex-1 p-3 bg-background overflow-auto">
          {activeSection === "websites" && <WebsitesSection />}
          {activeSection === "folders" && <EmptySection title="Folders" />}
          {activeSection === "import" && (
            <EmptySection title="Import / Export" />
          )}
          {activeSection === "help" && <EmptySection title="Help" />}
          {activeSection === "about" && <EmptySection title="About" />}
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
