import React, { useState, useEffect } from "react";
import { Loader2, Check } from "lucide-react";
import { useAppContext } from "../../context/AppContext";

const NotesTab: React.FC = () => {
  const { selectHighlightId } = useAppContext();
  const [notes, setNotes] = useState("");
  const [isSaving, setIsSaving] = useState(false);
  const [saved, setSaved] = useState(false);

  // Fetch saved notes
  useEffect(() => {
    if (!selectHighlightId) return;

    const fetchHighlight = async () => {
      try {
        const res = await browser.runtime.sendMessage({
          action: "getSingleHighlight",
          data: selectHighlightId,
        });

        setNotes(res?.data?.notes || "");
      } catch (err) {
        console.error("Failed to get highlight:", err);
      }
    };

    fetchHighlight();
  }, [selectHighlightId]);

  // Handle textarea typing
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNotes(e.target.value);
  };

  // Auto-save with debounce
  useEffect(() => {
    if (!selectHighlightId) return;
    if (saved) setSaved(false);

    const timeout = setTimeout(async () => {
      setIsSaving(true);
      try {
        await browser.runtime.sendMessage({
          action: "updateHighlight",
          data: {
            id: selectHighlightId,
            updates: { notes },
          },
        });
        setSaved(true);
      } catch (err) {
        console.error("Failed to update notes:", err);
      } finally {
        setIsSaving(false);
      }
    }, 600);

    return () => clearTimeout(timeout);
  }, [notes, selectHighlightId]);

  return (
    <div className="notes-container relative">
      <div className="indicator-container">
        {isSaving ? (
          <Loader2 className="saving-icon spin" size={16} />
        ) : saved ? (
          <Check className="saving-icon fade-in" size={16} />
        ) : null}
      </div>
      <textarea
        autoCorrect="false"
        className="notes-textarea thin-scrollbar"
        placeholder="Start typing your notes..."
        value={notes}
        onChange={handleChange}
      />
    </div>
  );
};

export default NotesTab;
