import { FolderNode } from "./types";

// 🔹 Find a folder by ID in the tree
const findFolderInTree = (
  folders: FolderNode[],
  id: string
): FolderNode | null => {
  for (const folder of folders) {
    if (folder.id === id) return folder;
    const found = findFolderInTree(folder.children, id);
    if (found) return found;
  }
  return null;
};

// 🔹 Check if one folder is a descendant of another
export const isDescendant = (
  parentId: string,
  childId: string,
  folders: FolderNode[]
): boolean => {
  const parent = findFolderInTree(folders, parentId);
  if (!parent) return false;

  const checkChildren = (folder: FolderNode): boolean => {
    if (folder.id === childId) return true;
    return folder.children.some((child) => checkChildren(child));
  };

  return checkChildren(parent);
};

// 🔹 Add a new folder (to root or nested)
export const addFolderToTree = (
  folders: FolderNode[],
  parentId: string | null,
  newFolder: FolderNode
): FolderNode[] => {
  if (parentId === null) {
    return [...folders, newFolder];
  }

  const addToParent = (folders: FolderNode[]): FolderNode[] => {
    return folders.map((folder) => {
      if (folder.id === parentId) {
        return { ...folder, children: [...folder.children, newFolder] };
      }
      return { ...folder, children: addToParent(folder.children) };
    });
  };

  return addToParent(folders);
};

// 🔹 Rename a folder by ID
export const renameFolderInTree = (
  folders: FolderNode[],
  id: string,
  newName: string
): FolderNode[] => {
  return folders.map((folder) => {
    if (folder.id === id) {
      return { ...folder, name: newName };
    }
    return {
      ...folder,
      children: renameFolderInTree(folder.children, id, newName),
    };
  });
};

// 🔹 Delete a folder by ID
export const deleteFolderFromTree = (
  folders: FolderNode[],
  id: string
): FolderNode[] => {
  return folders
    .filter((folder) => folder.id !== id)
    .map((folder) => ({
      ...folder,
      children: deleteFolderFromTree(folder.children, id),
    }));
};

// 🔹 Move folder to a new parent
export const moveFolderInTree = (
  folders: FolderNode[],
  folderId: string,
  newParentId: string | null
): FolderNode[] => {
  let movedFolder: FolderNode | null = null;

  const removeFolder = (folders: FolderNode[]): FolderNode[] => {
    return folders
      .filter((folder) => {
        if (folder.id === folderId) {
          movedFolder = folder;
          return false;
        }
        return true;
      })
      .map((folder) => ({
        ...folder,
        children: removeFolder(folder.children),
      }));
  };

  const foldersWithoutMoved = removeFolder(folders);
  if (!movedFolder) return folders;

  if (newParentId === null) {
    return [...foldersWithoutMoved, movedFolder];
  }

  const addToParent = (folders: FolderNode[]): FolderNode[] => {
    return folders.map((folder) => {
      if (folder.id === newParentId) {
        return { ...folder, children: [...folder.children, movedFolder!] };
      }
      return { ...folder, children: addToParent(folder.children) };
    });
  };

  return addToParent(foldersWithoutMoved);
};

// 🔹 Get full folder path
export const getFolderPath = (
  folders: FolderNode[],
  folderId: string
): string => {
  const path: string[] = [];

  const findPath = (
    folders: FolderNode[],
    targetId: string,
    currentPath: string[]
  ): boolean => {
    for (const folder of folders) {
      const newPath = [...currentPath, folder.name];
      if (folder.id === targetId) {
        path.push(...newPath);
        return true;
      }
      if (findPath(folder.children, targetId, newPath)) {
        return true;
      }
    }
    return false;
  };

  findPath(folders, folderId, []);
  return path.join(" / ");
};
