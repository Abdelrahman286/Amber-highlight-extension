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
import FontTab from "../tabs-content/FontTab";
import SummerizeTab from "../tabs-content/SummerizeTab";
import TranslateTab from "../tabs-content/TranslateTab";
import NotesTab from "../tabs-content/NotesTab";
import MoreOptionsRow from "../MoreOptionsRow";

const Test = () => {
  const tabs: TabItem[] = [
    {
      label: <Highlighter className="size-16"></Highlighter>,
      content: <HighlighterTab></HighlighterTab>,
    },
    {
      label: <Type className="size-16" />,
      content: <FontTab></FontTab>,
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

  return (
    <div className="actions-box-container ">
      <Button
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
