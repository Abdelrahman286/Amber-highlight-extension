"use client";

import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { FileText, Check, X, RotateCcw, Play, LogOut } from "lucide-react";
import { motion } from "framer-motion";
import { StoredHighlight } from "@/entrypoints/content/type";

interface FlashcardsModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  highlights: StoredHighlight[];
}

const FlashcardsModal: React.FC<FlashcardsModalProps> = ({
  open,
  onOpenChange,
  highlights,
}) => {
  const [phase, setPhase] = useState<"choose" | "ready" | "show" | "results">(
    "choose"
  );
  const [showNotesFirst, setShowNotesFirst] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [knowCount, setKnowCount] = useState(0);
  const [dontKnowCount, setDontKnowCount] = useState(0);

  const currentCard = highlights[currentIndex];

  const handleAnswer = (know: boolean) => {
    if (know) setKnowCount((p) => p + 1);
    else setDontKnowCount((p) => p + 1);

    setFlipped(false);

    if (currentIndex + 1 < highlights.length) {
      setCurrentIndex((i) => i + 1);
    } else {
      setPhase("results");
    }
  };

  const reset = () => {
    setPhase("choose");
    setKnowCount(0);
    setDontKnowCount(0);
    setCurrentIndex(0);
    setFlipped(false);
  };

  const exitSession = () => {
    setPhase("results");
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <FileText className="w-4 h-4" />
            Flashcards
          </DialogTitle>
          <DialogDescription>
            {highlights?.length} highlights available
          </DialogDescription>
        </DialogHeader>

        {highlights.length === 0 ? (
          <p className="text-sm text-muted-foreground p-2">
            No highlights for selected folders/websites.
          </p>
        ) : (
          <div className="mt-4">
            {/* Phase 1: Choose Side */}
            {phase === "choose" && (
              <div className="space-y-4 text-center">
                <p className="text-sm text-muted-foreground">
                  What should be displayed on the front of each card?
                </p>
                <div className="flex justify-center gap-3">
                  <Button
                    variant={showNotesFirst ? "outline" : "default"}
                    onClick={() => setShowNotesFirst(false)}
                  >
                    Show Highlight First
                  </Button>
                  <Button
                    variant={!showNotesFirst ? "outline" : "default"}
                    onClick={() => setShowNotesFirst(true)}
                  >
                    Show Note First
                  </Button>
                </div>

                <Button
                  className="mt-6 flex items-center gap-2"
                  onClick={() => setPhase("ready")}
                >
                  <Play className="w-4 h-4" /> Start Flashcards
                </Button>
              </div>
            )}

            {/* Phase 2: Ready screen */}
            {phase === "ready" && (
              <div className="text-center space-y-4">
                <p className="text-sm text-muted-foreground">
                  You’re about to start reviewing{" "}
                  <strong>{highlights.length}</strong> cards.
                </p>
                <Button
                  className="flex items-center gap-2"
                  onClick={() => setPhase("show")}
                >
                  <Play className="w-4 h-4" /> Begin
                </Button>
              </div>
            )}

            {/* Phase 3: Flashcards */}

            {phase === "show" && currentCard && (
              <div className="flex flex-col items-center">
                <div
                  className="relative w-full h-60 sm:h-64 cursor-pointer perspective"
                  onClick={() => setFlipped((f) => !f)}
                >
                  <motion.div
                    key={currentCard.id}
                    initial={false}
                    animate={{ rotateY: flipped ? 180 : 0 }}
                    transition={{ duration: 0.6 }}
                    className="absolute w-full h-full rounded-xl border border-border bg-background text-center text-sm flex items-center justify-center p-4"
                    style={{
                      border: `3px solid ${
                        currentCard.color || "rgba(0,0,0,0.25)"
                      }`,
                      transformStyle: "preserve-3d",
                    }}
                  >
                    {/* Front side */}
                    <div
                      className="absolute w-full h-full backface-hidden rounded-xl overflow-hidden"
                      style={{ backfaceVisibility: "hidden" }}
                    >
                      <div className="h-full w-full overflow-y-auto p-2 break-words flex justify-center items-center">
                        {showNotesFirst
                          ? currentCard.notes || "No notes"
                          : currentCard.selectionString}
                      </div>
                    </div>

                    {/* Back side */}
                    <div
                      className="absolute w-full h-full rounded-xl overflow-hidden "
                      style={{
                        transform: "rotateY(180deg)",
                        backfaceVisibility: "hidden",
                      }}
                    >
                      <div className="h-full w-full overflow-y-auto p-2 break-words flex justify-center items-center">
                        {showNotesFirst
                          ? currentCard.selectionString
                          : currentCard.notes || "No notes"}
                      </div>
                    </div>
                  </motion.div>
                </div>

                <div className="flex gap-4 mt-6">
                  <Button
                    onClick={() => handleAnswer(true)}
                    className="bg-green-600 hover:bg-green-700 text-white flex items-center gap-1"
                  >
                    <Check className="w-4 h-4" /> I Know
                  </Button>
                  <Button
                    onClick={() => handleAnswer(false)}
                    className="bg-red-600 hover:bg-red-700 text-white flex items-center gap-1"
                  >
                    <X className="w-4 h-4" /> I Don’t Know
                  </Button>
                </div>

                <div className="flex justify-between items-center w-full mt-4">
                  <p className="text-xs text-muted-foreground">
                    Card {currentIndex + 1} of {highlights.length}
                  </p>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={exitSession}
                    className="flex items-center gap-1 text-muted-foreground hover:text-foreground"
                  >
                    <LogOut className="w-4 h-4" />
                    Exit
                  </Button>
                </div>
              </div>
            )}

            {/* Phase 4: Results */}
            {phase === "results" && (
              <div className="text-center space-y-4">
                <h3 className="text-lg font-semibold">Session Summary</h3>
                <p className="text-sm text-muted-foreground">
                  You knew <strong>{knowCount}</strong> out of{" "}
                  <strong>{highlights.length}</strong> cards.
                </p>

                <div className="flex justify-center gap-4 mt-3">
                  <span className="text-green-700 font-medium flex items-center gap-1">
                    <Check className="w-4 h-4" /> {knowCount} Known
                  </span>
                  <span className="text-red-700 font-medium flex items-center gap-1">
                    <X className="w-4 h-4" /> {dontKnowCount} Unknown
                  </span>
                </div>

                <div className="flex justify-center gap-3 mt-4">
                  <Button
                    onClick={reset}
                    className="flex items-center gap-2"
                    variant="outline"
                  >
                    <RotateCcw className="w-4 h-4" /> Restart
                  </Button>
                  <Button
                    onClick={() => onOpenChange(false)}
                    className="flex items-center gap-2"
                  >
                    <LogOut className="w-4 h-4" /> Close
                  </Button>
                </div>
              </div>
            )}
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default FlashcardsModal;
