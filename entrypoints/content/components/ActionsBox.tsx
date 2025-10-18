import { useEffect, useRef } from "react";
import { useAppContext } from "../context/AppContext";
import { motion, AnimatePresence } from "framer-motion";
import ActionsBoxContent from "./ActionsBox/ActionsBoxContent";
import { ACTIONS_BOX_WIDTH, ACTIONS_BOX_HEIGHT } from "../CONTANTS";
import { getActionsBoxCoord } from "../PositioningUtils";
const ActionsBox = () => {
  const {
    buttonPos,
    setButtonPos,
    setShowActionsBox,
    setSelectedHighlightId,
    setShowFolders,
    setSelectedFolder,
    expandView,
    setExpandView,
  } = useAppContext();
  const boxRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function handleClick(event: MouseEvent) {
      const path = event.composedPath(); // works across shadow DOM
      if (boxRef.current && path.includes(boxRef.current)) {
        return;
      } else {
        setShowActionsBox(false);
        setExpandView(false);
        setShowFolders(false);
        setSelectedFolder(null);
        setSelectedHighlightId("");
        setButtonPos(null);
      }
    }

    document.addEventListener("mousedown", handleClick);
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, [setButtonPos, setShowActionsBox]);

  let x = 0;
  let y = 0;

  if (buttonPos) {
    ({ x, y } = getActionsBoxCoord(
      buttonPos.x,
      buttonPos.y,
      ACTIONS_BOX_WIDTH,
      ACTIONS_BOX_HEIGHT
    ));
  }

  return (
    <AnimatePresence>
      <div
        ref={boxRef}
        style={
          expandView
            ? {
                display: "block",
                position: "fixed",
                top: "50%",
                left: "50%",
                width: "60vw",
                maxHeight: "60vh",
                transform: "translate(-50%, -60%)",
                zIndex: 999999,
              }
            : {
                position: "fixed",
                top: `${y}px`,
                left: `${x}px`,
                width: `${ACTIONS_BOX_WIDTH}px`,
              }
        }
      >
        <motion.div
          id="amber-actions-box"
          key="trigger-icons"
          initial={{ opacity: 0, y: -12, scale: 0.75 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -8, scale: 0.95 }}
          transition={{ duration: 0.1, ease: "easeOut" }}
        >
          <ActionsBoxContent />
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default ActionsBox;
