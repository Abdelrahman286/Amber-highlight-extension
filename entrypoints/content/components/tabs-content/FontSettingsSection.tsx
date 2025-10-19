import { useState, useEffect } from "react";
import Button from "../Button/Button";
import { Bold, Italic, Underline, Strikethrough } from "lucide-react";
import { useAppContext } from "../../context/AppContext";
import { FontSettings } from "../../type";

import { applyFontSettings } from "../../DomUtils";

const fontButtons = [
  { id: "bold", icon: Bold, label: "Bold" },
  { id: "italic", icon: Italic, label: "Italic" },
  { id: "underline", icon: Underline, label: "Underline" },
  { id: "strike", icon: Strikethrough, label: "Strikethrough" },
];

const sizeButtons = [
  { id: "sm", label: "Sm" },
  { id: "md", label: "Md" },
  { id: "lg", label: "Lg" },
];

const FontSettingsSection = () => {
  const { selectHighlightId } = useAppContext();
  const [fontSettings, setFontSettings] = useState<FontSettings>({
    color: "",
    bold: false,
    italic: false,
    underline: false,
    lineThrough: false,
    textSize: "",
  });

  // Fetch font settings on load
  useEffect(() => {
    if (!selectHighlightId) return;

    const fetchHighlight = async () => {
      try {
        const res = await browser.runtime.sendMessage({
          action: "getSingleHighlight",
          data: selectHighlightId,
        });

        if (res?.data?.fontSettings) {
          const settings: FontSettings = res.data.fontSettings;
          setFontSettings(settings);
          const highlights = document.querySelectorAll<HTMLElement>(
            `[data-amberhighlightid="${selectHighlightId}"]`
          );
          applyFontSettings(highlights, settings);
        }
      } catch (err) {
        console.error("Failed to get highlight:", err);
      }
    };

    fetchHighlight();
  }, [selectHighlightId]);

  // Save updated font settings
  const saveFontSettings = async (updated: FontSettings) => {
    if (!selectHighlightId) return;

    try {
      await browser.runtime.sendMessage({
        action: "updateHighlight",
        data: {
          id: selectHighlightId,
          updates: { fontSettings: updated },
        },
      });
    } catch (err) {
      console.error("Failed to update highlight:", err);
    }
  };

  // Update style toggles
  const toggleStyle = (key: keyof FontSettings) => {
    const updated = {
      ...fontSettings,
      [key]: !fontSettings[key],
    };
    setFontSettings(updated);
    applyFontSettings(
      document.querySelectorAll<HTMLElement>(
        `[data-amberhighlightid="${selectHighlightId}"]`
      ),
      updated
    );

    saveFontSettings(updated);
  };

  // Update text size
  const toggleSize = (size: "sm" | "md" | "lg") => {
    const updated = {
      ...fontSettings,
      textSize: fontSettings.textSize === size ? undefined : size,
    };
    setFontSettings(updated);
    applyFontSettings(
      document.querySelectorAll<HTMLElement>(
        `[data-amberhighlightid="${selectHighlightId}"]`
      ),
      updated
    );

    saveFontSettings(updated);
  };

  const getFontKey = (id: string): keyof FontSettings => {
    switch (id) {
      case "bold":
        return "bold";
      case "italic":
        return "italic";
      case "underline":
        return "underline";
      case "strike":
        return "lineThrough";
      default:
        throw new Error("Invalid font button id");
    }
  };

  return (
    <div className="font-tab">
      {/* Font Style Buttons */}
      <div className="font-style-group">
        {fontButtons.map(({ id, icon: Icon, label }) => (
          <Button
            key={id}
            size="sm"
            variant="ghost"
            onClick={() =>
              toggleStyle(
                id === "strike"
                  ? "lineThrough"
                  : (id as "bold" | "italic" | "underline")
              )
            }
            className={`trigger-button-no-hover ${
              fontSettings[getFontKey(id)] ? "selected-font-setting" : ""
            }`}
            title={label}
          >
            <Icon className="icon" />
          </Button>
        ))}
      </div>

      <div className="divider" />

      {/* Font Size Buttons */}
      <div className="font-size-group">
        {sizeButtons.map(({ id, label }) => (
          <Button
            key={id}
            size="sm"
            variant="ghost"
            onClick={() => toggleSize(id as "sm" | "md" | "lg")}
            className={`trigger-button-no-hover ${
              fontSettings.textSize === id ? "selected-font-setting" : ""
            }`}
          >
            <span className="font-size-label">{label}</span>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default FontSettingsSection;
