import { browser } from "wxt/browser";

import { Settings } from "lucide-react";
import IndexedDBPlayground from "./IndexedDBPlayground";
import Tooltip from "../content/components/CustomToolTip/Tooltip";

import { useState } from "react";
import Button from "../content/components/Button/Button";
import { ChevronDown, ChevronRight } from "lucide-react";

import { db } from "../src/db";
import ActionsBox from "../content/components/ActionsBox/ActionsBoxContent";
const App = () => {
  const [isEnabled, setIsEnabled] = useState(false);

  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="p-3">
      <div
        style={{
          margin: "100px",
        }}
      >
        <div className="font-accordion">
          {/* Header */}
          <div
            className="accordion-header"
            onClick={() => setIsOpen((prev) => !prev)}
          >
            <span className="accordion-title">Font Settings</span>
            <span className={`accordion-arrow ${isOpen ? "open" : ""}`}>
              {isOpen ? <ChevronDown size={18} /> : <ChevronRight size={18} />}
            </span>
          </div>

          {/* Content — rendered only when open */}
          {isOpen && (
            <div className="accordion-content">
              <p>aa</p>
              <p>aa</p>
            </div>
          )}
        </div>
      </div>
      <hr></hr>
      <h1 className="underline flex flex-row gap-2">
        <Settings></Settings> Settings Page
      </h1>
      <IndexedDBPlayground></IndexedDBPlayground>
    </div>
  );
};

export default App;
