"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef, ReactNode } from "react";

interface ScrollScaleProps {
  children: ReactNode;
  className?: string;
  useGlobalScroll?: boolean;
}

export default function ScrollScale({
  children,
  className = "",
  useGlobalScroll = false,
}: ScrollScaleProps) {
  const ref = useRef<HTMLDivElement>(null);

  // Track the scroll progress of this specific element relative to the viewport.
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 90%", "end end"],
  });

  // Track absolute window scroll for elements at the very top of the page (like Hero)
  const { scrollY } = useScroll();
  const globalProgress = useTransform(scrollY, [0, 500], [0, 1]);

  const activeProgress = useGlobalScroll ? globalProgress : scrollYProgress;

  // Apply a spring physics layer to smooth out stepped scrolling (like a mouse wheel)
  const smoothProgress = useSpring(activeProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Exponential growth curve:
  // Scroll Progress: 0% -> 40% -> 70% -> 100%
  // Scale Output:   0.6 -> 0.65 -> 0.75 -> 1.0
  // It grows only 0.15 over the first 70% of the scroll, then rapidly grows 0.25 in the final 30%.
  const scale = useTransform(
    smoothProgress,
    [0, 0.4, 0.7, 1],
    [0.6, 0.68, 0.85, 1], // Strictly increasing array prevents shrinking
  );

  // A subtle scrubbed fade-in as well
  const opacity = useTransform(smoothProgress, [0, 0.3, 1], [0.4, 0.8, 1]);

  return (
    <motion.div
      ref={ref}
      style={{ scale, opacity, transformOrigin: "bottom center" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
