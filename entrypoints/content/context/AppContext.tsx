// src/contexts/AppContext.tsx
import { FolderNode } from "@/entrypoints/src/FoldersManager/types";
import {
  createContext,
  useContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
  useRef,
  RefObject,
} from "react";

type AppContextType = {
  buttonPos: { x: number; y: number } | null;
  setButtonPos: Dispatch<SetStateAction<{ x: number; y: number } | null>>;

  selectionRef: RefObject<Selection | null>;

  showActionsBox: boolean;
  setShowActionsBox: Dispatch<SetStateAction<boolean>>;

  selectHighlightId: string;
  setSelectedHighlightId: Dispatch<SetStateAction<string>>;

  showFolders: boolean;
  setShowFolders: Dispatch<SetStateAction<boolean>>;
  selectedFolder: FolderNode | null;
  setSelectedFolder: React.Dispatch<React.SetStateAction<FolderNode | null>>;

  expandView: boolean;
  setExpandView: Dispatch<SetStateAction<boolean>>;

  activeIndex: number;
  setActiveIndex: Dispatch<SetStateAction<number>>;
};

// Create the context with a default (undefined)
const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppContextProvider({ children }: { children: ReactNode }) {
  const [buttonPos, setButtonPos] = useState<{ x: number; y: number } | null>(
    null
  );

  const [showActionsBox, setShowActionsBox] = useState(false);

  // store selection globally inside this ref
  const selectionRef = useRef<Selection | null>(null);

  const [selectHighlightId, setSelectedHighlightId] = useState<string>("");
  const [showFolders, setShowFolders] = useState<boolean>(false);
  const [selectedFolder, setSelectedFolder] = useState<FolderNode | null>(null);
  const [expandView, setExpandView] = useState(false);

  const [activeIndex, setActiveIndex] = useState<number>(0);

  return (
    <AppContext.Provider
      value={{
        buttonPos,
        setButtonPos,
        selectionRef,

        showActionsBox,
        setShowActionsBox,
        selectHighlightId,
        setSelectedHighlightId,
        showFolders,
        setShowFolders,
        selectedFolder,
        setSelectedFolder,
        expandView,
        setExpandView,

        activeIndex,
        setActiveIndex,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppContextProvider");
  }
  return context;
}
