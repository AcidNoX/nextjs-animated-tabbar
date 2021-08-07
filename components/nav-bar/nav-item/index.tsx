import { useAnimation } from "framer-motion";
import { useRouter } from "next/dist/client/router";
import Link from "next/link";
import React, { useMemo } from "react";
import { IconType } from "react-icons";

import { ANIMATION_DURATION, BAR_COLOR, ITEM_WIDTH } from "../constants";
import { NavButton, Ripple } from "./style";

interface NavItemProps {
  index: number,
  activeColor: string,
  activeIconColor: string,
  icon: IconType,
  path: string
}

export const NavItem: React.FC<NavItemProps> = ({
  index,
  activeColor,
  activeIconColor,
  icon: Icon,
  path
}) => {
  const router = useRouter();
  const controls = useAnimation();
  const isActive = useMemo(() => router.pathname === path, [path, router]);

  const handleClick = async () => {
    await controls.start({
      scale: 0,
      opacity: 0.2,
      transition: {
        duration: 0
      }
    })
    await controls.start({
      scale: 1,
      transition: {
        duration: ANIMATION_DURATION / 2
      }
    });
    await controls.start({
      opacity: 0,
      transition: {
        duration: ANIMATION_DURATION
      }
    })
  }

  const variants = useMemo(() => ({
    inital: {
      translateY: 0,
      backgroundColor: BAR_COLOR,
      color: "#e2e2e2"
    },
    animate: {
      translateY: (-ITEM_WIDTH / 2) - 2,
      backgroundColor: activeColor,
      color: activeIconColor,
      transition: {
        delay: ANIMATION_DURATION,
        duration: ANIMATION_DURATION,
      }
    }
  }), [activeColor, activeIconColor]);

  return (
    <Link href={path} passHref>
      <NavButton
        index={index}
        variants={variants}
        initial={false}
        animate={isActive ? "animate" : "inital"}
        transition={{
          duration: ANIMATION_DURATION,
          ease: "easeInOut"
        }}
        onClick={handleClick} >
        <Icon
          size={26}
        />
        <Ripple animate={controls} />
      </NavButton>
    </Link>
  );
};