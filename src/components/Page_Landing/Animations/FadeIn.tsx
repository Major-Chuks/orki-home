"use client";

import { motion, type Transition } from "framer-motion";
import { ReactNode } from "react";

interface FadeUpProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  yOffset?: number; // Also serves as the distance for other directions
  direction?: "up" | "down" | "left" | "right";
  motionType?: "smooth" | "spring" | "bouncy" | "sharp";
  once?: boolean;
  initialOpacity?: number;
  className?: string;
  onAnimationComplete?: () => void;
  timelineTrigger?: boolean;
}

export default function FadeIn({
  children,
  delay = 0,
  duration = 1.5,
  yOffset = 40,
  direction = "up",
  motionType = "spring",
  once = true,
  initialOpacity = 0,
  className = "",
  onAnimationComplete,
  timelineTrigger,
}: FadeUpProps) {
  const getInitialPosition = () => {
    switch (direction) {
      case "up":
        return { y: yOffset, x: 0 };
      case "down":
        return { y: -yOffset, x: 0 };
      case "left":
        return { x: yOffset, y: 0 }; // Starts on the right, moves left
      case "right":
        return { x: -yOffset, y: 0 }; // Starts on the left, moves right
      default:
        return { y: yOffset, x: 0 };
    }
  };

  const initialPos = getInitialPosition();

  const getTransition = (): Transition => {
    switch (motionType) {
      case "spring":
        return { type: "spring", bounce: 0.4, duration, delay };
      case "bouncy":
        return { type: "spring", bounce: 0.6, duration, delay };
      case "sharp":
        return {
          type: "tween",
          ease: "circOut",
          duration: duration * 0.8,
          delay,
        };
      case "smooth":
      default:
        return { type: "tween", ease: "easeOut", duration, delay };
    }
  };

  const variants = {
    hidden: {
      opacity: initialOpacity,
      x: initialPos.x,
      y: initialPos.y,
      transition: { duration: 0.3, ease: "easeIn" as const }, // Fast exit with no delay
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: getTransition(),
    },
  };

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView={timelineTrigger === undefined ? "visible" : undefined}
      animate={
        timelineTrigger !== undefined
          ? timelineTrigger
            ? "visible"
            : "hidden"
          : undefined
      }
      viewport={{ once, amount: 0.1 }}
      onAnimationComplete={onAnimationComplete}
      className={className}
    >
      {children}
    </motion.div>
  );
}
