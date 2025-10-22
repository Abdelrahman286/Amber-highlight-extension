import React, { useEffect, useState } from "react";
import { Info } from "lucide-react";
import { Button } from "@/components/ui/button";

const LOCAL_STORAGE_KEY = "hideFlashcardsAlert";

const FlashcardsInfoAlert = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hideAlert = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (!hideAlert) setVisible(true);
  }, []);

  const handleClose = () => setVisible(false);

  const handleDontShowAgain = () => {
    localStorage.setItem(LOCAL_STORAGE_KEY, "true");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="relative flex flex-col sm:flex-row sm:items-start gap-3 rounded-xl border border-blue-200 bg-blue-50 p-4 text-blue-900 shadow-sm">
      <div className="flex items-start gap-3 flex-1">
        <Info className="w-5 h-5 mt-0.5 text-blue-500 flex-shrink-0" />
        <div className="text-sm leading-relaxed">
          <strong>Flashcards</strong> help you turn your highlights into study
          cards. Select folders or websites to generate cards instantly.
        </div>
      </div>

      <div className="flex gap-2 justify-end sm:justify-start mt-2 sm:mt-0">
        <Button
          variant="ghost"
          size="sm"
          onClick={handleClose}
          className="border-blue-200 text-blue-700 "
        >
          Cancel
        </Button>
        <Button
          variant="default"
          size="sm"
          onClick={handleDontShowAgain}
          className="bg-blue-600 hover:bg-blue-700 text-white"
        >
          Don’t show again
        </Button>
      </div>
    </div>
  );
};

export default FlashcardsInfoAlert;
