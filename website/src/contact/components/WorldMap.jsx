import React from "react";
import styles from "./ContactPage.module.css";

export default function WorldMap() {
  return (
    <section className={styles.worldMapSection}>
      {/* <h2 className={styles.mapTitle}>Our Locations</h2> */}
      <div className={styles.mapContainer}>
        <img
          src="./assets/World Map.svg"
          alt="World map showing our office locations"
          className={styles.worldMapImage}
        />
        <div className={styles.mapLegend}>
          <img
            src="/icons/legend-icon.svg"
            alt=""
            className={styles.legendIcon}
          />
          <div className={styles.legendItem}>
            <img
              src="/icons/office-icon.svg"
              alt=""
              className={styles.officeIcon}
            />
            <div className={styles.officeLabel}>
              <img
                src="/icons/label-icon.svg"
                alt=""
                className={styles.labelIcon}
              />
              <span className={styles.labelText}>Main Office</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
