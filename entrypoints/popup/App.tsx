import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import {
  Folder,
  HelpCircle,
  Highlighter,
  AlertTriangle,
  Power,
  Check,
  X,
} from "lucide-react";

export default function Popup() {
  const [enabled, setEnabled] = useState(true);
  const [isBlockedPage, setIsBlockedPage] = useState(false);

  // Load saved extension state
  useEffect(() => {
    (async () => {
      try {
        const result = await browser.storage.local.get("amberEnabled");
        if (typeof result.amberEnabled === "boolean") {
          setEnabled(result.amberEnabled);
        }
      } catch (err) {
        console.error("Failed to load amberEnabled:", err);
      }
    })();
  }, []);

  // Check active tab and update icon whenever state changes
  useEffect(() => {
    (async () => {
      try {
        const tabs = await browser.tabs.query({
          active: true,
          currentWindow: true,
        });
        const currentUrl = tabs[0]?.url || "";
        const isChromePage = currentUrl.startsWith("chrome");
        setIsBlockedPage(isChromePage);
        updateExtensionIcon(isChromePage || !enabled);
      } catch (err) {
        console.error("Failed to check active tab:", err);
      }
    })();
  }, [enabled]);

  const updateExtensionIcon = (disabled: boolean) => {
    const path = disabled ? "icon-block-128.png" : "icon-128.png";
    browser.action.setIcon({ path }).catch(console.error);
  };

  const handleToggle = async () => {
    const newState = !enabled;
    setEnabled(newState);
    try {
      await browser.storage.local.set({ amberEnabled: newState });
      updateExtensionIcon(!newState);
    } catch (err) {
      console.error("Failed to save amberEnabled:", err);
    }
  };

  return (
    <div className="w-[360px] bg-gradient-to-br from-amber-50 via-white to-orange-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-amber-500 to-orange-500 py-4 pb-4 relative overflow-hidden">
        <div className="relative flex items-center justify-center gap-3 mb-3">
          <div className="bg-white/20 backdrop-blur-sm p-2.5 rounded-xl shadow-lg">
            <img
              src={browser.runtime.getURL("icon-128.png" as any)}
              alt="Amber Logo"
              className="w-9 h-9"
            />
          </div>
          <h1 className="text-2xl font-bold text-white tracking-tight drop-shadow-sm">
            Amber
          </h1>
        </div>
      </div>

      <div className="p-2 space-y-4 -mt-7">
        {/* Toggle Card */}
        <Card className="w-full p-5 shadow-lg border-0 bg-white/80 backdrop-blur-sm">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div
                className={`w-2 h-2 rounded-full ${
                  enabled ? "bg-green-500 animate-pulse" : "bg-gray-400"
                }`}
              ></div>
              <h2 className="text-sm font-semibold text-gray-700">
                Extension Status
              </h2>
            </div>
            <span
              className={`text-xs font-medium px-2 py-1 rounded-full ${
                enabled
                  ? "bg-green-100 text-green-700"
                  : "bg-gray-100 text-gray-600"
              }`}
            >
              {enabled ? "Active" : "Inactive"}
            </span>
          </div>

          {/* Modern Toggle Button */}
          <button
            onClick={handleToggle}
            className={`w-full relative h-14 rounded-xl transition-all duration-300 ease-out transform active:scale-95 ${
              enabled
                ? "bg-gradient-to-r from-amber-500 to-orange-500 shadow-lg shadow-amber-500/30"
                : "bg-gradient-to-r from-gray-300 to-gray-400 shadow-md"
            }`}
          >
            <div className="absolute inset-0 flex items-center justify-between px-4">
              <span className="text-white font-semibold text-sm flex items-center gap-2">
                {enabled ? (
                  <>
                    <Check className="w-5 h-5" strokeWidth={3} />
                    Enabled
                  </>
                ) : (
                  <>
                    <X className="w-5 h-5" strokeWidth={3} />
                    Disabled
                  </>
                )}
              </span>
              <div
                className={`transition-transform duration-300 ${
                  enabled ? "rotate-0" : "rotate-180"
                }`}
              >
                <Power className="w-5 h-5 text-white" />
              </div>
            </div>
          </button>
        </Card>

        {/* Permanent Alert for Blocked Page */}
        {isBlockedPage && (
          <Alert variant="destructive" className="border-red-200 bg-red-50">
            <AlertTriangle className="h-4 w-4 text-red-600" />
            <AlertTitle className="text-red-800">
              Amber is unavailable on this page
            </AlertTitle>
            <AlertDescription className="text-red-700">
              You can’t use Amber on Chrome system pages (e.g., chrome://).
            </AlertDescription>
          </Alert>
        )}

        {/* Alert for Disabled Extension (if not blocked) */}
        {!isBlockedPage && !enabled && (
          <Alert variant="destructive" className="border-red-200 bg-red-50">
            <AlertTriangle className="h-4 w-4 text-red-600" />
            <AlertTitle className="text-red-800">Amber is disabled</AlertTitle>
            <AlertDescription className="text-red-700">
              Enable Amber to highlight and organize your web content.
            </AlertDescription>
          </Alert>
        )}

        {/* Action Buttons */}
        <div className="w-full space-y-2.5">
          <Button
            variant="outline"
            className="w-full flex items-center justify-start gap-3 h-12 border-orange-200 hover:bg-orange-50 hover:border-orange-300 transition-all group"
            onClick={() =>
              browser.tabs.create({
                url:
                  browser.runtime.getURL("/amberOptionsPage.html") +
                  "?section=websites",
              })
            }
          >
            <div className="p-1.5 rounded-lg bg-orange-100 group-hover:bg-orange-200 transition-colors">
              <Highlighter className="h-4 w-4 text-orange-600" />
            </div>
            <span className="font-medium text-gray-700">Browse Highlights</span>
          </Button>

          <Button
            variant="outline"
            className="w-full flex items-center justify-start gap-3 h-12 border-amber-200 hover:bg-amber-50 hover:border-amber-300 transition-all group"
            onClick={() =>
              browser.tabs.create({
                url:
                  browser.runtime.getURL("/amberOptionsPage.html") +
                  "?section=folders",
              })
            }
          >
            <div className="p-1.5 rounded-lg bg-amber-100 group-hover:bg-amber-200 transition-colors">
              <Folder className="h-4 w-4 text-amber-600" />
            </div>
            <span className="font-medium text-gray-700">Manage Folders</span>
          </Button>

          <Button
            variant="outline"
            className="w-full flex items-center justify-start gap-3 h-12 border-blue-200 hover:bg-blue-50 hover:border-blue-300 transition-all group"
            onClick={() =>
              browser.tabs.create({
                url:
                  browser.runtime.getURL("/amberOptionsPage.html") +
                  "?section=help",
              })
            }
          >
            <div className="p-1.5 rounded-lg bg-blue-100 group-hover:bg-blue-200 transition-colors">
              <HelpCircle className="h-4 w-4 text-blue-600" />
            </div>
            <span className="font-medium text-gray-700">Help & Support</span>
          </Button>
        </div>

        {/* Footer */}
        <div className="pt-3 border-t border-gray-200">
          <p className="text-xs text-gray-500 text-center">
            © {new Date().getFullYear()} Amber Extension • v1.0.0
          </p>
        </div>
      </div>
    </div>
  );
}
