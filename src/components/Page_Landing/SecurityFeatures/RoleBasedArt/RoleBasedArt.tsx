"use client";

import { motion } from "framer-motion";
import ImagePlaceholder from "../../ImagePlaceholder/ImagePlaceholder";
import styles from "./RoleBasedArt.module.css";
import SecurityCheck from "@/assets/Components/SecurityCheck";
import { Check } from "lucide-react";
import User from "@/assets/Components/User";

const PILLS = [
  {
    label: "View",
    color: "#007A55",
    bg: "#ECFDF5",
    boxShadow:
      "0 1px 3px 0 rgba(0, 0, 0, 0.10), 0 1px 2px -1px rgba(0, 0, 0, 0.10)",
  },
  {
    label: "Approve",
    color: "#CA3500",
    bg: "#FFF7ED",
    boxShadow:
      "box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.10), 0 1px 2px -1px rgba(0, 0, 0, 0.10)",
  },
  {
    label: "Execute",
    color: "#783FE4",
    bg: "#F2ECFC",
    boxShadow:
      "box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.10), 0 1px 2px -1px rgba(0, 0, 0, 0.10)",
  },
];

const RoleBasedArt = () => {
  return (
    <div className={styles.container}>
      {/* Animated White Backdrop */}
      <div className={styles.backdropWrapper}>
        <motion.div
          className={styles.backdropCircle}
          animate={{ scale: [1, 1.05, 1], opacity: [0.8, 1, 0.8] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className={styles.circleGroup}>
        {/* User Circle (Background) */}
        <motion.div
          className={styles.userCircle}
          animate={{
            x: [40, 20, 20, 40],
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            times: [0, 0.15, 0.85, 1],
            ease: "easeOut",
          }}
        >
          <User className={styles.userIcon} />
          <motion.div
            className={styles.userCheck}
            animate={{ scale: [0, 1, 1, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              times: [0, 0.2, 0.8, 1],
              delay: 0.1,
            }}
          >
            <Check size={10} />
          </motion.div>
        </motion.div>

        {/* Shield Circle (Foreground) */}
        <motion.div
          className={styles.shieldCircle}
          animate={{
            y: [-20, 0, 0, -20],
            scale: [1.1, 1, 1, 1.1],
            opacity: [0, 1, 1, 0],
            boxShadow: [
              "0 4px 10px rgba(124, 58, 237, 0.1)",
              "0 10px 25px rgba(124, 58, 237, 0.4)",
              "0 10px 25px rgba(124, 58, 237, 0.4)",
              "0 4px 10px rgba(124, 58, 237, 0.1)",
            ],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            times: [0, 0.25, 0.8, 1],
            ease: "easeOut",
          }}
        >
          <SecurityCheck className={styles.shieldIcon} />
        </motion.div>
      </div>

      <div className={styles.pillsRow}>
        {PILLS.map((pill, i) => (
          <motion.div
            key={pill.label}
            className={styles.pill}
            style={{
              boxShadow: pill.boxShadow,
              color: pill.color,
              backgroundColor: pill.bg,
              border: `1px solid ${pill.color}40`,
            }}
            animate={{
              y: [15, 0, 0, 15],
              opacity: [0, 1, 1, 0],
              scale: [0.9, 1, 1, 0.9],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              times: [0, 0.1, 0.8, 1],
              delay: 0.35 + i * 0.1,
              ease: "easeOut",
            }}
          >
            {pill.label}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default RoleBasedArt;
