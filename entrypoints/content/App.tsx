import "@/assets/tailwind.css";
import { useEffect, useState, useRef } from "react";
import { highlight } from "./highlightFunction";
import { restoreHighlights } from "./RestoreHighlights";
import FoldersViewer from "./FoldersViewer";
import { Button } from "@/components/ui/button";
const App = () => {
  const [buttonPos, setButtonPos] = useState<{ x: number; y: number } | null>(
    null
  );

  const [showFolder, setShowFolder] = useState(false);
  const [foldersPos, setFoldersPos] = useState({
    x: 0,
    y: 0,
  });

  // store selection globally inside this ref
  const selectionRef = useRef<Selection | null>(null);

  useEffect(() => {
    function handleMouseUp() {
      // Add a small delay to ensure selection state is finalized
      setTimeout(() => {
        const selection = window.getSelection();

        // More robust check: ensure selection exists, has text content, and is not collapsed
        if (
          selection &&
          selection.toString().trim().length > 0 &&
          !selection.isCollapsed &&
          selection.rangeCount > 0
        ) {
          const range = selection.getRangeAt(selection.rangeCount - 1);
          const rect = range.getBoundingClientRect();

          // store selection string globally
          selectionRef.current = selection;
          setButtonPos({
            x: rect.left + rect.width / 2,
            y: rect.bottom + 8, // account for scrolling
          });
        } else {
          // Hide buttons if no valid selection
          setButtonPos(null);
          selectionRef.current = null;
        }
      }, 10); // Small delay to ensure selection state is stable
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
    <div className="p-0 m-0 fixed z-[100]">
      {showFolder && (
        <div
          className="fixed z-[100] w-[300px] h-[300px] text-sm  font-black  border-2  px-3 py-1 bg-white "
          style={{
            top: `${foldersPos.y - 30}px`,
            left: `${foldersPos.x - 30}px`,
          }}
        >
          <div className="h-[240px] overflow-y-auto bg-indigo-100">
            <FoldersViewer></FoldersViewer>
          </div>

          <hr></hr>

          <Button onClick={() => setShowFolder(false)}>Hide</Button>
        </div>
      )}
      {buttonPos && (
        <div className="flex items-center">
          <button
            className="fixed text-sm z-[50] bg-blue-600 text-white px-3 py-1 rounded-lg "
            style={{
              top: `${buttonPos.y}px`,
              left: `${buttonPos.x}px`,
              transform: "translateX(-50%)",
            }}
            onClick={handleHighlightText}
          >
            H
          </button>

          <button
            className="fixed text-sm z-[50] bg-red-600 text-white px-3 py-1 rounded-lg "
            style={{
              top: `${buttonPos.y}px`,
              left: `${buttonPos.x + 40}px`,
              transform: "translateX(-50%)",
            }}
            onClick={(e) => {
              setShowFolder(true);
              setFoldersPos({ x: e.clientX, y: e.clientY });
              setButtonPos(null); // hide button on scroll
              window.getSelection()?.removeAllRanges();
              selectionRef.current = null; // clear selection
            }}
          >
            F
          </button>
        </div>
      )}
    </div>
  );
};

export default App;
