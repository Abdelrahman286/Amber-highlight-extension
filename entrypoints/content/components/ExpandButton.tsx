import Tooltip from "./CustomToolTip/Tooltip";
import { Minimize2, Maximize2 } from "lucide-react";
import Button from "./Button/Button";
import { useAppContext } from "../context/AppContext";

const ExpandButton = () => {
  const { setExpandView, expandView } = useAppContext();
  const handleToggleExpand = async () => {
    if (expandView) {
      setExpandView(false);
    } else {
      setExpandView(true);
    }
  };

  const Icon = expandView ? Minimize2 : Maximize2;
  const tooltipText = expandView ? "Minimize view" : "Maximize view";
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
