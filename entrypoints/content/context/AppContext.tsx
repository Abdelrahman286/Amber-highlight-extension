// src/contexts/AppContext.tsx
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
};

// Create the context with a default (undefined)
const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppContextProvider({ children }: { children: ReactNode }) {
  const [buttonPos, setButtonPos] = useState<{ x: number; y: number } | null>(
    null
  );

  //   const [showTriggersIcons, setShowTriggersIcons] = useState(false);
  const [showActionsBox, setShowActionsBox] = useState(false);

  // store selection globally inside this ref
  const selectionRef = useRef<Selection | null>(null);

  const [selectHighlightId, setSelectedHighlightId] = useState<string>("");

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
