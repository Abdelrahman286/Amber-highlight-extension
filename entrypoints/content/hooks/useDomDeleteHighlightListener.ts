import { useEffect } from "react";

export function useDeleteHighlightListener() {
  useEffect(() => {
    const handleMessage = (message: any) => {
      if (message.action === "deleteHighlightFromDocumentToContentScript") {
        const id = message?.data;
        if (!id) return;

        // Find all elements with dataset.amberhighlightid === id
        const elements = document.querySelectorAll<HTMLElement>(
          `[data-amberhighlightid="${id}"]`
        );

        elements.forEach((el) => {
          el.style.backgroundColor = "inherit";
          el.style.color = "inherit";
          el.classList.remove("highlighter--hovered", "HIGHLIGHT_CLASS");
          el.dataset.amberhighlightid = "";
        });
      }
    };

    browser.runtime.onMessage.addListener(handleMessage);

    return () => {
      browser.runtime.onMessage.removeListener(handleMessage);
    };
  }, []);
}
