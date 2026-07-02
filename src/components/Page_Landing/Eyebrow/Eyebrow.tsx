import React from "react";
import styles from "./Eyebrow.module.css";

const Eyebrow = ({
  children,
  invert,
}: {
  children: React.ReactNode;
  invert?: boolean;
}) => {
  return (
    <span className={`${styles.eyebrow} ${invert && styles.invert}`}>
      {children}
    </span>
  );
};

export default Eyebrow;
