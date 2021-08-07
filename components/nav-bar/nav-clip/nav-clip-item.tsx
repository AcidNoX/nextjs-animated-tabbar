import React from "react";

import { ANIMATION_DURATION, ITEM_INNER, ITEM_WIDTH, PADDING } from "../constants";
import { Clip } from './style';

interface NavClipItemProps {
  index: number,
  isActive: boolean
}

const variants = {
  initial: {
    cy: ITEM_WIDTH / 2,
    r: (ITEM_INNER - 8) / 2
  },
  animate: {
    cy: 0,
    r: ((ITEM_INNER - 8) / 2) * 1.5,
    transition: {
      delay: ANIMATION_DURATION,
      duration: ANIMATION_DURATION,
    }
  }
}

export const NavClipItem: React.FC<NavClipItemProps> = ({ index, isActive }) => {

  return (
    <Clip
      cx={PADDING + (ITEM_WIDTH * index) + ITEM_WIDTH / 2}
      fill="black"
      transition={{
        duration: ANIMATION_DURATION,
        ease: "easeInOut",
      }}
      initial={false}
      variants={variants}
      animate={isActive ? "animate" : "initial"}
    />
  );
};