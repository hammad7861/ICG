import React, { useState } from "react";
import styles from "./ProductsFinder.module.css";

export const SearchFilters = () => {
  const [isOpen, setIsOpen] = useState(false); // State to manage dropdown open/close

  return (
    <div className={styles.filterContainer}>
      <div className={styles.filterLabel}>Filter</div>

      {/* A - Z Dropdown */}
      <div
        className={styles.filterDropdown}
        role="combobox"
        aria-expanded={isOpen} // Dynamically set aria-expanded
        aria-controls="dropdown-content" // Add aria-controls for accessibility
        tabIndex="0" // Make the container focusable
        onClick={() => setIsOpen(!isOpen)} // Toggle dropdown on click
      >
        <div>A - Z</div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/5b7572a66cb246d79e0c407d9ccc5b29/c04bf0b10d4dc0929de6b3d8ead05396c27c56d9007eb4100cc8be6ce6218a9d?apiKey=5b7572a66cb246d79e0c407d9ccc5b29&"
          alt="Dropdown arrow" // Provide a meaningful alt text
          className={styles.dropdownArrow}
        />
      </div>

      {/* Z - A Option */}
      <div
        className={styles.filterOption}
        role="button"
        tabIndex="0" // Make the container focusable
        onClick={() => console.log("Z - A clicked")} // Add click handler
      >
        Z - A
      </div>

      {/* Market Option */}
      <div
        className={styles.filterOption}
        role="button"
        tabIndex="0" // Make the container focusable
        onClick={() => console.log("Market clicked")} // Add click handler
      >
        Market
      </div>

      {/* Region Dropdown */}
      <div
        className={styles.filterDropdown}
        role="combobox"
        aria-expanded={isOpen} // Dynamically set aria-expanded
        aria-controls="dropdown-content" // Add aria-controls for accessibility
        tabIndex="0" // Make the container focusable
        onClick={() => setIsOpen(!isOpen)} // Toggle dropdown on click
      >
        <div>Region</div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/5b7572a66cb246d79e0c407d9ccc5b29/049475aeea3316b1da76b108bec9723f7be413187dc83c9f64fa448f7c2a6029?apiKey=5b7572a66cb246d79e0c407d9ccc5b29&"
          alt="Dropdown arrow" // Provide a meaningful alt text
          className={styles.dropdownArrow}
        />
      </div>

      {/* Max. Price Dropdown */}
      <div
        className={styles.filterDropdown}
        role="combobox"
        aria-expanded={isOpen} // Dynamically set aria-expanded
        aria-controls="dropdown-content" // Add aria-controls for accessibility
        tabIndex="0" // Make the container focusable
        onClick={() => setIsOpen(!isOpen)} // Toggle dropdown on click
      >
        <div>Max. Price</div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/5b7572a66cb246d79e0c407d9ccc5b29/7ec4687d93e94f336e717e1994d6c350de44fc80557917b6aaa8d703f23061c7?apiKey=5b7572a66cb246d79e0c407d9ccc5b29&"
          alt="Dropdown arrow" // Provide a meaningful alt text
          className={styles.dropdownArrow}
        />
      </div>
    </div>
  );
};
