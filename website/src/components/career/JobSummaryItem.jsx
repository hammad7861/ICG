import React from "react";
import styles from "./Career.module.css";

export const JobSummaryItem = ({ icon, label, value, additionalValue }) => (
  <div className={styles.summaryItem}>
    <img loading="lazy" src={icon} alt="" className={styles.summaryIcon} />
    <div>
      <span className={styles.summaryLabel}>{label}</span>
      <br />
      <span className={styles.summaryValue}>{value}</span>
      {additionalValue && (
        <>
          <br />
          <span className={styles.summaryValue}>{additionalValue}</span>
        </>
      )}
    </div>
  </div>
);
