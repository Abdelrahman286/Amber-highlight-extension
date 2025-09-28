import "@/assets/contentScript.css";
import { useEffect } from "react";
import { restoreHighlights } from "./RestoreHighlights";
import { useAppContext } from "./context/AppContext";
import TriggerIcons from "./components/TriggerIcons";
import ActionsBox from "./components/ActionsBox";

const App = () => {
  const {
    buttonPos,
    setButtonPos,
    selectionRef,
    showActionsBox,
    setShowActionsBox,
  } = useAppContext();

  useEffect(() => {
    function handleMouseUp(e: MouseEvent) {
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
        }
      }, 40);
    }

    function handleScroll() {
      setButtonPos(null);
      setShowActionsBox(false);
    }

    document.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [showActionsBox]);

  // Restore highlights
  useEffect(() => {
    function handleDOMContentLoaded() {
      restoreHighlights();
    }

    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", handleDOMContentLoaded);
    } else {
      restoreHighlights();
    }

    return () => {
      document.removeEventListener("DOMContentLoaded", handleDOMContentLoaded);
    };
  }, [showActionsBox]);

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
