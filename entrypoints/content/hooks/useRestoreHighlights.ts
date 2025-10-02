import { useEffect } from "react";

import { restoreHighlights } from "../RestoreHighlights";

export function useRestoreHighlights() {
  useEffect(() => {
    function handleDOMContentLoaded() {
      restoreHighlights();
    }

    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", handleDOMContentLoaded);
    } else {
      restoreHighlights();
    }

    return () => {
      document.removeEventListener("DOMContentLoaded", handleDOMContentLoaded);
    };
  }, [restoreHighlights]);
}
