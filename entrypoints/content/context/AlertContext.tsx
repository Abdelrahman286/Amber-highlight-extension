import React, { createContext, useContext, useState, ReactNode } from "react";
import Alert, { Position, AlertType } from "../components/alert/Alert";

/* --- Context Types --- */
interface AlertContextType {
  showAlert: (message: string, type?: AlertType, position?: Position) => void;
  hideAlert: () => void;
}

const AlertContext = createContext<AlertContextType | undefined>(undefined);

/* --- Provider Component --- */
export const AlertProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const DEBUG_ALWAYS_VISIBLE = false; // 👈 toggle to true for debugging

  const [alert, setAlert] = useState<{
    message: string;
    type: AlertType;
    position: Position;
    visible: boolean;
  }>({
    message: DEBUG_ALWAYS_VISIBLE ? "⚠️ Debug Alert Active" : "",
    type: "info",
    position: "top-right",
    visible: DEBUG_ALWAYS_VISIBLE,
  });

  const showAlert = (
    message: string,
    type: AlertType = "info",
    position: Position = "top-right"
  ) => {
    setAlert({ message, type, position, visible: true });
  };

  const hideAlert = () => setAlert((prev) => ({ ...prev, visible: false }));

  return (
    <AlertContext.Provider value={{ showAlert, hideAlert }}>
      {children}
      {alert.visible && (
        <Alert
          message={alert.message}
          type={alert.type}
          position={alert.position}
          onClose={hideAlert}
          debug={DEBUG_ALWAYS_VISIBLE}
        />
      )}
    </AlertContext.Provider>
  );
};

/* --- Hook --- */
export const useAlert = (): AlertContextType => {
  const context = useContext(AlertContext);
  if (!context) {
    throw new Error("useAlert must be used within an AlertProvider");
  }
  return context;
};
