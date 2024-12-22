import React from "react";
import styles from "./CareerHero.module.css";

export function CareerHero() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.container}>
        <div className={styles.heroWrapper}>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/5b7572a66cb246d79e0c407d9ccc5b29/6b96931f5d36cf9ad5042680b7903dd0f862def5f3bde21d2084a6fa10b9972e?apiKey=5b7572a66cb246d79e0c407d9ccc5b29&"
            className={styles.heroImage}
            alt="ICG Career background"
          />
          <h1 className={styles.heroTitle}>ICG Career</h1>
          <div className={styles.decorativeBox}>
            <div className={styles.innerBox} />
          </div>
        </div>
        <h2 className={styles.sectionTitle}>
          Our <span className={styles.titleHighlight}>Career</span>
        </h2>
        <p className={styles.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
          velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
          occaecat cupidatat non proident, sunt in culpa qui officia deserunt
          mollit anim id est laborum.
        </p>
      </div>
    </section>
  );
}
