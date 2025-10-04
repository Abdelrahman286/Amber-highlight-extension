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

const Test = () => {
  const {
    setButtonPos,
    selectionRef,
    setShowActionsBox,
    setSelectedHighlightId,
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
    {
      label: <StickyNote className="size-16" />,
      content: <NotesTab></NotesTab>,
    },
  ];

  const handleCloseActionsBox = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setButtonPos(null);
    setShowActionsBox(false);
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
      <Tabs tabs={tabs} defaultActive={0} />
      <MoreOptionsRow></MoreOptionsRow>
    </div>
  );
};

export default Test;
