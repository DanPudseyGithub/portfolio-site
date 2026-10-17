"use client";

import { useId, useRef, useState } from "react";
import Image from "next/image";
import { cabin, sourceCodePro } from "@fonts/Fonts";
import styleNames from "@utils/styleNames";
import styles from "./ClientLogos.module.scss";

// Distance in px between the cursor and the popover
const CURSOR_OFFSET = 16;

type ClientLogoProps = {
  logoUrl: string;
  title: string;
  description: string;
};

export const ClientLogo = ({ logoUrl, title, description }: ClientLogoProps) => {
  const [isActive, setIsActive] = useState(false);
  const popoverRef = useRef<HTMLDivElement>(null);
  const popoverId = useId();

  // Positions the popover beside a point, flipping it to the other side when it would leave the viewport.
  // Writes straight to the style so following the mouse doesn't re-render on every move.
  const positionPopover = (x: number, y: number) => {
    const popover = popoverRef.current;
    if (!popover) return;

    const { offsetWidth: width, offsetHeight: height } = popover;
    let left = x + CURSOR_OFFSET;
    let top = y + CURSOR_OFFSET;

    if (left + width > window.innerWidth) left = x - CURSOR_OFFSET - width;
    if (top + height > window.innerHeight) top = y - CURSOR_OFFSET - height;

    popover.style.transform = `translate3d(${Math.max(0, left)}px, ${Math.max(0, top)}px, 0)`;
  };

  const handlePointerEnter = (event: React.PointerEvent) => {
    positionPopover(event.clientX, event.clientY);
    setIsActive(true);
  };

  const handlePointerMove = (event: React.PointerEvent) => {
    positionPopover(event.clientX, event.clientY);
  };

  // Keyboard users get the popover anchored below the logo instead
  const handleFocus = (event: React.FocusEvent<HTMLLIElement>) => {
    const { left, bottom } = event.currentTarget.getBoundingClientRect();
    positionPopover(left - CURSOR_OFFSET, bottom - CURSOR_OFFSET / 2);
    setIsActive(true);
  };

  const hide = () => setIsActive(false);

  return (
    <li
      className={styles.Item}
      tabIndex={0}
      aria-describedby={popoverId}
      onPointerEnter={handlePointerEnter}
      onPointerMove={handlePointerMove}
      onPointerLeave={hide}
      onFocus={handleFocus}
      onBlur={hide}
    >
      <Image src={logoUrl} alt={title} className={styles.Logo} fill sizes="160px" />
      <div
        ref={popoverRef}
        id={popoverId}
        role="tooltip"
        className={styleNames(styles, ["Popover", isActive && "Popover--Active"])}
      >
        <p className={`${styles.PopoverTitle} ${cabin.className}`}>{title}</p>
        <p className={`${styles.PopoverDescription} ${sourceCodePro.className}`}>{description}</p>
      </div>
    </li>
  );
};

export default ClientLogo;
