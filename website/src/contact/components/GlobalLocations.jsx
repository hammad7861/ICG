import React from "react";
import styles from "./ContactPage.module.css";

export default function GlobalLocations() {
  return (
    <section className={styles.locationsWrapper}>
      <img
        src="./assets/Pexels Photo by Marcin Jozwiak.png"
        alt=""
        className={styles.backgroundMap}
      />
      <div className={styles.locationsContainer}>
        <div className={styles.locationGroups}>
          <div className={styles.locationGroup}>
            <h3 className={styles.groupTitle}>Local Presences</h3>
            <ul className={styles.locationList}>
              <li className={styles.location}>Saudi Arabia</li>
              <li className={styles.location}>Pakistan</li>
              <li className={styles.location}>China</li>
            </ul>
          </div>

          <div className={styles.locationGroup}>
            <h3 className={styles.groupTitle}>Active Regions</h3>
            <ul className={styles.locationList}>
              <li className={styles.location}>UAE</li>
              <li className={styles.location}>Saudi Arabia</li>
              <li className={styles.location}>India</li>
              <li className={styles.location}>Pakistan</li>
            </ul>
          </div>

          <div className={styles.locationGroup}>
            <br />
            <ul className={styles.locationList}>
              <li className={styles.location}>Jordan</li>
              <li className={styles.location}>Oman</li>
              <li className={styles.location}>Qatar</li>
              <li className={styles.location}>Bahrain</li>
            </ul>
          </div>
          <div className={styles.locationGroup}>
            <br />
            <ul className={styles.locationList}>
              <li className={styles.location}>Egypt</li>
              <li className={styles.location}>Kuwait</li>
              <li className={styles.location}>Lebanon</li>
              <li className={styles.location}>Africa</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
