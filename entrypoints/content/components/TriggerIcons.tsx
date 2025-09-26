import React from "react";
import { highlight } from "../highlightFunction";
import { useAppContext } from "../context/AppContext";
import { Button } from "@/components/ui/button";
import { Highlighter, Logs } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const TriggerIcons = () => {
  const { selectionRef, setButtonPos, buttonPos, setShowActionsBox } =
    useAppContext();

  const handleHighlightText = () => {
    const selection = selectionRef.current;
    if (!selection || selection.rangeCount === 0) return;

    const range = selection.getRangeAt(0);

    const container =
      range.commonAncestorContainer.nodeType === Node.ELEMENT_NODE
        ? (range.commonAncestorContainer as HTMLElement)
        : (range.commonAncestorContainer.parentElement as HTMLElement);

    const color = "yellow";
    const textColor = "black";
    const highlightIndex = Date.now();

    const success = highlight({
      container,
      selection,
      color,
      textColor,
      highlightIndex,
    });

    if (success) {
      console.log("Highlighted: done");
      setButtonPos(null);
    } else {
      console.log("Failed to highlight");
    }
  };

  return (
    <AnimatePresence>
      {buttonPos && (
        <motion.div
          key="trigger-icons"
          initial={{ opacity: 0, y: -12, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -8, scale: 0.95 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="fixed z-[999999] flex gap-2 rounded-2xl border border-white/20 bg-black/70 backdrop-blur-md p-1 shadow-2xl"
          style={{
            top: `${buttonPos.y}px`,
            left: `${buttonPos.x}px`,
            transform: "translateX(-50%)",
          }}
        >
          <Button
            size={"iconSm"}
            variant={"ghost"}
            className="rounded-xl text-white transition-all hover:bg-white/20 hover:text-yellow-300 hover:scale-110 hover:shadow-lg"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setShowActionsBox(true);
            }}
          >
            <Logs className="w-5 h-5" />
          </Button>
          <Button
            size={"iconSm"}
            variant={"ghost"}
            className="rounded-xl text-white transition-all hover:bg-white/20 hover:text-yellow-300 hover:scale-110 hover:shadow-lg"
            onClick={handleHighlightText}
          >
            <Highlighter className="w-5 h-5" />
          </Button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default TriggerIcons;
