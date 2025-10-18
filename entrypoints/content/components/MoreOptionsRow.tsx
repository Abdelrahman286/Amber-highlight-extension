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
    setShowFolders,
    selectedFolder,
    setSelectedFolder,
    setExpandView
  } = useAppContext();
  const handleOpenSidebar = async () => {
    try {
      await browser.runtime.sendMessage({ action: "openSidePanel" });
    } catch (error) {
      console.error("Error opening sidebar:", error);
    }
  };

  const handleCopy = async () => {
    // try {
    //   const response = await browser.runtime.sendMessage({
    //     action: "addDummyWebsite",
    //   });
    //   console.log(response);
    // } catch (error) {
    //   console.error("Error opening sidebar:", error);
    // }
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
      setExpandView(false);
      setShowFolders(false);
      setSelectedFolder(null);
      setSelectedHighlightId("");
      await browser.runtime.sendMessage({
        action: "invalidateSidepanelHighlights",
      });
    }
  };

  // get in which folder this highlight is saved
  useEffect(() => {
    if (selectHighlightId) {
      const getFolder = async () => {
        try {
          const res = await browser.runtime.sendMessage({
            action: "getFolderByHighlightId",
            data: {
              id: selectHighlightId,
            },
          });
          if (res.success && res?.data) {
            setSelectedFolder(res.data);
          }
        } catch (err) {
          console.error("Failed to get the folder of this highlight:", err);
        }
      };

      getFolder();
    }
  }, [selectHighlightId]);

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
        {selectHighlightId && (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <Button
              onClick={() => {
                setShowFolders((curr) => !curr);
              }}
              variant="icon"
              size="sm"
              icon={<Folder className="size-18" />}
            ></Button>
            <div
              style={{
                fontSize: "12px",
                width: "140px",
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
                color: "var(--zinc-300)",
              }}
            >
              {selectedFolder?.name || ""}
            </div>
          </div>
        )}
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

        {selectHighlightId ? (
          <Button
            onClick={handleDeleteHighlight}
            variant="icon"
            size="sm"
            icon={<Trash2 className="size-18 text-red-400" />}
          ></Button>
        ) : null}
      </div>
    </div>
  );
};

export default MoreOptionsRow;
