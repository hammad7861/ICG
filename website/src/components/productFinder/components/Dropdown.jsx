import React, { useState } from "react";
import styles from "./Dropdown.module.css";

export function Dropdown({ label, iconSrc }) {
  const [isOpen, setIsOpen] = useState(false); // State to manage dropdown open/close

  return (
    <div
      className={styles.dropdownContainer}
      role="combobox"
      aria-expanded={isOpen} // Dynamically set aria-expanded based on state
      aria-controls="dropdown-content" // Add aria-controls for accessibility
      tabIndex="0" // Make the container focusable
      onClick={() => setIsOpen(!isOpen)} // Toggle dropdown on click
    >
      <div className={styles.label}>{label}</div>
      <img
        loading="lazy"
        src={iconSrc}
        className={styles.dropdownIcon}
        alt={label ? `${label} icon` : "Dropdown icon"} // Provide a meaningful alt text
      />
      {isOpen && (
        <div id="dropdown-content" className={styles.dropdownContent}>
          {/* Add dropdown content here */}
        </div>
      )}
    </div>
  );
}
