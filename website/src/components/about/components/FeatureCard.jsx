import React from "react";
import styles from "../styles/FeatureCard.module.css";

export const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className={styles.featureCardContainer}>
      <img
        loading="lazy"
        src={icon}
        alt={`${title} feature icon`}
        className={styles.featureIcon}
      />
      <div className={styles.featureContent}>
        <div className={styles.featureTitle}>{title}</div>
        <div className={styles.featureDescription}>{description}</div>
      </div>
    </div>
  );
};
