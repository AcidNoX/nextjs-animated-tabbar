import React from "react";

import { NAV_ITEMS } from './constants';
import { NavClip } from "./nav-clip";
import { NavItem } from "./nav-item";
import { Container } from "./styles";

export const NavBar: React.FC = () => {
  return (
    <Container>
      <NavClip />
      {NAV_ITEMS.map((x, i) => (
        <NavItem
          key={i}
          index={i}
          activeColor={x.activeColor}
          activeIconColor={x.activeIconColor}
          icon={x.icon}
          path={x.path} />
      ))}
    </Container>
  )
}