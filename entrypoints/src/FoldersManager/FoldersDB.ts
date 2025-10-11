// utils/flattenFolders.ts
import { Folder } from "./types";

interface FolderNode {
  id: string;
  name: string;
  children: FolderNode[];
  createdAt: number;
}

export const flattenFolders = (
  folders: FolderNode[],
  parentId: string | null = null
): Folder[] => {
  const result: Folder[] = [];

  for (const folder of folders) {
    result.push({
      id: folder.id,
      name: folder.name,
      parentId,
      createdAt: folder.createdAt ?? Date.now(), // ✅ keep existing date
    });

    if (folder.children && folder.children.length > 0) {
      result.push(...flattenFolders(folder.children, folder.id));
    }
  }

  return result;
};

export const buildFolderTree = (flatFolders: Folder[]): FolderNode[] => {
  const map = new Map<string, FolderNode>();
  const roots: FolderNode[] = [];

  // First, create a node for each folder
  for (const folder of flatFolders) {
    map.set(folder.id, {
      id: folder.id,
      name: folder.name,
      createdAt: folder.createdAt,
      children: [],
    });
  }

  // Then, connect children to their parents
  for (const folder of flatFolders) {
    const node = map.get(folder.id)!;
    if (folder.parentId) {
      const parent = map.get(folder.parentId);
      parent?.children.push(node);
    } else {
      roots.push(node);
    }
  }

  return roots;
};
