import React from "react";
import styles from "../styles/FooterColumn.module.css";

export const FooterColumn = ({ title, links }) => (
  <div className={styles.footerColumn}>
    <div className={styles.columnTitle}>{title}</div>
    <div className={styles.titleUnderline} />
    {links.map((link, index) => (
      <div key={index} className={styles.footerLink}>
        {link}
      </div>
    ))}
  </div>
);
