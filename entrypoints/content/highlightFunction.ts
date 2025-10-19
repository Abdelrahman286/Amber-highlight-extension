import { HIGHLIGHT_CLASS, DELETED_CLASS } from "./CONTANTS";
import {
  HighlightArgs,
  RecursiveWrapperArgs,
  StoredHighlight,
  FontSettings,
} from "./type";
import { getNodePath, getContextText, applyFontSettings } from "./DomUtils";
import { browser } from "wxt/browser";
// ===== HIGHLIGHTING =====
export function highlight({
  id,
  urlId,
  container,
  selection,
  color,
  fontSettings,
  notes,
  createdAt,
}: HighlightArgs) {
  const selString = selection.toString() as string;
  const rangeLength = selString.length;

  const highlightInfo = {
    id: id,
    urlId: urlId,
    folderId: "",
    color: color || "#F7DC6F", // Yellow
    fontSettings: fontSettings,
    notes: notes,
    createdAt,
    selectionString: selString,

    anchorOffset: selection.anchorOffset,
    focusOffset: selection.focusOffset,
    anchorPath: getNodePath(selection.anchorNode),
    focusPath: getNodePath(selection.focusNode),

    anchorContext: getContextText(
      selection.anchorNode,
      selection.anchorOffset,
      rangeLength
    ),
    focusContext: getContextText(
      selection.focusNode,
      selection.focusOffset - rangeLength,
      rangeLength
    ),
  };

  try {
    recursiveWrapper(container, {
      ...highlightInfo,
      anchor: selection.anchorNode,
      focus: selection.focusNode,
    });
  } catch (e) {
    console.error(e);
    return false;
  }

  if (selection.removeAllRanges) selection.removeAllRanges();

  saveHighlight(highlightInfo);

  return true;
}

// ===== Place Highlight =====

export function placeHighlight(
  selection: Selection,
  highlightColor: string | null,
  fontSettings?: FontSettings
): boolean {
  const range: Range = selection.getRangeAt(0);

  const container: HTMLElement =
    range.commonAncestorContainer.nodeType === Node.ELEMENT_NODE
      ? (range.commonAncestorContainer as HTMLElement)
      : (range.commonAncestorContainer.parentElement as HTMLElement);

  const color: string = highlightColor || "#F7DC6F";
  const createdAt: number = Date.now();
  const id: string = crypto.randomUUID();
  const urlId: string = window.location.href;
  const notes = "";
  const folderId = "";

  const success: boolean = highlight({
    id,
    urlId,
    folderId,
    container,
    selection,
    color,
    fontSettings,
    notes,
    createdAt,
  });

  return success;
}
export function recursiveWrapper(
  container: HTMLElement | Document,
  highlightInfo: RecursiveWrapperArgs
) {
  return _recursiveWrapper(container, highlightInfo, false, 0);
}

