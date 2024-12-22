import React from "react";
import styles from "./Footer.module.css";

export const FooterColumn = ({ title, items }) => {
  return (
    <div className={styles.column}>
      <div className={styles.columnContent}>
        <div className={styles.columnTitle}>{title}</div>
        <div className={styles.columnDivider} />
        {items.map((item, index) => (
          <a
            key={index}
            href={item.href}
            className={styles.columnItem}
            target={item.external ? "_blank" : undefined}
            rel={item.external ? "noopener noreferrer" : undefined}
          >
            {item.text}
          </a>
        ))}
      </div>
    </div>
  );
};
