import { browser } from "wxt/browser";

import { Settings } from "lucide-react";
import IndexedDBPlayground from "./IndexedDBPlayground";
import Tooltip from "../content/components/CustomToolTip/Tooltip";

import { useState } from "react";
import Button from "../content/components/Button/Button";
import { ChevronDown, ChevronRight } from "lucide-react";

import { db } from "../src/db";
import ActionsBox from "../content/components/ActionsBox/ActionsBoxContent";
import FoldersCrud from "../src/FoldersManager/FoldersManager";
import ContentScriptFoldersViewer from "../src/FoldersManager/ContentScriptFoldersViewer";
const App = () => {
  return (
    <div className="p-3 bg-slate-400 h-[200vh]">
      {/* <FoldersCrud></FoldersCrud> */}

      <h1>Folders View in content script</h1>
      <ContentScriptFoldersViewer></ContentScriptFoldersViewer>
      {/* <IndexedDBPlayground></IndexedDBPlayground> */}
    </div>
  );
};

export default App;
