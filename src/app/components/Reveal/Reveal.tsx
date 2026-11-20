"use client";

import useInView from "@utils/useInView";
import styles from "./Reveal.module.scss";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  as?: "section" | "article" | "div";
};

// Kept at module level so the observer isn't recreated on every render
const observerOptions: IntersectionObserverInit = {
  threshold: 0,
  rootMargin: "0px 0px -10% 0px",
};

// Unveils its contents left to right with a clip-path wipe the first time it
// scrolls into view. The content itself never moves or scales, it's only masked.
const Reveal = ({ children, className, as: Tag = "div" }: RevealProps) => {
  const { ref, inView } = useInView(observerOptions);

  return (
    // Browsers count an element's own clip-path when checking visibility, so the
    // fully clipped element never registers as in view. Observe this unclipped
    // wrapper instead.
    <div ref={ref as React.RefObject<HTMLDivElement>} className={styles.Observer}>
      <Tag className={`${styles.Reveal} ${className ?? ""}`} data-revealed={inView}>
        {children}
      </Tag>
    </div>
  );
};

export default Reveal;
