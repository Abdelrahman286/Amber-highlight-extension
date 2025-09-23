import "@/assets/tailwind.css";
import { useEffect, useState, useRef } from "react";
import { highlight } from "./highlightFunction";
import { restoreHighlights } from "./RestoreHighlights";

const App = () => {
  const [buttonPos, setButtonPos] = useState<{ x: number; y: number } | null>(
    null
  );

  // store selection globally inside this ref
  const selectionRef = useRef<Selection | null>(null);

  useEffect(() => {
    function handleMouseUp() {
      const selection = window.getSelection();

      if (selection && !selection.isCollapsed) {
        const range = selection.getRangeAt(selection.rangeCount - 1);
        const rect = range.getBoundingClientRect();

        // store selection string globally

        selectionRef.current = selection;

        setButtonPos({
          x: rect.left + rect.width / 2,
          y: rect.bottom + 8, // account for scrolling
        });
      } else {
        setButtonPos(null);
        selectionRef.current = null; // clear selection
      }
    }

    function handleScroll() {
      setButtonPos(null); // hide button on scroll
    }

    document.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleHighlightText = () => {
    const selection = selectionRef.current;
    if (!selection || selection.rangeCount === 0) return;

    // Get the first range
    const range = selection.getRangeAt(0);

    // The common ancestor of the selection
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

  // Restore highlights
  useEffect(() => {
    function handleDOMContentLoaded() {
      restoreHighlights();
    }

    // If the DOM is already loaded (common in React apps), run immediately
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", handleDOMContentLoaded);
    } else {
      // Already loaded
      restoreHighlights();
    }

    return () => {
      document.removeEventListener("DOMContentLoaded", handleDOMContentLoaded);
    };
  }, []);

  return (
    <div className="p-0 m-0">
      {buttonPos && (
        <button
          className="fixed text-sm z-50 bg-blue-600 text-white px-3 py-1 rounded-lg shadow-lg animate-bounce"
          style={{
            top: `${buttonPos.y}px`,
            left: `${buttonPos.x}px`,
            transform: "translateX(-50%)",
          }}
          onClick={handleHighlightText}
        >
          H
        </button>
      )}
    </div>
  );
};

export default App;
