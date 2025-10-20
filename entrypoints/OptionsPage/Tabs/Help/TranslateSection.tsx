"use client";

import { useState, useEffect } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Progress } from "@/components/ui/progress";
import { Loader2, Languages, Download } from "lucide-react";

export default function TranslationChecker() {
  const [sourceLang, setSourceLang] = useState("en");
  const [targetLang, setTargetLang] = useState("ar");
  const [availability, setAvailability] = useState<
    "available" | "downloadable" | "downloading" | "unknown" | "unavailable"
  >("unknown");
  const [progress, setProgress] = useState(0);
  const [isDownloading, setIsDownloading] = useState(false);

  // Check translation availability
  const checkAvailability = async (src = sourceLang, tgt = targetLang) => {
    if (!("Translator" in self)) {
      console.log("Translate API is NOT available in this Chrome build.");
      setAvailability("unavailable");
      return;
    }

    try {
      const status = await (self as any).Translator.availability({
        sourceLanguage: src,
        targetLanguage: tgt,
      });
      console.log("Translate API availability:", status);
      setAvailability(status ?? "unknown");
    } catch (err) {
      console.error(
        "Translator API exists but availability check failed:",
        err
      );
      setAvailability("unknown");
    }
  };

  useEffect(() => {
    checkAvailability(sourceLang, targetLang);
  }, [sourceLang, targetLang]);

  // Trigger translation model download
  const handleDownload = async () => {
    setIsDownloading(true);
    setProgress(0);

    try {
      const translator = await (self as any).Translator.create({
        sourceLanguage: sourceLang,
        targetLanguage: targetLang,
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

      console.log("Translator ready:", translator);
    } catch (err) {
      console.error("Failed to initialize Translator:", err);
      setIsDownloading(false);
    }
  };

  const languages = [
    { code: "en", name: "English" },
    { code: "ar", name: "Arabic" },
    { code: "fr", name: "French" },
    { code: "es", name: "Spanish" },
    { code: "de", name: "German" },
    { code: "it", name: "Italian" },
    { code: "ru", name: "Russian" },
    { code: "zh", name: "Chinese" },
    { code: "ja", name: "Japanese" },
  ];

  return (
    <div>
      <Card className="shadow-sm border border-border/50">
        <CardHeader className="flex flex-row items-center gap-3">
          <Languages className="w-5 h-5 text-primary" />
          <CardTitle className="text-xl">
            Translation Availability Checker
          </CardTitle>
        </CardHeader>

        <CardContent className="space-y-6 text-muted-foreground">
          {/* Dropdowns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <p className="text-sm mb-1">Source Language</p>
              <Select value={sourceLang} onValueChange={setSourceLang}>
                <SelectTrigger>
                  <SelectValue placeholder="Select source" />
                </SelectTrigger>
                <SelectContent>
                  {languages.map((lang) => (
                    <SelectItem key={lang.code} value={lang.code}>
                      {lang.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <p className="text-sm mb-1">Target Language</p>
              <Select value={targetLang} onValueChange={setTargetLang}>
                <SelectTrigger>
                  <SelectValue placeholder="Select target" />
                </SelectTrigger>
                <SelectContent>
                  {languages.map((lang) => (
                    <SelectItem key={lang.code} value={lang.code}>
                      {lang.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Availability text */}
          <div className="pt-3 border-t border-border/50">
            <p className="text-sm">
              Translation from{" "}
              <span className="font-medium">
                {languages.find((l) => l.code === sourceLang)?.name}
              </span>{" "}
              to{" "}
              <span className="font-medium">
                {languages.find((l) => l.code === targetLang)?.name}
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
                    Downloading model...
                  </>
                ) : (
                  <>
                    <Download className="w-4 h-4" />
                    Download Translation Model
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
