"use client";

import { motion } from "framer-motion";
import ImagePlaceholder from "../../ImagePlaceholder/ImagePlaceholder";
import styles from "./PasskeysArt.module.css";
import Thumb from "@/assets/Components/Thumb";

const PasskeysArt = () => {
  return (
    <div className={styles.container}>
      {/* Animated White Backdrop */}
      <div className={styles.backdropWrapper}>
        <motion.div
          className={styles.backdropCircle}
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Expanding rings triggered by the press */}
      <motion.div
        className={styles.ring}
        animate={{
          scale: [0.8, 0.8, 0.8, 2.5, 2.5],
          opacity: [0, 0, 0.6, 0, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeOut",
          times: [0, 0.07, 0.08, 0.68, 1],
        }}
      />
      <motion.div
        className={styles.ring}
        animate={{
          scale: [0.8, 0.8, 0.8, 2.5, 2.5],
          opacity: [0, 0, 0.4, 0, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeOut",
          times: [0, 0.22, 0.23, 0.83, 1],
        }}
      />
      <motion.div
        className={styles.ring}
        animate={{
          scale: [0.8, 0.8, 0.8, 2.5, 2.5],
          opacity: [0, 0, 0.2, 0, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeOut",
          times: [0, 0.37, 0.38, 0.98, 1],
        }}
      />

      {/* Central Fingerprint Button */}
      <motion.div
        className={styles.fingerprintBox}
        animate={{
          scale: [1, 0.9, 0.9, 1, 1],
          boxShadow: [
            "0 10px 30px rgba(124, 58, 237, 0.3)",
            "0 2px 10px rgba(124, 58, 237, 0.1)",
            "0 2px 10px rgba(124, 58, 237, 0.1)",
            "0 15px 40px rgba(124, 58, 237, 0.6)",
            "0 10px 30px rgba(124, 58, 237, 0.3)",
          ],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          times: [0, 0.1, 0.5, 0.6, 1],
          ease: "easeInOut",
        }}
      >
        <Thumb className={styles.icon} />
      </motion.div>
    </div>
  );
};

export default PasskeysArt;
