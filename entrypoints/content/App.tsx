import "@/assets/contentScript.css";
import { useEffect } from "react";
import { restoreHighlights } from "./RestoreHighlights";
import { useAppContext } from "./context/AppContext";
import TriggerIcons from "./components/TriggerIcons";
import ActionsBox from "./components/ActionsBox";
import { useDeleteHighlightListener } from "./hooks/useDomDeleteHighlightListener";
import { useRestoreHighlights } from "./hooks/useRestoreHighlights";
import { useWebFonts } from "./hooks/injectFont";

const App = () => {
  const {
    buttonPos,
    setButtonPos,
    selectionRef,
    showActionsBox,
    setShowActionsBox,
    setSelectedHighlightId,
  } = useAppContext();

  useEffect(() => {
    console.log(1);
    function handleMouseUp(e: MouseEvent) {
      if (
        (e.target as HTMLElement).tagName == "AMBER-HIGHLIGHTER" &&
        (e.target as HTMLElement)?.dataset?.amberhighlightid
      ) {
        const target = e.target as HTMLElement;

        setSelectedHighlightId(String(target?.dataset?.amberhighlightid));
        // show actions box
        setShowActionsBox(true);
        setButtonPos({
          x: e.clientX,
          y: e.clientY + 8,
        });

        return;
      }
      if (showActionsBox) return;

      setTimeout(() => {
        const selection = window.getSelection();

        if (
          selection &&
          selection.toString().trim().length > 0 &&
          !selection.isCollapsed &&
          selection.rangeCount > 0
        ) {
          selectionRef.current = selection;

          setButtonPos({
            x: e.clientX,
            y: e.clientY + 8,
          });
        } else {
          setButtonPos(null);
          setShowActionsBox(false);
          selectionRef.current = null;
          setSelectedHighlightId("");
        }
      }, 40);
    }

    function handleScroll() {
      setButtonPos(null);
      setShowActionsBox(false);
      setSelectedHighlightId("");
    }

    document.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [showActionsBox]);

  // Restore highlights on document intial load
  useRestoreHighlights();

  // Remove highlight from the document in response to a message from the side panel
  useDeleteHighlightListener();

  // inject google font to the main document to be used in shadow root document
  useWebFonts();
  return (
    <div
      style={{
        padding: 0,
        margin: 0,
        position: "fixed",
        zIndex: 100,
      }}
    >
      {buttonPos && !showActionsBox ? <TriggerIcons /> : null}
      {showActionsBox && <ActionsBox />}
    </div>
  );
};

export default App;
