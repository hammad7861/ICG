import React from "react";
import styles from "./Career.module.css";

export const BulletPoint = ({ text }) => (
  <div className={styles.bulletContainer}>
    <div className={styles.bulletDot} />
    <div className={styles.bulletText}>{text}</div>
  </div>
);
