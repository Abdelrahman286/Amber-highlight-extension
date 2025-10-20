"use client";

import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import {
  HelpCircle,
  Rocket,
  Globe,
  Download,
  ExternalLink,
  Loader2,
} from "lucide-react";

declare const chrome: any;

export default function HelpPage() {
  const [availability, setAvailability] = useState<
    "available" | "downloadable" | "downloading" | "unknown"
  >("unknown");

  const [progress, setProgress] = useState<number>(0);

  // Check Gemini Nano availability
  useEffect(() => {
    const checkAvailability = async () => {
      try {
        const status = await (window as any).LanguageModel?.availability();
        setAvailability(status ?? "unknown");
      } catch (err) {
        console.error("Error checking Gemini Nano availability:", err);
        setAvailability("unknown");
      }
    };
    checkAvailability();
  }, []);

  // Trigger Gemini Nano model download
  const handleDownload = async () => {
    try {
      console.log("🚀 Starting Gemini Nano download with monitor…");

      setAvailability("downloading");
      setProgress(0);

      const session = await (window as any).LanguageModel.create({
        monitor(m: any) {
          m.addEventListener("statechange", (e: any) => {
            console.log("📦 State changed:", e.state);
            if (e.state === "downloading") setAvailability("downloading");
            if (e.state === "available") {
              setAvailability("available");
              setProgress(100);
            }
          });

          m.addEventListener("downloadprogress", (e: any) => {
            const pct = Math.min(Math.floor(e.loaded * 100), 100);
            console.log(`⬇️ Download progress: ${pct}%`);
            setProgress(pct);
          });
        },
      });

      console.log("✅ LanguageModel.create() resolved:", session);
    } catch (err) {
      console.error("❌ Error starting model download:", err);
      console.info(
        "Make sure chrome://flags/#prompt-api-for-gemini-nano is enabled and Chrome restarted."
      );
      setAvailability("downloadable");
    }
  };

  // Open chrome://flags link safely
  const openFlag = (flagId: string) => {
    const url = `chrome://flags/#${flagId}`;
    try {
      if (typeof chrome !== "undefined" && chrome?.tabs?.create) {
        chrome.tabs.create({ url });
      } else {
        window.open(url, "_blank");
      }
    } catch (err) {
      console.error(
        "Failed to open flag via chrome.tabs.create, falling back:",
        err
      );
      window.open(url, "_blank");
    }
  };

  return (
    <div>
      {/* --- Section 1: Enable Chrome Flags --- */}
      <Card className="shadow-sm border border-border/50">
        <CardHeader className="flex flex-row items-center gap-3">
          <Rocket className="w-5 h-5 text-primary" />
          <CardTitle className="text-xl">
            1. Enable Chrome Flags & Download Gemini Nano Model
          </CardTitle>
        </CardHeader>

        <CardContent className="text-muted-foreground space-y-4">
          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>Chrome version</strong> must be{" "}
              <span className="font-medium">≥ 128.0</span>
            </li>
            <li>
              Minimum <span className="font-medium">22 GB</span> of free storage
              space
            </li>

            {/* Flags */}
            {[
              {
                label: "optimization guide",
                id: "optimization-guide-on-device-model",
                note: "Enabled BypassPerfRequirement",
              },
              {
                label: "prompt API",
                id: "prompt-api-for-gemini-nano",
                note: "Enabled",
              },
              {
                label: "summarization API",
                id: "summarization-api-for-gemini-nano",
                note: "Enabled Multilingual",
              },
              {
                label: "translation API",
                id: "translation-api",
                note: "Enabled",
              },
            ].map((flag) => (
              <li
                key={flag.id}
                className="flex flex-col sm:flex-row sm:items-center sm:gap-3 my-4"
              >
                <div>
                  <strong>Enable {flag.label}:</strong>{" "}
                  <code className="bg-muted px-1.5 py-0.5 rounded text-sm">
                    chrome://flags/#{flag.id}
                  </code>{" "}
                  — set to{" "}
                  <code className="bg-muted px-1.5 py-0.5  rounded text-sm">
                    {flag.note}
                  </code>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => openFlag(flag.id)}
                  className="mt-2 sm:mt-0 flex items-center gap-2"
                >
                  <ExternalLink className="w-4 h-4" /> Open flag
                </Button>
              </li>
            ))}
          </ul>

          {/* Model Availability and Progress */}
          <div className=" border-t border-border/50 pt-4 space-y-3">
            <p className="text-sm">
              <strong>Gemini Nano model status:</strong>{" "}
              <span
                className={`font-medium ${
                  availability === "available"
                    ? "text-green-600"
                    : availability === "downloading"
                    ? "text-blue-600"
                    : "text-yellow-600"
                }`}
              >
                {availability === "unknown"
                  ? "Checking..."
                  : availability.charAt(0).toUpperCase() +
                    availability.slice(1)}
              </span>
            </p>

            {availability === "downloading" && (
              <div className="space-y-3">
                <Progress value={progress} />
                <p className="text-xs text-muted-foreground text-center">
                  Downloading model... {progress}%
                </p>
                <p className="text-xs text-center text-muted-foreground italic">
                  This may take a few minutes. Please wait patiently while
                  Chrome downloads the on-device Gemini Nano model.
                </p>
              </div>
            )}

            {availability !== "available" && (
              <div className="flex flex-col items-center space-y-2">
                <Button
                  onClick={handleDownload}
                  size="sm"
                  variant="default"
                  disabled={availability === "downloading"}
                  className="flex items-center gap-2"
                >
                  {availability === "downloading" ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Downloading...
                    </>
                  ) : (
                    <>
                      <Download className="w-4 h-4" />
                      Download Gemini Nano Model
                    </>
                  )}
                </Button>

                {availability === "downloading" && (
                  <p className="text-xs text-muted-foreground italic">
                    This may take a few minutes. Please wait...
                  </p>
                )}
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
