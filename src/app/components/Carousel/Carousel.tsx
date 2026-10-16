"use client";

import { useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";
import styled from "styled-components";
import useInView from "@utils/useInView";

gsap.registerPlugin(Draggable);

type CarouselProps = {
  children: React.ReactNode;
  direction?: "left" | "right"; // controls autoplay scroll direction
};

/* ---------------- Styled Components ---------------- */

const CarouselWrapper = styled.section`
  width: 100%;
  overflow: hidden;
  margin-bottom: 16px;
  padding-left: 16px;

  /* Ensure the last carousel doesn’t add unwanted spacing */
  &:last-child {
    margin-bottom: 0;
  }
`;

const CarouselRow = styled.div`
  display: flex;
  gap: 16px;
  user-select: none;
  opacity: 0; /* hidden until ready to avoid CLS */
  transition: opacity 0.3s ease;
`;

/* ---------------- Component ---------------- */

export const Carousel = ({ children, direction }: CarouselProps) => {
  // Detect when the carousel is visible to avoid running GSAP offscreen
  const { ref: carouselRef, inView } = useInView({ threshold: 0.2 });

  // Flag to prevent CLS flash before GSAP is applied
  const [isReady, setIsReady] = useState(false);

  // Row container reference
  const rowRef = useRef<HTMLDivElement>(null);

  // Store GSAP tween instance to control pause/play
  const tlRef = useRef<gsap.core.Tween | null>(null);

  useLayoutEffect(() => {
    if (!inView || !rowRef.current) return;

    const row = rowRef.current;
    const cards = Array.from(row.children) as HTMLDivElement[];

    // Measure a card and spacing
    const cardWidth = cards[0].offsetWidth;
    const gap = 16;

    // Total scrollable width of all cards
    const totalWidth = cards.length * (cardWidth + gap) - gap;
    const viewportWidth = row.parentElement?.offsetWidth || 0;

    // How far we can scroll before last card touches edge
    const maxScroll = totalWidth - viewportWidth;

    // Set initial x position depending on scroll direction
    if (direction === "right") {
      gsap.set(row, { x: -maxScroll });
    } else {
      gsap.set(row, { x: 0 });
    }

    // Autoscroll animation (not infinite, stops at edges)
    const tl = gsap.to(row, {
      x: direction === "left" ? -maxScroll : 0,
      duration: 60, // Adjust to control speed
      ease: "linear",
      paused: false,
    });

    tlRef.current = tl;

    // Enable drag-to-scroll, restricted to bounds
    Draggable.create(row, {
      type: "x",
      inertia: true,
      bounds: { minX: -maxScroll, maxX: 0 },
      onDragStart() {
        tl.pause(); // pause autoplay when dragging
      },
      onDragEnd() {
        // Resume only if not at either edge
        const progress = Math.abs(row._gsap?.x || 0);
        if (progress > 0 && progress < maxScroll) {
          tl.play();
        }
      },
    });

    // Mark ready so content fades in
    setIsReady(true);
  }, [inView, direction]);

  return (
    <CarouselWrapper ref={carouselRef}>
      <CarouselRow
        ref={rowRef}
        style={{
          visibility: isReady ? "visible" : "hidden",
          opacity: isReady ? 1 : 0,
        }}
      >
        {children}
      </CarouselRow>
    </CarouselWrapper>
  );
};

export default Carousel;
