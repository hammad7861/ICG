import React from "react";
import styles from "./ProductsFinder.module.css";

export const ProductCard = ({ image, title, code }) => {
  return (
    <div className={styles.productCard}>
      <img
        loading="lazy"
        src={image}
        alt={`Product ${title}`}
        className={styles.productImage}
      />
      <div className={styles.productTitle}>{title}</div>
      <div className={styles.productCode}>{code}</div>
    </div>
  );
};
