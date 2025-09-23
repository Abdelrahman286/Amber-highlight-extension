import { STORAGE_KEY } from "./CONTANTS";
import { StoredHighlight } from "./type";
import { getNodeFromPath, findNodeByContext } from "./DomUtils";
import { recursiveWrapper } from "./highlightFunction";

//  Restoring Highlights on page reopen
export function restoreHighlights() {
  const highlights = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
  console.log("Restoring highlights:", highlights);

  highlights.forEach((h: StoredHighlight) => {
    if (!h?.anchorPath || !h?.focusPath) return;
    let anchorNode = getNodeFromPath(h?.anchorPath);
    let focusNode = getNodeFromPath(h?.focusPath);
    let anchorOffset = h.anchorOffset;
    let focusOffset = h.focusOffset;

    // If path lookup fails → fallback to text context
    if (!anchorNode || !focusNode) {
      const anchorContext = findNodeByContext(h.anchorContext);
      const focusContext = findNodeByContext(h.focusContext);
      if (anchorContext && focusContext) {
        anchorNode = anchorContext.node as any;
        anchorOffset = anchorContext.offset;
        focusNode = focusContext?.node as any;
        focusOffset = focusContext.offset + h.selectionString.length;
      }
    }

    if (!anchorNode || !focusNode) return;

    try {
      recursiveWrapper(document.body, {
        color: h.color,
        textColor: h.textColor,
        highlightIndex: h.highlightIndex,
        selectionString: h.selectionString,
        anchor: anchorNode,
        anchorOffset,
        focus: focusNode,
        focusOffset,
      });
    } catch (e) {
      console.error("Failed to restore highlight", e);
    }
  });
}
