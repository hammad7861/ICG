import React from "react";
import styles from "./JobSection.module.css";

export function JobSection() {
  return (
    <section className={styles.joinSection}>
      <h2 className={styles.joinTitle}>
        Want to join Team{" "}
        <span className={styles.titleHighlight}>ICG Chemicals?</span>
      </h2>
      <p className={styles.joinSubtitle}>
        Check out our open form below and fill the application form
        <br />
        by clicking on it
      </p>
      <div className={styles.jobCard}>
        <div className={styles.jobContent}>
          <div className={styles.jobInfo}>
            <h3 className={styles.jobTitle}>Lab Technicians</h3>
            <p className={styles.jobDescription}>
              We're looking for a mid-level Lab Technicians to join our team.
            </p>
          </div>
          <button className={styles.viewButton} tabIndex="0">
            View
          </button>
        </div>
        <div className={styles.tagContainer}>
          <span className={styles.tag}>Hybrid</span>
          <span className={styles.tagSmall}>Part Time</span>
        </div>
      </div>
    </section>
  );
}
