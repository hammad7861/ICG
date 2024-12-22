import React from "react";
import styles from "./Header.module.css";

export const SocialIcon = ({ src, alt }) => (
  <img loading="lazy" src={src} alt={alt} className={styles.socialIcon} />
);
