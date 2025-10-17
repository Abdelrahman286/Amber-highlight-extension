export type HighlightArgs = {
  id: string;
  urlId: string;
  folderId: string;
  notes: string;
  container: HTMLElement | Document;
  selection: Selection;
  color?: string;
  fontSettings?: FontSettings;
  createdAt: number;
};

type ContextText = {
  prefix: string;
  exact: string;
  suffix: string;
} | null;

export type RecursiveWrapperArgs = {
  id: string;
  color: string;
  fontSettings?: FontSettings;
  notes?: string;
  createdAt: number;
  selectionString: string;

  anchorOffset: number;
  focusOffset: number;

  anchorPath?: string | null;
  focusPath?: string | null;
  anchorContext?: ContextText;
  focusContext?: ContextText;

  anchor: Node | null;
  focus: Node | null;
};

export type StoredHighlight = {
  id: string;

  color: string;
  fontSettings?: FontSettings;
  createdAt: number;
  selectionString: string;
  notes: string;

  urlId: string;
  folderId: string;

  anchorOffset: number;
  focusOffset: number;
  anchorPath: string | null;
  focusPath: string | null;

  anchorContext: ContextText;
  focusContext: ContextText;
};

// Define the websites interface
export interface Websites {
  id: string;
  createdAt: number;
  url: string;
}

export interface FontSettings {
  color?: string;
  bold?: boolean;
  italic?: boolean;
  underline?: boolean;
  lineThrough?: boolean;
  textSize?: "sm" | "md" | "lg";
}

export interface Folder {
  id: string;
  name: string;
  parentId: string | null;
  createdAt: number;
}
