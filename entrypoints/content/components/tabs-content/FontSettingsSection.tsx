import { useState } from "react";
import Button from "../Button/Button";
import { Bold, Italic, Underline, Strikethrough } from "lucide-react";
import { useAppContext } from "../../context/AppContext";

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
  const [activeButtons, setActiveButtons] = useState<string[]>([]);
  const [selectedSize, setSelectedSize] = useState<string>("md");

  const toggleButton = (id: string) => {
    setActiveButtons((prev) =>
      prev.includes(id) ? prev.filter((b) => b !== id) : [...prev, id]
    );
  };

  useEffect(() => {
    if (!selectHighlightId) return;

    const fetchHighlight = async () => {
      try {
        const res = await browser.runtime.sendMessage({
          action: "getSingleHighlight",
          data: selectHighlightId,
        });

        if (res?.data) {
          // place font settings here
          console.log(res.data);
        }
      } catch (err) {
        console.error("Failed to get highlight:", err);
      }
    };

    fetchHighlight();
  }, []);

  return (
    <div className="font-tab">
      <div className="font-style-group">
        {fontButtons.map(({ id, icon: Icon, label }) => (
          <Button
            key={id}
            size="sm"
            variant="ghost"
            onClick={() => toggleButton(id)}
            className={`trigger-button-no-hover ${
              activeButtons.includes(id) ? "selected-font-setting" : ""
            }`}
            title={label}
          >
            <Icon className="icon" />
          </Button>
        ))}
      </div>

      <div className="divider" />

      <div className="font-size-group">
        {sizeButtons.map(({ id, label }) => (
          <Button
            key={id}
            size="sm"
            variant="ghost"
            onClick={() => setSelectedSize(id)}
            className={`trigger-button-no-hover ${
              selectedSize === id ? "selected-font-setting" : ""
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
