import React, { useState } from "react";
import styles from "./Navigation.module.css";

export const NavigationItem = ({
  text,
  hasDropdown = false,
  dropdownItems = [],
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={styles.navigationItem}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <div className={styles.navigationContent}>
        <div className={styles.navigationText}>{text}</div>
        {hasDropdown && (
          <img
            loading="lazy"
            src="/icons/dropdown-arrow.svg"
            className={`${styles.dropdownIcon} ${isOpen ? styles.dropdownIconOpen : ""}`}
            alt=""
          />
        )}
      </div>
      {isOpen && hasDropdown && (
        <div className={styles.dropdownMenu} role="menu">
          {dropdownItems.map((item, index) => (
            <button
              key={index}
              className={styles.dropdownItem}
              role="menuitem"
              onClick={item.onClick}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
