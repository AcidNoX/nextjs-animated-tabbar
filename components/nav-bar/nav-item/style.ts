import { motion } from "framer-motion";
import styled from "styled-components";

import { ITEM_INNER, ITEM_WIDTH, PADDING } from "../constants";

export const NavButton = styled(motion.a) <{ index: number }>`
  left: ${props => PADDING + (ITEM_WIDTH * props.index) + ((ITEM_WIDTH - ITEM_INNER) / 2)}px;
  width: ${ITEM_INNER}px;
  height: ${ITEM_INNER}px;
  position: absolute;
  border-radius: 50%;
  background-color: #252425;
  display: flex;
  justify-content: center;
  align-items: center;
  transform-origin: 50% 50%;
  overflow: hidden;
`

export const Ripple = styled(motion.div)`
  position: absolute;
  background-color: #fff;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 50%;
  scale: 0;
  opacity: 0;
`;