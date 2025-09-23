export type HighlightArgs = {
  container: HTMLElement | Document;
  selection: Selection;
  color?: string;
  textColor?: string;
  highlightIndex: number;
};

type ContextText = {
  prefix: string;
  exact: string;
  suffix: string;
} | null;

export type RecursiveWrapperArgs = {
  color: string;
  textColor: string;
  highlightIndex: number;
  selectionString: string;

  anchorOffset: number;
  focusOffset: number;
  anchorPath: string | null;
  focusPath: string | null;

  anchorContext: ContextText;
  focusContext: ContextText;
  anchor: Node | null;
  focus: Node | null;
};

export type StoredHighlight = {
  color: string;
  textColor: string;
  highlightIndex: number;
  selectionString: string;

  anchorOffset: number;
  focusOffset: number;
  anchorPath: string | null;
  focusPath: string | null;

  anchorContext: ContextText;
  focusContext: ContextText;
};
