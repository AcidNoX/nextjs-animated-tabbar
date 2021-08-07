import { IoAdd, IoChatboxOutline, IoHomeOutline, IoPersonOutline, IoSettingsOutline } from "react-icons/io5";

export const PADDING = 20;
export const ITEM_WIDTH = 74.8;
export const ITEM_INNER = ITEM_WIDTH - 26;
export const WIDTH = 414;
export const HEIGHT = 80;
export const INSET_ARC_RADIUS = 8;
export const ANIMATION_DURATION = 0.3;
export const BAR_COLOR = "#252425";

export const NAV_ITEMS = [
  {
    path: "/",
    icon: IoHomeOutline,
    activeColor: "#252425",
    activeIconColor: "#e2e2e2"
  },
  {
    path: "/profile",
    icon: IoPersonOutline,
    activeColor: "#252425",
    activeIconColor: "#e2e2e2"
  },
  {
    path: "/add",
    icon: IoAdd,
    activeColor: "#2cdf8a",
    activeIconColor: "#252425"
  },
  {
    path: "/messages",
    icon: IoChatboxOutline,
    activeColor: "#252425",
    activeIconColor: "#e2e2e2"
  },
  {
    path: "/settings",
    icon: IoSettingsOutline,
    activeColor: "#252425",
    activeIconColor: "#e2e2e2"
  }
];