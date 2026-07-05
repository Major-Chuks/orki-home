"use client";

import { motion } from "framer-motion";

interface TextRevealProps {
  text: string;
  delay?: number;
  duration?: number;
  once?: boolean;
  className?: string;
  staggerDuration?: number;
  /**
   * If true, the text will fade and slightly rotate in.
   * If false (default), it uses a strict overflow mask reveal.
   */
  useFade?: boolean;
  /**
   * Defines the animation style.
   * - "mask": Strict overflow mask reveal (default)
   * - "fade": Fade and slightly rotate in
   * - "typewriter": Fade in from right to left with no vertical movement
   */
  effect?: "mask" | "fade" | "typewriter";
  /**
   * Horizontal offset (in px) for the initial state. Controls the slide distance for the typewriter effect.
   */
  xOffset?: number;
  /**
   * Reveal by "word", "char", or "sentence". Defaults to "word".
   */
  splitBy?: "word" | "char" | "sentence";
  onAnimationComplete?: () => void;
  timelineTrigger?: boolean;
  /**
   * If true, centers the text horizontally.
   */
  center?: boolean;
}

export default function TextReveal({
  text,
  delay = 0,
  duration = 0.6,
  once = true,
  className = "",
  staggerDuration = 0.04,
  useFade = false,
  splitBy = "word",
  effect,
  xOffset = 15,
  onAnimationComplete,
  timelineTrigger,
  center = false,
}: TextRevealProps) {
  const elements =
    splitBy === "word"
      ? text.split(" ")
      : splitBy === "char"
        ? text.split("")
        : [text];

  // Determine actual effect for backwards compatibility with `useFade`
  const currentEffect = effect ? effect : useFade ? "fade" : "mask";

  const containerVariants = {
    hidden: {
      transition: {
        staggerChildren: 0.01,
        staggerDirection: -1, // Reverse the stagger on exit
      },
    },
    visible: {
      transition: {
        staggerChildren: staggerDuration,
        delayChildren: delay,
      },
    },
  };

  const childVariants = {
    hidden: {
      y: currentEffect === "typewriter" ? "0%" : "110%", // Push slightly past 100% to ensure it's fully hidden behind the mask
      x: currentEffect === "typewriter" ? `${xOffset}px` : "0%", // Slide from right for typewriter
      opacity: currentEffect === "mask" ? 1 : 0,
      rotate: currentEffect === "fade" ? 4 : 0,
      transition: { duration: 0.2 }, // fast exit
    },
    visible: {
      y: "0%",
      x: "0%",
      opacity: 1,
      rotate: 0,
      transition: {
        duration: duration,
        ease: [0.22, 1, 0.36, 1] as [number, number, number, number], // easeOutQuint
      },
    },
  };

  return (
    <motion.span
      className={className}
      variants={containerVariants}
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
      style={{
        display: "inline-flex",
        flexWrap: "wrap",
        columnGap: splitBy === "word" ? "0.25em" : "0",
        justifyContent: center ? "center" : "flex-start",
      }}
    >
      {elements.map((el, index) => (
        <span
          key={index}
          style={{
            overflow: currentEffect === "mask" ? "hidden" : "visible",
            display: "inline-block",
            paddingBottom: currentEffect === "mask" ? "0.15em" : "0",
            marginBottom: currentEffect === "mask" ? "-0.15em" : "0",
            whiteSpace: el === " " ? "pre" : "normal",
          }}
        >
          <motion.span
            variants={childVariants}
            style={{
              display: "inline-block",
              transformOrigin: "bottom left",
            }}
          >
            {el}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
}
