// File: ShimmerText.tsx
import React from "react";
import "./shimmer.css";

type Props = {
  /** Text to display (string). */
  text: string;
  /** Font size in px or any CSS unit (e.g. 16, "1rem", "24px"). Defaults to 16px. */
  textSize?: number | string;
  /** Color of the shimmer text. Defaults to currentColor. */
  color?: string;
  /** Optional className for further styling. */
  className?: string;
  /** Time (ms) between staggered characters. Default 60ms. */
  staggerMs?: number;
};

const ShimmerText: React.FC<Props> = ({
  text,
  textSize = 16,
  color = "currentColor",
  className = "",
  staggerMs = 60,
}) => {
  const sizeStyle = typeof textSize === "number" ? `${textSize}px` : textSize;
  const chars = Array.from(text);

  return (
    <span
      className={`shimmer-text ${className}`.trim()}
      aria-live="polite"
      role="status"
      style={{ fontSize: sizeStyle, color }}
    >
      {chars.map((ch, i) => (
        <span
          key={i}
          className="shimmer-char"
          style={{ animationDelay: `${i * staggerMs}ms` }}
        >
          {ch}
        </span>
      ))}
    </span>
  );
};

export default ShimmerText;
