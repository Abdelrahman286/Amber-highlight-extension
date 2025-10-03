import { browser } from "wxt/browser";
import { StoredHighlight } from "./type";
import { getNodeFromPath, findNodeByContext } from "./DomUtils";
import { recursiveWrapper } from "./highlightFunction";
//  Restoring Highlights on page reopen
export async function restoreHighlights() {
  const lostIds: string[] = [];

  try {
    const res = await browser.runtime.sendMessage({
      action: "getWebsiteHighlights",
      data: window.location.href,
    });

    if (res.success && Array.isArray(res.data) && res.data.length > 0) {
      res.data.forEach((h: StoredHighlight) => {
        try {
          if (!h?.anchorPath || !h?.focusPath) throw new Error("Missing path");

          let anchorNode = getNodeFromPath(h.anchorPath);
          let focusNode = getNodeFromPath(h.focusPath);
          let anchorOffset = h.anchorOffset;
          let focusOffset = h.focusOffset;

          // Fallback to context if paths fail
          if (!anchorNode || !focusNode) {
            const anchorContext = findNodeByContext(h.anchorContext);
            const focusContext = findNodeByContext(h.focusContext);
            if (anchorContext && focusContext) {
              anchorNode = anchorContext.node as any;
              anchorOffset = anchorContext.offset;
              focusNode = focusContext.node as any;
              focusOffset = focusContext.offset + h.selectionString.length;
            }
          }

          if (!anchorNode || !focusNode)
            throw new Error("Node resolution failed");

          recursiveWrapper(document.body, {
            id: h.id,
            color: h.color,
            textColor: h.textColor,
            createdAt: h.createdAt,
            selectionString: h.selectionString,
            anchor: anchorNode,
            anchorOffset,
            focus: focusNode,
            focusOffset,
          });
        } catch (err) {
          //   console.log("Lost highlight:", h.id);
          if (h?.id) lostIds.push(h.id); // collect lost IDs
        }
      });

      // 🔔 Send lost IDs back if any
      if (lostIds?.length > 0) {
        await browser.runtime.sendMessage({
          action: "lostHighlights",
          data: lostIds,
        });
      }
    }
  } catch (e) {
    console.log("Failed to restore highlights:", e);
  }
}
