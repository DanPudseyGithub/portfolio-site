import { useState, useEffect, useRef } from "react";

// Simple Intersection Observer hook
export const useInView = (options?: IntersectionObserverInit) => {
  const ref = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true);
        observer.unobserve(entry.target); // only trigger once
      }
    }, options);

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref, options]);

  return { ref, inView };
};
export default useInView;
