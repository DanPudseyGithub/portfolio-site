"use client";

import React from "react";
import ArrowRight from "@icons/ArrowRight.svg";
import Book from "@icons/Book.svg";
import Headphones from "@icons/Headphones.svg";
import Pen from "@icons/Pen.svg";
import Tv from "@icons/Tv.svg";

export type IconName = "arrow-right" | "book" | "headphones" | "pen" | "tv";

interface IconProps {
  name: IconName;
  className?: string;
  title?: string;
}

const icons: Record<IconName, React.FC<React.SVGProps<SVGSVGElement>>> = {
  "arrow-right": ArrowRight,
  book: Book,
  headphones: Headphones,
  pen: Pen,
  tv: Tv,
};

const Icon: React.FC<IconProps> = ({ name, className, title }) => {
  const SvgIcon = icons[name];
  // Icons without a title are decorative, so hide them from screen readers
  return (
    <SvgIcon className={className} aria-hidden={title ? undefined : true}>
      {title ? <title>{title}</title> : null}
    </SvgIcon>
  );
};

export default Icon;
