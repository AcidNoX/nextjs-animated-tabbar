import { motion } from "framer-motion";
import styled from "styled-components";

export const Container = styled.main`
  min-height: 100vh;
  min-width: 100vw;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Inner = styled.div`
  width: 414px;
  height: 736px;
  box-shadow: 0 0 50px rgba(0,0,0,0.3);
  border-radius: 2rem;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

export const PC = styled(motion.div) <{ color: string }>`
  flex: 1;
  background-color: ${props => props.color};
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;