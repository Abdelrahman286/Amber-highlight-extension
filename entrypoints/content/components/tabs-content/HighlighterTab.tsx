import { browser } from "wxt/browser";
import { useState, useEffect } from "react";
import { Plus, Type } from "lucide-react";
import { useAppContext } from "../../context/AppContext";
import { placeHighlight } from "../../highlightFunction";
import { ChevronDown, ChevronRight } from "lucide-react";
import FontSettingsSection from "./FontSettingsSection";

const fixedColors = [
  "#F7DC6F", // Yellow
  "#FF6B6B", // Red
  "#4ECDC4", // Turquoise
  "#FFA07A", // Orange
  "#98D8C8", // Mint Green
  "#BB8FCE", // Purple
  "#F8B88B", // Peach
];
const RECENT_COLORS_KEY = "recentColors";
const ColorPickerButtons = () => {
  const {
    selectionRef,
    selectHighlightId,
    setShowActionsBox,
    setButtonPos,
    setShowFolders,
    setSelectedFolder,
  } = useAppContext();
  const [recentColors, setRecentColors] = useState<string[]>([]);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [tempColor, setTempColor] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  // Load stored colors
  useEffect(() => {
    // if you have selectHighlightId then it's already highligted
    try {
      browser.storage.local.get([RECENT_COLORS_KEY], (result) => {
        if (result[RECENT_COLORS_KEY]) {
          setRecentColors(result[RECENT_COLORS_KEY]);
        }
      });
    } catch (e) {
      console.log(e);
    }
  }, []);

  // Save whenever recentColors change
  useEffect(() => {
    try {
      browser.storage.local.set({ [RECENT_COLORS_KEY]: recentColors });
    } catch (e) {
      console.log(e);
    }
  }, [recentColors]);

  // Commit color once picker closes or user releases mouse
  const handleCommitColor = (color: string) => {
    const LIMIT = 7;
    let oldColors = [...recentColors];

    // Add newColor at the end
    oldColors.push(color);

    if (oldColors.length > LIMIT) {
      oldColors = oldColors.slice(-LIMIT);
    }

    setRecentColors(oldColors);

    setSelectedColor(color);
    setTempColor(null);
  };

  // select the intial color
  useEffect(() => {
    if (!selectHighlightId) return;

    const fetchHighlight = async () => {
      try {
        const res = await browser.runtime.sendMessage({
          action: "getSingleHighlight",
          data: selectHighlightId,
        });

        if (res?.data?.color) {
          setSelectedColor(res.data.color);
        }
      } catch (err) {
        console.error("Failed to get highlight:", err);
      }
    };

    fetchHighlight();
  }, []);

  function getValidSelection(): Selection | null {
    const selection = window.getSelection();
    if (
      selection &&
      selection.toString().trim().length > 0 &&
      !selection.isCollapsed &&
      selection.rangeCount > 0
    ) {
      return selection;
    }
    return null;
  }

  async function updateExistingHighlight(id: string, color: string) {
    try {
      // Update highlight color in the DOM
      const highlights = document.querySelectorAll<HTMLElement>(
        `[data-amberhighlightid="${id}"]`
      );
      highlights.forEach((el) => (el.style.background = color));

      // Update in storage (via background script)
      await browser.runtime.sendMessage({
        action: "updateHighlight",
        data: {
          id,
          updates: { color },
        },
      });
    } catch (err) {
      console.error("Failed to update highlight:", err);
    }
  }

  const handleClick = async (color: string) => {
    setSelectedColor(color);

    // --- 1. Update existing highlight ---
    if (selectHighlightId) {
      updateExistingHighlight(selectHighlightId, color);
      return;
    }

    // --- 2. Create new highlight if valid selection ---
    const selection = getValidSelection();
    if (!selection) return;

    const success = placeHighlight(selection, color);

    if (success) {
      setButtonPos(null);
      setShowActionsBox(false);
      setShowFolders(false);
      setSelectedFolder(null);
    } else {
      console.error("Failed to create highlight");
    }
  };

  return (
    <div>
      <div className="color-picker-container">
        {/* Fixed colors */}
        {fixedColors.map((color, index) => (
          <button
            key={`fixed-${index}`}
            className={`color-button ${
              selectedColor === color ? "selected" : ""
            }`}
            style={{ backgroundColor: color }}
            onClick={() => {
              handleClick(color);
            }}
          />
        ))}
        {/* Recent colors */}
        {recentColors.map((color, index) => (
          <button
            key={`recent-${index}`}
            className={`color-button ${
              selectedColor === color ? "selected" : ""
            }`}
            style={{ backgroundColor: color }}
            onClick={() => {
              handleClick(color);
            }}
          />
        ))}
        {/* Plus icon with live preview */}
        <label
          className={`color-picker-label ${tempColor ? "previewing" : ""}`}
          style={{ background: tempColor ?? "" }}
        >
          {!tempColor && <Plus size={18} color="#555" />}
          <input
            type="color"
            value={tempColor ?? "#000000"}
            // Live preview (just for the plus button)
            onInput={(e) => setTempColor((e.target as HTMLInputElement).value)}
            // Commit only after user closes/releases
            onBlur={(e) => handleCommitColor(e.target.value)}
          />
        </label>
      </div>
      {/* Font Settings Section */}

      {selectHighlightId && (
        <div className="font-accordion">
          {/* Header */}
          <div
            className="accordion-header"
            onClick={() => setIsOpen((prev) => !prev)}
          >
            <div className="accordion-left">
              <Type className="accordion-icon" />
              <span className="accordion-title">Font Settings</span>
            </div>
            <span className={`accordion-arrow ${isOpen ? "open" : ""}`}>
              {isOpen ? <ChevronDown size={18} /> : <ChevronRight size={18} />}
            </span>
          </div>
          {/* Content — rendered only when open */}
          {isOpen && (
            <div className="accordion-content">
              <FontSettingsSection></FontSettingsSection>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ColorPickerButtons;
