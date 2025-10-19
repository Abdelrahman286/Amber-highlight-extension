import { FontSettings } from "./type";

type ContextText = {
  prefix: string;
  exact: string;
  suffix: string;
} | null;

export function getContextText(
  node: Node | null,
  offset: number,
  length: number
): ContextText {
  if (!node || node.nodeType !== Node.TEXT_NODE) return null;

  const text = node.nodeValue ?? "";
  const exact = text.substr(offset, length);
  const prefix = text.substr(Math.max(0, offset - 15), Math.min(15, offset));
  const suffix = text.substr(offset + length, 15);

  return { prefix, exact, suffix };
}

export function getNodePath(node: Node | null): string | null {
  if (!node) return null;
  const path: number[] = [];

  while (node && node !== document.body) {
    const parent = node.parentNode as Node;
    if (!parent) break;

    const index = Array.from(parent.childNodes).indexOf(node as ChildNode);
    path.unshift(index);

    node = parent;
  }

  return path.join("/");
}

export function getNodeFromPath(path: string) {
  if (!path) return null;
  const indices = path.split("/").map(Number);
  let node = document.body;
  for (let i of indices) {
    if (!node.childNodes[i]) return null;
    node = node.childNodes[i] as any;
  }
  return node;
}

export function findNodeByContext(context: ContextText) {
  if (!context || !context.exact) return null;
  const walker = document.createTreeWalker(
    document.body,
    NodeFilter.SHOW_TEXT,
    null
  );
  while (walker.nextNode()) {
    const text = walker?.currentNode?.nodeValue;
    if (!text) return;
    const index = text.indexOf(context.exact);
    if (index !== -1) {
      // Check prefix & suffix
      const prefixMatch =
        context.prefix === "" ||
        text.substr(
          Math.max(0, index - context.prefix.length),
          context.prefix.length
        ) === context.prefix;
      const suffixMatch =
        context.suffix === "" ||
        text.substr(index + context.exact.length, context.suffix.length) ===
          context.suffix;
      if (prefixMatch && suffixMatch) {
        return { node: walker.currentNode, offset: index };
      }
    }
  }
  return null;
}

/**
 * Applies font settings to one or more elements safely.
 * Only applies properties that exist in the provided settings.
 * @param elements HTMLElement or NodeListOf<HTMLElement>
 * @param settings FontSettings to apply (optional or partial)
 */
export function applyFontSettings(
  elements: HTMLElement | NodeListOf<HTMLElement>,
  settings?: Partial<FontSettings>
) {
  if (!elements) return;

  const elList =
    elements instanceof HTMLElement ? [elements] : Array.from(elements);

  elList.forEach((el) => {
    if (!el) return;

    // --- Font weight ---
    if ("bold" in (settings || {}))
      el.style.fontWeight = settings?.bold ? "bold" : "inherit";

    // --- Italic ---
    if ("italic" in (settings || {}))
      el.style.fontStyle = settings?.italic ? "italic" : "inherit";

    // --- Text decorations ---
    if ("underline" in (settings || {}) || "lineThrough" in (settings || {})) {
      const decorations: string[] = [];
      if (settings?.underline) decorations.push("underline");
      if (settings?.lineThrough) decorations.push("line-through");
      el.style.textDecoration = decorations.length
        ? decorations.join(" ")
        : "inherit";
    }

    // --- Font size ---
    if ("textSize" in (settings || {})) {
      switch (settings?.textSize) {
        case "sm":
          el.style.fontSize = "12px";
          break;
        case "md":
          el.style.fontSize = "16px";
          break;
        case "lg":
          el.style.fontSize = "20px";
          break;
        default:
          el.style.fontSize = "inherit";
      }
    }

    // --- Color ---
    if ("color" in (settings || {}))
      el.style.color = settings?.color ?? "inherit";
  });
}
