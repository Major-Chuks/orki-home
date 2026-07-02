"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ScaleInProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  initialScale?: number;
  once?: boolean;
  className?: string;
  onAnimationComplete?: () => void;
  timelineTrigger?: boolean;
}

export default function ScaleIn({
  children,
  delay = 0,
  duration = 0.5,
  initialScale = 0.8,
  once = true,
  className = "",
  onAnimationComplete,
  timelineTrigger,
}: ScaleInProps) {
  const variants = {
    hidden: {
      opacity: 0,
      scale: initialScale,
      transition: { duration: 0.3, ease: "easeIn" as const }, // Fast exit
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration,
        delay,
        ease: [0.34, 1.56, 0.64, 1] as [number, number, number, number], // Snappy pop-in with a slight bounce
      },
    },
  };

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView={timelineTrigger === undefined ? "visible" : undefined}
      animate={timelineTrigger !== undefined ? (timelineTrigger ? "visible" : "hidden") : undefined}
      viewport={{ once, amount: 0.1 }}
      onAnimationComplete={onAnimationComplete}
      className={className}
    >
      {children}
    </motion.div>
  );
}
