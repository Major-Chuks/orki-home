"use client";

import { useEffect, useRef } from "react";
import {
  useInView,
  useMotionValue,
  useSpring,
  useTransform,
  motion,
} from "framer-motion";

interface CountUpProps {
  to: number;
  from?: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  className?: string;
  decimals?: number;
}

export default function CountUp({
  to,
  from = 0,
  duration = 2,
  suffix = "",
  prefix = "",
  className = "",
  decimals = 0,
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  // Use a premium spring configuration instead of a linear/tween duration
  const rawCount = useMotionValue(from);
  const count = useSpring(rawCount, {
    mass: 0.8,
    stiffness: 75,
    damping: 15,
  });

  useEffect(() => {
    if (isInView) {
      rawCount.set(to);
    }
  }, [isInView, rawCount, to]);

  const displayValue = useTransform(count, (latest) => {
    return `${prefix}${latest.toFixed(decimals)}${suffix}`;
  });

  return (
    <motion.span ref={ref} className={className}>
      {displayValue}
    </motion.span>
  );
}
