import React from "react";
import styles from "../styles/CoreValue.module.css";

export const CoreValue = ({ icon, title, description }) => {
  return (
    <div className={styles.coreValueContainer}>
      <img
        loading="lazy"
        src={icon}
        alt={`${title} icon`}
        className={styles.coreValueIcon}
      />
      <div className={styles.coreValueTitle}>{title}</div>
      <div className={styles.coreValueDescription}>{description}</div>
    </div>
  );
};
