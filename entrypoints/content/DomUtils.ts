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
