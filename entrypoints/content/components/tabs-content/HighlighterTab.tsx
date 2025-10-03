import { browser } from "wxt/browser";
import { HIGHLIGHT_CLASS } from "../../CONTANTS";
import React, { useState, useEffect } from "react";
import { Plus } from "lucide-react";
import { useAppContext } from "../../context/AppContext";

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
  const { selectionRef, selectHighlightId, setShowActionsBox } =
    useAppContext();
  const [recentColors, setRecentColors] = useState<string[]>([]);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [tempColor, setTempColor] = useState<string | null>(null);

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

  // placing the selected color
  useEffect(() => {
    const applyColor = async () => {
      // 1 - place the selected color on the highlight record
      if (selectHighlightId && selectedColor) {
        const highlights = document.querySelectorAll<HTMLElement>(
          `[data-amberhighlightid="${selectHighlightId}"]`
        );

        highlights.forEach((el) => {
          el.style.background = selectedColor as string;
        });

        try {
          const res = await browser.runtime.sendMessage({
            action: "updateHighlight",
            data: {
              id: selectHighlightId,
              updates: {
                color: selectedColor,
              },
            },
          });
        } catch (err) {
          console.error("Failed to update highlight:", err);
        }
      }
    };

    applyColor();
  }, [selectedColor]);

  return (
    <div className="color-picker-container">
      {/* Fixed colors */}
      {fixedColors.map((color, index) => (
        <button
          key={`fixed-${index}`}
          className={`color-button ${
            selectedColor === color ? "selected" : ""
          }`}
          style={{ backgroundColor: color }}
          onClick={() => setSelectedColor(color)}
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
          onClick={() => setSelectedColor(color)}
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
  );
};

export default ColorPickerButtons;
