import { useEffect } from "react";
import { browser } from "wxt/browser";

/**
 * Custom hook that listens for "scrollToHighlight" messages
 * and flashes all highlight elements with the matching data ID.
 */
export function useScrollToHighlight() {
  useEffect(() => {
    const handleMessage = (message: any) => {
      try {
        // 🧩 Validate message structure
        if (!message || typeof message !== "object") return;
        if (message.action !== "scrollToHighlight" || !message.data) return;

        // 🔍 Select all elements with the same highlight ID
        const elements = document.querySelectorAll(
          `[data-amberhighlightid="${message.data}"]`
        ) as NodeListOf<HTMLElement>;

        if (!elements || elements.length === 0) {
          console.warn(
            `[Amber] No highlight elements found for ID: ${message.data}`
          );
          return;
        }

        // 🟡 Scroll first element into view
        try {
          elements[0].scrollIntoView({ behavior: "smooth", block: "center" });
        } catch (err) {
          console.error("[Amber] Failed to scroll element into view:", err);
        }

        // ✨ Flash all elements with the same highlight ID
        elements.forEach((el) => {
          try {
            const originalBg = el.style.backgroundColor;
            const originalTransition = el.style.transition;

            el.style.transition = "background-color 0.25s ease-in-out";

            let flashCount = 0;
            const maxFlashes = 4;
            const flashColor = "transparent";

            const flash = () => {
              if (flashCount >= maxFlashes * 2) {
                el.style.backgroundColor = originalBg;
                el.style.transition = originalTransition;
                return;
              }

              el.style.backgroundColor =
                el.style.backgroundColor === flashColor
                  ? originalBg || ""
                  : flashColor;

              flashCount++;
              setTimeout(flash, 250);
            };

            flash();
          } catch (err) {
            console.error("[Amber] Flashing effect failed:", err);
          }
        });
      } catch (err) {
        console.error("[Amber] Unexpected error in handleMessage:", err);
      }
    };

    // ✅ Attach listener
    try {
      browser.runtime.onMessage.addListener(handleMessage);
    } catch (err) {
      console.error("[Amber] Failed to attach message listener:", err);
    }

    // ✅ Cleanup on unmount
    return () => {
      try {
        browser.runtime.onMessage.removeListener(handleMessage);
      } catch (err) {
        console.error("[Amber] Failed to remove message listener:", err);
      }
    };
  }, []);
}
