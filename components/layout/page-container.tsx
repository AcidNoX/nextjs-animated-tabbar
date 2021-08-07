import React, { useMemo } from "react";

import { ANIMATION_DURATION, HEIGHT, ITEM_WIDTH, PADDING } from "../nav-bar/constants";
import { PC } from "./style";

export const PageContainer: React.FC<{ color: string, index: number }> = ({ color, children, index }) => {

  const clipPosition = useMemo(() => `at ${PADDING + (ITEM_WIDTH * index) + (ITEM_WIDTH / 2)}px calc(100% - ${HEIGHT / 2}px)`, [index]);

  return (
    <PC
      color={color}
      initial={{ clipPath: `circle(0% ${clipPosition})` }}
      animate={{
        clipPath: `circle(150% ${clipPosition})`,
        transition: {
          delay: ANIMATION_DURATION,
          duration: ANIMATION_DURATION
        }
      }}
      exit={{ clipPath: `circle(150% ${clipPosition})` }}
    >
      {children}
    </PC>
  );
}