// Recursive wrapper for html nodes
function _recursiveWrapper(
  container: HTMLElement | Document,
  highlightInfo: RecursiveWrapperArgs,
  startFound: boolean,
  charsHighlighted: number
): [boolean, number] {
  const {
    id: uuid,
    anchor,
    focus,
    anchorOffset,
    focusOffset,
    color,
    fontSettings,
    createdAt,
    selectionString,
  } = highlightInfo;
  const selectionLength = selectionString.length;

  Array.from(container.childNodes).forEach((element) => {
    if (charsHighlighted >= selectionLength) return;

    if (element.nodeType !== Node.TEXT_NODE) {
      if (element.nodeType === Node.COMMENT_NODE) {
        return;
      }

      if (getComputedStyle(element as Element).visibility !== "hidden") {
        [startFound, charsHighlighted] = _recursiveWrapper(
          element as HTMLElement, // cast since element could be Node
          highlightInfo,
          startFound,
          charsHighlighted
        );
      }
      return;
    }

    let startIndex = 0;
    if (!startFound) {
      if (element !== anchor && element !== focus) return;
      startFound = true;
      startIndex = Math.min(
        ...(element === anchor ? [anchorOffset] : []),
        ...(element === focus ? [focusOffset] : [])
      );
    }

    const { nodeValue, parentElement: parent } = element as Text;
    if (!nodeValue || !parent) return;

    if (startIndex > nodeValue.length) {
      throw new Error(
        `No match found for highlight string '${selectionString}'`
      );
    }

    const highlightTextEl = (element as Text).splitText(startIndex);
    let i = startIndex;

    for (; i < nodeValue.length; i++) {
      while (
        charsHighlighted < selectionLength &&
        selectionString[charsHighlighted].match(/\s/u)
      )
        charsHighlighted++;
      if (charsHighlighted >= selectionLength) break;

      const char = nodeValue[i];
      if (char === selectionString[charsHighlighted]) {
        charsHighlighted++;
      } else if (!char.match(/\s/u)) {
        throw new Error(
          `No match found for highlight string '${selectionString}'`
        );
      }
    }

    if (parent.classList.contains(HIGHLIGHT_CLASS)) return;

    const elementCharCount = i - startIndex;
    const insertBeforeElement = highlightTextEl.splitText(elementCharCount);
    const highlightText = highlightTextEl.nodeValue;

    if (highlightText && highlightText.match(/^\s*$/u)) {
      parent.normalize();
      return;
    }

    const highlightNode = document.createElement("amber-highlighter");
    highlightNode.classList.add(
      color === "inherit" ? DELETED_CLASS : HIGHLIGHT_CLASS
    );

    highlightNode.style.backgroundColor = color;
    highlightNode.style.color = fontSettings?.color || "black";
    highlightNode.dataset.amberhighlightid = uuid;
    highlightNode.textContent = highlightText ?? "";

    // applying font styles
    applyFontSettings(highlightNode, fontSettings);

    highlightTextEl.remove();
    parent.insertBefore(highlightNode, insertBeforeElement);
  });

  return [startFound, charsHighlighted];
}

//======= remove highlight ==========

export function removeHighlightById(id: string) {
  // Find all elements with the dataset id
  const highlights = document.querySelectorAll<HTMLElement>(
    `[data-amberhighlightid="${id}"]`
  );

  highlights.forEach((el) => {
    el.classList.remove(HIGHLIGHT_CLASS);
    el.style.backgroundColor = "inherit";
    el.dataset.amberhighlightid = "";

    // Reset all font-related styles
    el.style.color = "inherit";
    el.style.fontWeight = "inherit";
    el.style.fontStyle = "inherit";
    el.style.textDecoration = "inherit";
    el.style.fontSize = "inherit";
  });
}

// ===================== STORAGE ===========================
async function saveHighlight(info: StoredHighlight): Promise<boolean> {
  try {
    // Step 1: Save website (background script decides ID or reuse existing one)
    const websiteRes = await browser.runtime.sendMessage({
      action: "addWebsite",
      data: {
        id: crypto.randomUUID(), // propose an ID, but background can override
        createdAt: Date.now(),
        url: window.location.href,
      },
    });

    if (!websiteRes.success) {
      console.warn("⚠️ Failed to save website:", websiteRes.error);
      return false;
    }

    const storedWebsiteID = websiteRes.websiteID;
    if (!storedWebsiteID) {
      console.warn("⚠️ No websiteID returned from addWebsite.");
      return false;
    }

    // Step 2: Save highlight with the actual website ID
    const highlightRes = await browser.runtime.sendMessage({
      action: "addHighlight",
      data: {
        ...info,
        urlId: storedWebsiteID,
      },
    });
    // revalidate sidepanel highlights
    await browser.runtime.sendMessage({
      action: "invalidateSidepanelHighlights",
    });

    if (!highlightRes.success) {
      console.warn("⚠️ Failed to save highlight:", highlightRes.error);
      return false;
    }

    console.log("✅ Highlight saved successfully.");
    return true;
  } catch (error) {
    console.error("❌ Error saving highlight:", error);
    return false;
  }
}
