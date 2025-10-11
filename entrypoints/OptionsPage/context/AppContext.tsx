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
  myRandomNumber: number;
};

// Create the context with a default (undefined)
const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppContextProvider({ children }: { children: ReactNode }) {
  const [myRandomNumber, setRandomNumber] = useState(1);
  return (
    <AppContext.Provider value={{ myRandomNumber }}>
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
