import React from "react";
import styles from "../styles/StatCard.module.css";

export const StatCard = ({ value, label }) => {
  return (
    <div className={styles.statCardContainer}>
      <div className={styles.statValue}>{value}</div>
      <div className={styles.statLabel}>{label}</div>
    </div>
  );
};
