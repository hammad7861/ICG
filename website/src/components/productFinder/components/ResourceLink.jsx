import React from "react";
import styles from "./ResourceLink.module.css";

export function ResourceLink({ text, showDivider }) {
  return (
    <div className={styles.resourceLinkContainer}>
      <div className={styles.resourceLink}>{text}</div>
      {showDivider && <div className={styles.divider} />}
    </div>
  );
}
