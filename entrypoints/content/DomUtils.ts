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

// List of CSS properties we modify
const TARGET_RULES: (keyof CSSStyleDeclaration)[] = [
  "display",
  "position",
  "width",
  "height",
  "top",
  "left",
  "transform",
  "zIndex", // TS prefers camelCase
];

// EXPAND the element and store its original styles
export const expandActionsBox = async (): Promise<void> => {
  try {
    const shadowHost = document.querySelector<HTMLElement>(
      "amber-highlights-host"
    );
    if (!shadowHost)
      throw new Error("Shadow host <amber-highlights-host> not found");

    const shadowRoot = shadowHost.shadowRoot;
    if (!shadowRoot) throw new Error("Shadow root not accessible");

    const el = shadowRoot.getElementById(
      "amber-actions-box"
    ) as HTMLElement | null;
    if (!el)
      throw new Error(
        "Element with id 'amber-actions-box' not found inside shadow root"
      );

    // Store only the styles we modify
    const originalRules: Record<string, string> = {};
    for (const prop of TARGET_RULES) {
      const cssProp = String(prop).replace(
        /[A-Z]/g,
        (m) => `-${m.toLowerCase()}`
      ); // ✅ Cast to string
      originalRules[cssProp] = el.style.getPropertyValue(cssProp) || "";
    }

    await browser.storage.local.set({
      amberActionsOriginalRules: originalRules,
    });

    const set = (prop: string, val: string) =>
      el.style.setProperty(prop, val, "important");

    set("display", "block");
    set("position", "fixed");
    set("width", "60vw");
    set("max-height", "60vh");
    set("top", "50%");
    set("left", "50%");
    set("transform", "translate(-50%, -60%)");
    set("z-index", "999999");
  } catch (err) {
    const error = err instanceof Error ? err.message : String(err);
    console.warn("⚠️ expandActionsBox failed:", error);
  }
};

// MINIMIZE and restore previous style values
export const minimizeActionsBox = async (): Promise<void> => {
  try {
    const shadowHost = document.querySelector<HTMLElement>(
      "amber-highlights-host"
    );
    if (!shadowHost)
      throw new Error("Shadow host <amber-highlights-host> not found");

    const shadowRoot = shadowHost.shadowRoot;
    if (!shadowRoot) throw new Error("Shadow root not accessible");

    const el = shadowRoot.getElementById(
      "amber-actions-box"
    ) as HTMLElement | null;
    if (!el)
      throw new Error(
        "Element with id 'amber-actions-box' not found inside shadow root"
      );

    const data = await browser.storage.local.get("amberActionsOriginalRules");
    const rules = data.amberActionsOriginalRules as
      | Record<string, string>
      | undefined;
    if (!rules)
      throw new Error("No saved style rules found in browser.storage.local");

    for (const [prop, val] of Object.entries(rules)) {
      if (val) el.style.setProperty(prop, val);
      else el.style.removeProperty(prop);
    }
  } catch (err) {
    const error = err instanceof Error ? err.message : String(err);
    console.warn("⚠️ minimizeActionsBox failed:", error);
  }
};
