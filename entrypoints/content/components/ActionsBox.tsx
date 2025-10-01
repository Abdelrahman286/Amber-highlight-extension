import { useEffect, useRef } from "react";
import { useAppContext } from "../context/AppContext";
import { motion, AnimatePresence } from "framer-motion";
import ActionsBoxContent from "./ActionsBox/ActionsBoxContent";
import { ACTIONS_BOX_WIDTH, ACTIONS_BOX_HEIGHT } from "../CONTANTS";
import { getActionsBoxCoord } from "../PositioningUtils";
const ActionsBox = () => {
  const { buttonPos, setButtonPos, setShowActionsBox } = useAppContext();
  const boxRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function handleClick(event: MouseEvent) {
      const path = event.composedPath(); // works across shadow DOM
      if (boxRef.current && path.includes(boxRef.current)) {
        return;
      } else {
        setShowActionsBox(false);
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
      {buttonPos && (
        <motion.div
          ref={boxRef}
          key="trigger-icons"
          //   initial={{ opacity: 0, y: -12, scale: 0.75 }}
          //   animate={{ opacity: 1, y: 0, scale: 1 }}
          //   exit={{ opacity: 0, y: -8, scale: 0.95 }}
          //   transition={{ duration: 0.1, ease: "easeOut" }}
          style={{
            top: `${y}px`,
            left: `${x}px`,
            position: "fixed",
            width: `${ACTIONS_BOX_WIDTH}px`,
            // transform: "translateX(-50%)",
            // height: `${ACTIONS_BOX_HEIGHT}px`,
          }}
        >
          <ActionsBoxContent></ActionsBoxContent>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ActionsBox;
