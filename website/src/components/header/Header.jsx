import React from "react";
import { SocialIcon } from "./SocialIcon";
import styles from "./Header.module.css";

const socialIcons = [
  {
    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/99121f0d8e51a9fad5ff6e3accc8c066b3bcb8214365b3f704791000db3e13c0?placeholderIfAbsent=true&apiKey=5b7572a66cb246d79e0c407d9ccc5b29",
    alt: "Social media icon",
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/6f7fa2ae5c4a14e9f1a51adbd38f8c1ec482f931b42243c480e37b55f8a8f68c?placeholderIfAbsent=true&apiKey=5b7572a66cb246d79e0c407d9ccc5b29",
    alt: "Social media icon",
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/a756c9afdcc67e951f8bd15e35e26d626a28caeeb30252c76f501d36e03e4c52?placeholderIfAbsent=true&apiKey=5b7572a66cb246d79e0c407d9ccc5b29",
    alt: "Social media icon",
  },
];

const navItems = ["About ICG Chemicals", "Management", "Our History"];

export const Header = () => {
  return (
    <header className={styles.headerContainer}>
      <nav className={styles.navigationBar}>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/c3d69e27cf22405081403d19e4f6c3de3abe82e5b4dff6e5a6f3265249ebaace?placeholderIfAbsent=true&apiKey=5b7572a66cb246d79e0c407d9ccc5b29"
          alt="Company logo"
          className={styles.logo}
        />
        <div className={styles.navActions}>
          <div className={styles.socialIcons}>
            {socialIcons.map((icon, index) => (
              <SocialIcon key={index} {...icon} />
            ))}
          </div>
          <div className={styles.searchContainer}>
            <button className={styles.searchToggle} aria-label="Toggle search">
              <div className={styles.searchIcon} />
              <span className={styles.srOnly}>Search</span>
            </button>
            <button className={styles.stockButton}>Available stocks</button>
          </div>
        </div>
      </nav>
      <div className={styles.contentSection}>
        <div className={styles.contentGrid}>
          <div className={styles.mainContent}>
            <div className={styles.aboutSection}>
              <h1 className={styles.sectionTitle}>Who we are</h1>
              <p className={styles.description}>
                ICG Specialty Chemicals FZCO is a leading provider of specialty
                chemicals, recognized for our commitment to quality and
                innovation. With our globally trusted brand, Omnistab® , and
                our own registered trademark, Omniquan® , we serve a wide range
                of industries, including Masterbatch, Plastics, Resins,
                Compounding, Inks, and Coatings across the Middle East and Asia.
              </p>
            </div>
          </div>
          <nav className={styles.sideNav}>
            <div className={styles.navLinks}>
              {navItems.map((item, index) => (
                <button key={index} className={styles.navLink}>
                  {item}
                </button>
              ))}
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};
