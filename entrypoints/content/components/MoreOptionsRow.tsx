import Button from "./Button/Button";
import { PanelRightOpen, Copy, Trash2, Folder } from "lucide-react";
import { browser } from "wxt/browser";
import { useAppContext } from "../context/AppContext";
import { removeHighlightById } from "../highlightFunction";
const MoreOptionsRow = () => {
  const {
    selectHighlightId,
    setButtonPos,
    setShowActionsBox,
    setSelectedHighlightId,
  } = useAppContext();
  const handleOpenSidebar = async () => {
    try {
      await browser.runtime.sendMessage({ action: "openSidePanel" });
    } catch (error) {
      console.error("Error opening sidebar:", error);
    }
  };

  const handleCopy = async () => {
    try {
      const response = await browser.runtime.sendMessage({
        action: "addDummyWebsite",
      });

      console.log(response);
    } catch (error) {
      console.error("Error opening sidebar:", error);
    }
  };

  const handleDeleteHighlight = async () => {
    if (!selectHighlightId) return;

    const res = await browser.runtime.sendMessage({
      action: "deleteSingleHighlight",
      data: selectHighlightId,
    });

    if (res.success) {
      removeHighlightById(selectHighlightId);
      setButtonPos(null);
      setShowActionsBox(false);
      setSelectedHighlightId("");
      await browser.runtime.sendMessage({
        action: "invalidateSidepanelHighlights",
      });
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0px 4px",
      }}
    >
      <div
        style={{
          color: "white",
        }}
      >
        <Button
          variant="icon"
          size="sm"
          icon={<Folder className="size-18" />}
        ></Button>
      </div>
      <div
        style={{
          display: "flex",
          gap: "8px",
          margin: "8px 0px",
        }}
      >
        <Button
          variant="icon"
          size="sm"
          icon={<PanelRightOpen className="size-18" />}
          onClick={() => handleOpenSidebar()}
        ></Button>
        <Button
          variant="icon"
          size="sm"
          icon={<Copy className="size-18" />}
          onClick={() => handleCopy()}
        ></Button>

        <Button
          onClick={handleDeleteHighlight}
          variant="icon"
          size="sm"
          icon={<Trash2 className="size-18 text-red-400" />}
        ></Button>
      </div>
    </div>
  );
};

export default MoreOptionsRow;
