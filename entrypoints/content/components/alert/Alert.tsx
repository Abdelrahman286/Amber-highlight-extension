import React, { useEffect } from "react";
import { AlertTriangle, CheckCircle, Info, X } from "lucide-react";
import "./alert.css";

export type Position =
  | "top-left"
  | "top-right"
  | "bottom-left"
  | "bottom-right";
export type AlertType = "error" | "success" | "info";

interface AlertProps {
  message: string;
  position?: Position;
  type?: AlertType;
  onClose: () => void;
  debug?: boolean;
}

const Alert: React.FC<AlertProps> = ({
  message,
  position = "top-right",
  type = "info",
  onClose,
  debug = false,
}) => {
  // Automatically hide after 4s (unless debug mode)
  useEffect(() => {
    if (!debug) {
      const timer = setTimeout(onClose, 3000);
      return () => clearTimeout(timer);
    }
  }, [onClose, debug]);

  const iconMap = {
    error: <AlertTriangle className="alert-icon error" size={22} />,
    success: <CheckCircle className="alert-icon success" size={22} />,
    info: <Info className="alert-icon info" size={22} />,
  };

  return (
    <div className={`alert ${position} ${type}`}>
      {iconMap[type]}
      <span className="alert-message">{message}</span>
      <button className="alert-close" onClick={onClose}>
        <X size={18} />
      </button>
    </div>
  );
};

export default Alert;
