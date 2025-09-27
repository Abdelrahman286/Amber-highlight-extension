import React, { useState, ReactNode } from "react";
import "./tabs.css";

export type TabItem = {
  label: ReactNode; // can be string, element, icon, etc.
  content: ReactNode;
};

type TabsProps = {
  tabs: TabItem[];
  defaultActive?: number;
  className?: string;
};

const Tabs: React.FC<TabsProps> = ({ tabs, defaultActive = 0, className }) => {
  const [activeIndex, setActiveIndex] = useState(defaultActive);

  return (
    <div className={`tabs-container ${className || ""}`}>
      {/* Tab headers */}
      <div className="tabs-list">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`tab-trigger ${activeIndex === index ? "active" : ""}`}
            onClick={() => setActiveIndex(index)}
          >
            {tab.label}
            <span className="right-popout-corner"></span>
          </button>
        ))}
      </div>

      {/* Tab content */}
      <div className="tabs-content">
        {tabs[activeIndex] && tabs[activeIndex].content}
      </div>
    </div>
  );
};

export default Tabs;
