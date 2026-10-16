"use client";

import React from "react";
import ArrowRight from "@icons/ArrowRight.svg";

type IconName = "arrow-right";

interface IconProps {
  name: IconName;
  className?: string;
  title?: string;
}

const icons: Record<IconName, React.FC<React.SVGProps<SVGSVGElement>>> = {
  "arrow-right": ArrowRight,
};

const Icon: React.FC<IconProps> = ({ name, className, title }) => {
  const SvgIcon = icons[name];
  return <SvgIcon className={className}>{title ? <title>{title}</title> : null}</SvgIcon>;
};

export default Icon;
