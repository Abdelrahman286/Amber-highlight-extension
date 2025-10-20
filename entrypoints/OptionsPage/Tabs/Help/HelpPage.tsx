import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const languages = [
  { code: "en", name: "English" },
  { code: "ar", name: "Arabic" },
  { code: "fr", name: "French" },
  { code: "es", name: "Spanish" },
];

const HelpPage = () => {
  const [summarizerAvailable, setSummarizerAvailable] = useState<
    boolean | null
  >(null);
  const [translatorAvailable, setTranslatorAvailable] = useState<
    boolean | null
  >(null);
  const [sourceLang, setSourceLang] = useState("en");
  const [targetLang, setTargetLang] = useState("ar");

  // Check Summarizer availability
  useEffect(() => {
    if ("Summarizer" in self) {
      (async () => {
        try {
          const availability = await Summarizer.availability();
          setSummarizerAvailable(availability.available);
        } catch (err) {
          console.error("Summarizer availability check failed:", err);
          setSummarizerAvailable(false);
        }
      })();
    } else {
      setSummarizerAvailable(false);
    }
  }, []);

  // Check Translator availability
  useEffect(() => {
    if ("Translator" in self) {
      (async () => {
        try {
          const availability = await Translator.availability({
            sourceLanguage: sourceLang,
            targetLanguage: targetLang,
          });
          setTranslatorAvailable(availability.available);
        } catch (err) {
          console.error("Translator availability check failed:", err);
          setTranslatorAvailable(false);
        }
      })();
    } else {
      setTranslatorAvailable(false);
    }
  }, [sourceLang, targetLang]);

  const initSummarizer = async () => {
    try {
      const summarizer = await Summarizer.create({
        monitor(m) {
          m.addEventListener("downloadprogress", (e: any) => {
            console.log(`Download progress: ${(e.loaded * 100).toFixed(2)}%`);
          });
          m.addEventListener("statechange", (e: any) => {
            console.log("State changed:", e.state);
          });
        },
      });
      console.log("Summarizer ready:", summarizer);
    } catch (err) {
      console.error("Failed to initialize Summarizer:", err);
    }
  };

  const initTranslator = async () => {
    try {
      const translator = await Translator.create({
        sourceLanguage: sourceLang,
        targetLanguage: targetLang,
        monitor(m) {
          m.addEventListener("downloadprogress", (e: any) => {
            console.log(`Download progress: ${(e.loaded * 100).toFixed(2)}%`);
          });
          m.addEventListener("statechange", (e: any) => {
            console.log("State changed:", e.state);
          });
        },
      });
      console.log("Translator ready:", translator);
    } catch (err) {
      console.error("Failed to initialize Translator:", err);
    }
  };

  return (
    <div className="space-y-8 p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-center">Amber Help Center</h1>

      {/* Chrome Flags */}
      <Card>
        <CardHeader>
          <CardTitle>Enable Chrome Built-in AI Features</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <p>
            To use Gemini Nano features like Summarizer and Translator, enable
            the following Chrome flag:
          </p>
          <pre className="bg-gray-100 p-2 rounded">
            chrome://flags/#optimization-guide-on-device-model
          </pre>
          <p>
            Set "Enabled BypassPerfRequirement" to bypass performance checks.
          </p>
        </CardContent>
      </Card>

      {/* Summarizer API */}
      <Card>
        <CardHeader>
          <CardTitle>Summarization API</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <p>
            Availability:{" "}
            {summarizerAvailable === null
              ? "Checking..."
              : summarizerAvailable
              ? "Available ✅"
              : "Not available ❌"}
          </p>
          <Button onClick={initSummarizer} disabled={!summarizerAvailable}>
            Download & Initialize Summarizer
          </Button>
        </CardContent>
      </Card>

      {/* Translator API */}
      <Card>
        <CardHeader>
          <CardTitle>Translation API</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <div className="flex gap-2">
            <Select
              onValueChange={(val) => setSourceLang(val)}
              value={sourceLang}
            >
              <SelectTrigger>
                <SelectValue placeholder="Source Language" />
              </SelectTrigger>
              <SelectContent>
                {languages.map((l) => (
                  <SelectItem key={l.code} value={l.code}>
                    {l.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select
              onValueChange={(val) => setTargetLang(val)}
              value={targetLang}
            >
              <SelectTrigger>
                <SelectValue placeholder="Target Language" />
              </SelectTrigger>
              <SelectContent>
                {languages.map((l) => (
                  <SelectItem key={l.code} value={l.code}>
                    {l.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <p>
            Availability:{" "}
            {translatorAvailable === null
              ? "Checking..."
              : translatorAvailable
              ? "Available ✅"
              : "Not available ❌"}
          </p>

          <Button onClick={initTranslator} disabled={!translatorAvailable}>
            Download & Initialize Translator
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default HelpPage;
