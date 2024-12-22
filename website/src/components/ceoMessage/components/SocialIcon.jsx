import React from "react";
import styles from "../styles/SocialIcon.module.css";

export const SocialIcon = ({ icon, alt }) => (
  <div className={styles.socialIconWrapper}>
    <img loading="lazy" src={icon} alt={alt} className={styles.socialIcon} />
  </div>
);
