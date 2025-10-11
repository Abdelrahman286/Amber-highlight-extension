export interface FolderNode {
  id: string;
  name: string;
  children: FolderNode[];
  createdAt: number;
}
export interface Folder {
  id: string;
  name: string;
  parentId: string | null;
  createdAt: number;
}
export interface FolderItemProps {
  folder: FolderNode;
  onAddChild: any;
  onRename: any;
  onDelete: (id: string) => void;
  onMove: (folderId: string, newParentId: string | null) => void;
  onSelect: (folder: FolderNode) => void;
  selectedId: string | null;
  level: number;
}
