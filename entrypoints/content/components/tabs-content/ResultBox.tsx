import React, { useState } from "react";
import { Copy, Check } from "lucide-react";

export default function ResultBox({ translation }: { translation: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(translation);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (err) {
      console.error("Failed to copy text:", err);
    }
  };

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        minHeight: "30px",
        height: "100%",
        paddingRight: "20px",
      }}
    >
      <button
        title="Copy"
        onClick={handleCopy}
        style={{
          position: "absolute",
          top: "6px",
          right: "6px",
          border: "none",
          background: "transparent",
          padding: "3px",
          borderRadius: "6px",
          cursor: "pointer",
          opacity: 0.6,
        }}
      >
        {copied ? (
          <Check size={14} color="#22c55e" strokeWidth={2} />
        ) : (
          <Copy size={14} color="white" strokeWidth={1.8} />
        )}
      </button>
      <span style={{ whiteSpace: "pre-wrap" }}>{translation}</span>
    </div>
  );
}
