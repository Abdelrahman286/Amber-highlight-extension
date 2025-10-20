"use client";

import { useState, useEffect } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Brain, Loader2, Download } from "lucide-react";

export default function SummarizerChecker() {
  const [availability, setAvailability] = useState<
    "available" | "downloadable" | "downloading" | "unknown" | "unavailable"
  >("unknown");
  const [progress, setProgress] = useState(0);
  const [isDownloading, setIsDownloading] = useState(false);

  // Check availability on mount
  const checkAvailability = async () => {
    if (!("Summarizer" in self)) {
      console.log("Summarizer API is NOT available in this Chrome build.");
      setAvailability("unavailable");
      return;
    }

    try {
      const status = await (self as any).Summarizer.availability();
      console.log("Summarizer API availability:", status);
      setAvailability(status ?? "unknown");
    } catch (err) {
      console.error(
        "Summarizer API exists but availability check failed:",
        err
      );
      setAvailability("unknown");
    }
  };

  useEffect(() => {
    checkAvailability();
  }, []);

  // Trigger model download
  const handleDownload = async () => {
    setIsDownloading(true);
    setProgress(0);

    try {
      const summarizer = await (self as any).Summarizer.create({
        monitor(m: any) {
          m.addEventListener("downloadprogress", (e: any) => {
            const pct = Math.floor(e.loaded * 100);
            console.log(`Download progress: ${pct}%`);
            setProgress(pct);
          });

          m.addEventListener("statechange", (e: any) => {
            console.log("State changed:", e.state);
            if (e.state === "available") {
              setAvailability("available");
              setIsDownloading(false);
              setProgress(100);
            } else if (e.state === "downloading") {
              setAvailability("downloading");
            }
          });
        },
      });

      console.log("Summarizer ready:", summarizer);
    } catch (err) {
      console.error("Failed to initialize Summarizer:", err);
      setIsDownloading(false);
    }
  };

  return (
    <div>
      <Card className="shadow-sm border border-border/50">
        <CardHeader className="flex flex-row items-center gap-3">
          <Brain className="w-5 h-5 text-primary" />
          <CardTitle className="text-xl">
            Summarizer Availability Checker
          </CardTitle>
        </CardHeader>

        <CardContent className="space-y-6 text-muted-foreground">
          <div className="border-t pt-3 border-border/50">
            <p className="text-sm">
              The built-in{" "}
              <span className="font-medium text-foreground">
                Gemini Nano Summarizer
              </span>{" "}
              is currently{" "}
              <span
                className={`font-medium ${
                  availability === "available"
                    ? "text-green-600"
                    : availability === "downloading"
                    ? "text-blue-600"
                    : availability === "downloadable"
                    ? "text-yellow-600"
                    : "text-red-600"
                }`}
              >
                {availability === "unknown"
                  ? "checking..."
                  : availability.charAt(0).toUpperCase() +
                    availability.slice(1)}
              </span>
              .
            </p>
          </div>

          {/* Download section */}
          {availability !== "available" && (
            <div className="space-y-3">
              <Button
                variant="default"
                size="sm"
                disabled={isDownloading}
                onClick={handleDownload}
                className="flex items-center gap-2"
              >
                {isDownloading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Downloading Summarizer...
                  </>
                ) : (
                  <>
                    <Download className="w-4 h-4" />
                    Download Summarizer Model
                  </>
                )}
              </Button>

              {isDownloading && (
                <>
                  <Progress value={progress} />
                  <p className="text-xs text-center text-muted-foreground">
                    {progress}% downloaded — this may take a few minutes.
                  </p>
                </>
              )}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
