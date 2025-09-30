import React, { ReactNode, useState } from "react";
import "./style.css";

type TooltipPosition = "top" | "bottom" | "left" | "right";

interface TooltipProps {
  text: string;
  position?: TooltipPosition;
  children: ReactNode;
}

const Tooltip: React.FC<TooltipProps> = ({
  text,
  position = "top",
  children,
}) => {
  const [visible, setVisible] = useState(false);

  return (
    <div
      className="tooltip-wrapper"
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
    >
      {children}
      {visible && (
        <div className={`tooltip-box tooltip-${position}`}>
          {text}
          <span className={`tooltip-arrow tooltip-arrow-${position}`} />
        </div>
      )}
    </div>
  );
};

export default Tooltip;
