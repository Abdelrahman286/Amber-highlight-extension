import Tabs, { TabItem } from "../tabsComponent/Tabs";
import {
  Languages,
  Highlighter,
  Sparkles,
  StickyNote,
  Type,
  X,
} from "lucide-react";

import Button from "../Button/Button";

import HighlighterTab from "../tabs-content/HighlighterTab";
import SummerizeTab from "../tabs-content/SummerizeTab";
import TranslateTab from "../tabs-content/TranslateTab";
import NotesTab from "../tabs-content/NotesTab";
import MoreOptionsRow from "../MoreOptionsRow";
import { useAppContext } from "../../context/AppContext";
import FolderExplorer from "../FoldersExplorer/FolderExplorer";

const Test = () => {
  const {
    setButtonPos,
    selectionRef,
    setShowActionsBox,
    setSelectedHighlightId,
    selectHighlightId,
    showFolders,
    setExpandView,
    activeIndex,
    setActiveIndex,
  } = useAppContext();
  const tabs: TabItem[] = [
    {
      label: <Highlighter className="size-16"></Highlighter>,
      content: <HighlighterTab></HighlighterTab>,
    },
    {
      label: <Sparkles className="size-16" />,
      content: <SummerizeTab></SummerizeTab>,
    },
    {
      label: <Languages className="size-16" />,
      content: <TranslateTab></TranslateTab>,
    },
    // Only include NotesTab if a highlight is selected
    ...(selectHighlightId
      ? [
          {
            label: <StickyNote className="size-16" />,
            content: <NotesTab />,
          },
        ]
      : []),
  ];

  const handleCloseActionsBox = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setButtonPos(null);
    setShowActionsBox(false);
    setExpandView(false);
    selectionRef.current = null;
    setSelectedHighlightId("");
  };

  return (
    <div className="actions-box-container ">
      <Button
        onClick={handleCloseActionsBox}
        title="close"
        variant="icon"
        size="sm"
        icon={<X className="size-16" />}
        className="close-actions-btn"
      ></Button>
      <Tabs tabs={tabs} />
      <MoreOptionsRow></MoreOptionsRow>

      {showFolders && <FolderExplorer></FolderExplorer>}
    </div>
  );
};

export default Test;
