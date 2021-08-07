import { useRouter } from "next/dist/client/router"
import React from "react"

import { BAR_COLOR, HEIGHT, NAV_ITEMS, WIDTH } from "../constants"
import { NavClipItem } from "./nav-clip-item"
import { Svg } from "./style"

const MASK_ID = "clip";

export const NavClip = () => {
  const router = useRouter();

  return (
    <Svg>
      <defs>
        <mask id={MASK_ID}>
          <rect fill="#ffffff" width={WIDTH} height={HEIGHT} y={0} />
          {NAV_ITEMS.map((x, i) => (
            <NavClipItem
              key={i}
              index={i}
              isActive={router.pathname === x.path} />
          ))}
        </mask>
      </defs>
      <rect
        width={WIDTH}
        height={HEIGHT}
        mask={`url(#${MASK_ID})`}
        fill={BAR_COLOR}
        stroke="none"
      />
    </Svg>
  )
}