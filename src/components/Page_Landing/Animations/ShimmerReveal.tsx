"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ShimmerRevealProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  once?: boolean;
  className?: string;
  baseColor?: string; // The color before it is revealed
  revealColor?: string; // The color after it is revealed
  onAnimationComplete?: () => void;
  timelineTrigger?: boolean;
}

export default function ShimmerReveal({
  children,
  delay = 0,
  duration = 1.5,
  once = true,
  className = "",
  baseColor = "rgba(255, 255, 255, 0.1)", // Default faint color
  revealColor = "#FFF", // Default bright reveal color
  onAnimationComplete,
  timelineTrigger,
}: ShimmerRevealProps) {
  const variants = {
    hidden: {
      backgroundPosition: "100% 0%",
      transition: { duration: 0.2 },
    },
    visible: {
      backgroundPosition: "0% 0%",
      transition: { duration, delay, ease: "linear" as const },
    },
  };

  return (
    <motion.span
      variants={variants}
      initial="hidden"
      whileInView={timelineTrigger === undefined ? "visible" : undefined}
      animate={timelineTrigger !== undefined ? (timelineTrigger ? "visible" : "hidden") : undefined}
      viewport={{ once, amount: 0.1 }}
      onAnimationComplete={onAnimationComplete}
      className={className}
      style={{
        // Sharp gradient for "no fading" reveal
        background: `linear-gradient(to right, ${revealColor} 50%, ${baseColor} 50%)`,
        backgroundSize: "200% 100%",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text",
        color: "transparent",
        display: "inline-block", // Required for background clip to work on inline elements
      }}
    >
      {children}
    </motion.span>
  );
}
