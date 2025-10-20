import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { HelpCircle, Rocket, Globe } from "lucide-react";
import FlagsSection from "./FlagsSection";
import TranslationChecker from "./TranslateSection";
import SummarizerChecker from "./SummarizeSection";

export default function HelpPage() {
  return (
    <div className="max-w-3xl mx-auto p-6 space-y-8">
      {/* Page Header */}
      <div className=" space-y-2">
        <h1 className="text-3xl font-bold tracking-tight flex  items-center gap-2">
          <HelpCircle className="w-7 h-7 text-primary" />
          Help & Setup Guide
        </h1>
        <p className="text-muted-foreground">
          Follow these steps to enable Gemini Nano features in Chrome.
        </p>
      </div>

      <Separator />

      {/* --- Section 1 --- */}
      <FlagsSection></FlagsSection>

      {/* --- Section 2 --- */}
      <TranslationChecker></TranslationChecker>

      {/* --- Section 3 --- */}
      <SummarizerChecker></SummarizerChecker>
    </div>
  );
}
