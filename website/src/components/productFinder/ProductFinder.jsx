import React from "react";
import styles from "./ProductFinder.module.css";
import { SearchInput } from "./components/SearchInput";
import { Dropdown } from "./components/Dropdown";
import { ResourceLink } from "./components/ResourceLink";

const resources = [
  { text: "Safety Data Sheets", showDivider: true },
  { text: "Technical Data Sheets", showDivider: true },
  { text: "Product Brochures", showDivider: false },
];

export function ProductFinder() {
  return (
    <div className={styles.Maincontainer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.header}>
            <div className={styles.industryLabel}>Industries</div>
            <div className={styles.titleGroup}>
              <h2 className={styles.title}>Find a Product</h2>
              <div className={styles.applicationLabel}>Chemical Solutions</div>
            </div>
          </div>

          <div className={styles.dropdownGroup}>
            <Dropdown
              label="Select Industry"
              iconSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/eac7032f45886726047e4bcdd3b24364393585308e83b80b6c600e928595e1b1?placeholderIfAbsent=true&apiKey=5b7572a66cb246d79e0c407d9ccc5b29"
            />
            <Dropdown
              label="Select Solutions"
              iconSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/4865fbc39f70b32036a66683fcc34ada25603e7aee34cb46f5060c4880d471c1?placeholderIfAbsent=true&apiKey=5b7572a66cb246d79e0c407d9ccc5b29"
            />
          </div>

          <div className={styles.searchGroup}>
            <SearchInput />
          </div>

          <div className={styles.resourcesText}>
            Looking for other resources? Select an item below.
          </div>

          <div className={styles.resourceLinks}>
            {resources.map((resource, index) => (
              <ResourceLink
                key={index}
                text={resource.text}
                showDivider={resource.showDivider}
              />
            ))}
          </div>

          <a href="/" className={styles.viewAllLink}>
            <span className={styles.viewAllText}>View All Products</span>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/a08a7ee56969cc6d6aa0e64e5da4426b07cec97be87737dc25a56a2dfab419da?placeholderIfAbsent=true&apiKey=5b7572a66cb246d79e0c407d9ccc5b29"
              className={styles.viewAllIcon}
              alt="View all products"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
