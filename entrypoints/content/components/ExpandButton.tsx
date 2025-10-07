import { Dispatch, SetStateAction, useState, useEffect } from "react";
import Tooltip from "./CustomToolTip/Tooltip";
import { Minimize2, Maximize2 } from "lucide-react";
import Button from "./Button/Button";
import { expandActionsBox, minimizeActionsBox } from "../DomUtils";

const ExpandButton = ({
  isExpanded,
  setIsExpanded,
}: {
  isExpanded: boolean;
  setIsExpanded: Dispatch<SetStateAction<boolean>>;
}) => {
  const handleToggleExpand = async () => {
    if (isExpanded) {
      setIsExpanded(false);
      await minimizeActionsBox();
    } else {
      await expandActionsBox();
      setIsExpanded(true);
    }
  };

  const Icon = isExpanded ? Minimize2 : Maximize2;
  const tooltipText = isExpanded ? "Minimize view" : "Maximize view";
  return (
    <>
      <Tooltip text={tooltipText} position="bottom">
        <Button
          onClick={handleToggleExpand}
          size="sm"
          variant="ghost"
          className="trigger-button-no-hover"
        >
          <Icon className="icon" />
        </Button>
      </Tooltip>
    </>
  );
};

export default ExpandButton;
