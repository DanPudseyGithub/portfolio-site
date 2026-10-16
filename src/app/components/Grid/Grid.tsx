import React from "react";
import styles from "./Grid.module.scss";

type RowWrapperProps = {
  children: React.ReactNode;
};

type RowProps = {
  children: React.ReactNode;
  gap?: "sm" | "md" | "lg";
  className?: string;
  center?: boolean;
  height?: "inherit";
};

type AlignOptions = "start" | "center" | "end" | "stretch";
type JustifyOptions = "start" | "center" | "end" | "between";

type ColumnProps = {
  children: React.ReactNode;
  lg?: number;
  md?: number;
  sm?: number;
  startLg?: number;
  startMd?: number;
  startSm?: number;
  className?: string;
  /** Alignment & justification — default (mobile first) */
  align?: AlignOptions;
  justify?: JustifyOptions;
  /** Responsive overrides */
  alignSm?: AlignOptions;
  alignMd?: AlignOptions;
  alignLg?: AlignOptions;
  justifySm?: JustifyOptions;
  justifyMd?: JustifyOptions;
  justifyLg?: JustifyOptions;
  smOrder?: number;
  mdOrder?: number;
  lgOrder?: number;
};

export const RowWrapper = ({ children }: RowWrapperProps) => {
  return <section className={styles.RowWrapper}>{children}</section>;
};

export const Row: React.FC<RowProps> = ({
  children,
  gap = "lg",
  className = "",
  center = false,
  height,
}) => {
  let modifiedChildren = children;

  if (center) {
    // Calculate total span for direct Column children
    const totalSpan = React.Children.toArray(children).reduce((sum: number, child) => {
      if (!React.isValidElement(child)) return sum;

      const lg = (child.props as ColumnProps).lg ?? 12;
      return sum + lg;
    }, 0);

    // If total span is less than 12, calculate start offset for the first column
    if (totalSpan < 12) {
      modifiedChildren = React.Children.map(children, (child, index) => {
        if (!React.isValidElement(child)) return child;

        // Only set start on the first column
        if (index === 0) {
          const startLg = Math.floor((12 - totalSpan) / 2) + 1; // +1 because grid-column-start is 1-indexed
          return React.cloneElement(child, { startLg, ...child.props });
        }
        return child;
      });
    }
  }

  return (
    <div className={`${styles.Row} ${styles.Inherit} ${styles[`gap-${gap}`]} ${className}`}>
      {modifiedChildren}
    </div>
  );
};

export const Column: React.FC<ColumnProps> = ({
  children,
  lg = 12,
  md,
  sm,
  startLg,
  startMd,
  startSm,
  className = "",
  align,
  justify,
  alignSm,
  alignMd,
  alignLg,
  justifySm,
  justifyMd,
  justifyLg,
  smOrder,
  mdOrder,
  lgOrder,
}) => {
  const classes = [
    styles.Column,
    // spans
    styles[`span-lg-${lg}`],
    md ? styles[`span-md-${md}`] : "",
    sm ? styles[`span-sm-${sm}`] : "",
    // starts
    startLg ? styles[`start-span-lg-${startLg}-${lg}`] : "",
    startMd && md ? styles[`start-span-md-${startMd}-${md}`] : "",
    startSm && sm ? styles[`start-span-sm-${startSm}-${sm}`] : "",
    // align (vertical)
    align ? styles[`justify-${align}`] : "",
    alignSm ? styles[`justify-sm-${alignSm}`] : "",
    alignMd ? styles[`justify-md-${alignMd}`] : "",
    alignLg ? styles[`justify-lg-${alignLg}`] : "",
    // justify (horizontal)
    justify ? styles[`align-${justify}`] : "",
    justifySm ? styles[`align-sm-${justifySm}`] : "",
    justifyMd ? styles[`align-md-${justifyMd}`] : "",
    justifyLg ? styles[`align-lg-${justifyLg}`] : "",
    // Order
    smOrder ? styles[`order-sm-${smOrder}`] : "",
    mdOrder ? styles[`order-md-${mdOrder}`] : "",
    lgOrder ? styles[`order-lg-${lgOrder}`] : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return <div className={classes}>{children}</div>;
};
