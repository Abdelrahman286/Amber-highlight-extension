import { highlight } from "../highlightFunction";
import { useAppContext } from "../context/AppContext";
import Button from "./Button/Button";
import { Highlighter, Logs } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { getTriggersButtonsCoord } from "../PositioningUtils";
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
    const createdAt = Date.now();
    const id = crypto.randomUUID();
    const urlId = "324-234234-234-23";

    const success = highlight({
      id,
      urlId,
      container,
      selection,
      color,
      textColor,
      createdAt,
    });

    if (success) {
      setButtonPos(null);
    } else {
      console.log("Failed to highlight");
    }
  };

  let x = 0;
  let y = 0;

  if (buttonPos) {
    ({ x, y } = getTriggersButtonsCoord(buttonPos.x, buttonPos.y));
  }

  return (
    <AnimatePresence>
      {buttonPos && (
        <motion.div
          key="trigger-icons"
          initial={{ opacity: 0, y: -12, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -8, scale: 0.95 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="trigger-icons-container"
          style={{
            top: `${y}px`,
            left: `${x}px`,
            transform: "translateX(-50%)",
          }}
        >
          <Button
            size={"sm"}
            variant={"ghost"}
            className="trigger-button"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setShowActionsBox(true);
            }}
          >
            <Logs className="icon" />
          </Button>
          <Button
            size={"sm"}
            variant={"ghost"}
            className="trigger-button"
            onClick={handleHighlightText}
          >
            <Highlighter className="icon" />
          </Button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default TriggerIcons;
