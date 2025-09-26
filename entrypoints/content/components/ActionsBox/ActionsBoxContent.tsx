import { useState } from "react";
import { useAppContext } from "../../context/AppContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  X,
  Trash2,
  Bold,
  Italic,
  Underline,
  Languages,
  PanelRightOpen,
  Highlighter,
  Sparkles,
} from "lucide-react";

const highlightColors = ["#facc15", "#f87171", "#34d399", "#60a5fa"];
const fontColors = ["#ffffff", "#000000", "#f97316", "#a78bfa"];

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
const ActionsBoxContent = () => {
  const { setButtonPos, setShowActionsBox } = useAppContext();
  const [notes, setNotes] = useState("");

  function closeBox() {
    setShowActionsBox(false);
    setButtonPos(null);
    document.getSelection()?.removeAllRanges();
  }

  return (
    <div className="relative w-[220px] rounded-xl bg-black/80 border border-white/20 p-2 backdrop-blur-md shadow-2xl text-white space-y-2">
      {/* Close Button */}
      <button
        onClick={closeBox}
        className="absolute top-1 right-1 text-white/70 hover:text-white transition"
      >
        <X className="w-4 h-4" />
      </button>
      {/* Highlight Colors */}
      <div className="flex gap-1">
        {highlightColors.map((color) => (
          <button
            key={color}
            className="w-5 h-5 rounded-md border border-white/20"
            style={{ backgroundColor: color }}
            onClick={() => console.log("Highlight:", color)}
          />
        ))}
        <Button size="icon" variant="ghost" className="h-7 w-7">
          <Highlighter className="w-4 h-4" />
        </Button>
        <Button size="icon" variant="ghost" className="h-7 w-7">
          <Trash2 className="w-4 h-4" />
        </Button>
      </div>
      {/* Font Colors */}
      <div className="flex gap-1">
        {fontColors.map((color) => (
          <button
            key={color}
            className="w-5 h-5 rounded-md border border-white/20"
            style={{ backgroundColor: color }}
            onClick={() => console.log("Font Color:", color)}
          />
        ))}
        <Button size="icon" variant="ghost" className="h-7 w-7">
          <Bold className="w-4 h-4" />
        </Button>
        <Button size="icon" variant="ghost" className="h-7 w-7">
          <Italic className="w-4 h-4" />
        </Button>
        <Button size="icon" variant="ghost" className="h-7 w-7">
          <Underline className="w-4 h-4" />
        </Button>
      </div>
      {/* Actions */}
      <div className="flex gap-1">
        <Button size="icon" variant="ghost" className="h-7 w-7">
          <Languages className="w-4 h-4" />
        </Button>
        <Button size="icon" variant="ghost" className="h-7 w-7">
          <Sparkles className="w-4 h-4" />
        </Button>
        <Button size="icon" variant="ghost" className="h-7 w-7">
          <PanelRightOpen className="w-4 h-4" />
        </Button>
      </div>
      {/* Notes Input */}
      <Input
        placeholder="Add notes..."
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
        className="bg-white/10 border-white/20 text-white placeholder:text-white/50 rounded-md h-7 text-xs px-2"
      />
    </div>
  );
};

export default ActionsBoxContent;
