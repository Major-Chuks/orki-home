"use client";

import { motion } from "framer-motion";
import ImagePlaceholder from "../../ImagePlaceholder/ImagePlaceholder";
import styles from "./TwoFactorArt.module.css";
import Lock from "@/assets/Components/Lock";

const DIGITS = ["4", "2", "8", "5"];

const getBoxAnimation = (index: number) => {
  if (index === 0) {
    return {
      times: [0, 0.15, 0.18, 0.9, 1],
      colors: ["#875ade", "#875ade", "#f2ecfc", "#f2ecfc", "#875ade"],
      shadows: [
        "0 4px 14px rgba(135, 90, 222, 0.3)",
        "0 4px 14px rgba(135, 90, 222, 0.3)",
        "0 4px 6px rgba(0, 0, 0, 0.05)",
        "0 4px 6px rgba(0, 0, 0, 0.05)",
        "0 4px 14px rgba(135, 90, 222, 0.3)",
      ],
    };
  } else if (index === 1) {
    return {
      times: [0, 0.12, 0.15, 0.3, 0.33, 0.9, 1],
      colors: [
        "#f2ecfc",
        "#f2ecfc",
        "#875ade",
        "#875ade",
        "#f2ecfc",
        "#f2ecfc",
        "#f2ecfc",
      ],
      shadows: [
        "0 4px 6px rgba(0, 0, 0, 0.05)",
        "0 4px 6px rgba(0, 0, 0, 0.05)",
        "0 4px 14px rgba(135, 90, 222, 0.3)",
        "0 4px 14px rgba(135, 90, 222, 0.3)",
        "0 4px 6px rgba(0, 0, 0, 0.05)",
        "0 4px 6px rgba(0, 0, 0, 0.05)",
        "0 4px 6px rgba(0, 0, 0, 0.05)",
      ],
    };
  } else if (index === 2) {
    return {
      times: [0, 0.27, 0.3, 0.45, 0.48, 0.9, 1],
      colors: [
        "#f2ecfc",
        "#f2ecfc",
        "#875ade",
        "#875ade",
        "#f2ecfc",
        "#f2ecfc",
        "#f2ecfc",
      ],
      shadows: [
        "0 4px 6px rgba(0, 0, 0, 0.05)",
        "0 4px 6px rgba(0, 0, 0, 0.05)",
        "0 4px 14px rgba(135, 90, 222, 0.3)",
        "0 4px 14px rgba(135, 90, 222, 0.3)",
        "0 4px 6px rgba(0, 0, 0, 0.05)",
        "0 4px 6px rgba(0, 0, 0, 0.05)",
        "0 4px 6px rgba(0, 0, 0, 0.05)",
      ],
    };
  } else {
    // Box 3 (Last)
    return {
      times: [0, 0.42, 0.45, 0.9, 1],
      colors: ["#f2ecfc", "#f2ecfc", "#875ade", "#875ade", "#f2ecfc"],
      shadows: [
        "0 4px 6px rgba(0, 0, 0, 0.05)",
        "0 4px 6px rgba(0, 0, 0, 0.05)",
        "0 4px 14px rgba(135, 90, 222, 0.3)",
        "0 4px 14px rgba(135, 90, 222, 0.3)",
        "0 4px 6px rgba(0, 0, 0, 0.05)",
      ],
    };
  }
};

const getDigitAnimation = (index: number) => {
  const endPop = (index + 1) * 0.15; // 0.15, 0.30, 0.45, 0.60
  const startPop = endPop - 0.05; // 0.10, 0.25, 0.40, 0.55
  return {
    times: [0, startPop, endPop, 0.9, 1],
    scale: [0.8, 0.8, 1, 1, 0.8],
    y: [10, 10, 0, 0, 10],
    opacity: [0, 0, 1, 1, 0],
  };
};

const TwoFactorArt = () => {
  return (
    <div className={styles.container}>
      <div className={styles.backdropWrapper}>
        <motion.div
          className={styles.backdropCircle}
          animate={{ scale: [1, 1.05, 1], opacity: [0.8, 1, 0.8] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className={styles.digitsRow}>
        {DIGITS.map((digit, index) => {
          const isLast = index === DIGITS.length - 1;
          const boxAnim = getBoxAnimation(index);
          const digitAnim = getDigitAnimation(index);

          return (
            <motion.div
              key={index}
              className={`${styles.digitBox} ${isLast ? styles.lastBox : ""}`}
              initial={{ borderColor: "#f2ecfc" }}
              animate={{
                borderColor: boxAnim.colors,
                boxShadow: boxAnim.shadows,
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                times: boxAnim.times,
                ease: "easeInOut",
              }}
            >
              <motion.span
                className={styles.digitText}
                animate={{
                  opacity: digitAnim.opacity,
                  scale: digitAnim.scale,
                  y: digitAnim.y,
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  times: digitAnim.times,
                  ease: "easeOut",
                }}
              >
                {digit}
              </motion.span>

              {isLast && (
                <motion.div
                  className={styles.checkBadge}
                  animate={{
                    scale: [0, 0, 1.2, 1, 1, 0],
                    opacity: [0, 0, 1, 1, 1, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    times: [0, 0.55, 0.6, 0.65, 0.9, 1],
                  }}
                >
                  ✓
                </motion.div>
              )}
            </motion.div>
          );
        })}
      </div>

      <motion.div
        className={styles.lockBox}
        animate={{
          scale: [1, 1, 1.1, 1, 1],
          backgroundColor: [
            "#111827",
            "#111827",
            "#111827",
            "#111827",
            "#111827",
          ],
          boxShadow: [
            "0 10px 25px rgba(0,0,0,0.1)",
            "0 10px 25px rgba(0,0,0,0.1)",
            "0 15px 35px rgba(135, 90, 222, 0.3)",
            "0 15px 35px rgba(135, 90, 222, 0.3)",
            "0 10px 25px rgba(0,0,0,0.1)",
          ],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          times: [0, 0.55, 0.6, 0.9, 1],
        }}
      >
        <Lock className={styles.lockIcon} />
      </motion.div>
    </div>
  );
};

export default TwoFactorArt;
