import React from "react";
import ShimmerText from "../shimmerText/ShimmerText";

const TranslateTab = () => {
  return (
    <div>
      <span>Shimmer Text</span>
      <ShimmerText
        text="summarizing ..."
        textSize={12}
        color="oklch(87.1% 0.006 286.286)"
        staggerMs={70}
      />
    </div>
  );
};

export default TranslateTab;
