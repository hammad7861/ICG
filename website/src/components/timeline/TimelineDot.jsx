import React from "react";
import styles from "./Timeline.module.css";

export const TimelineDot = () => (
  <div className={styles.timelineDot} aria-hidden="true">
    <div className={styles.outerCircle}>
      <div className={styles.innerCircle}>
        <div className={styles.centerDot} />
      </div>
    </div>
  </div>
);
