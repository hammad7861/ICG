import React from "react";
import styles from "./QuoteForm.module.css"; // Importing the CSS module

export function QuoteForm() {
  return (
    <div className={styles.outerContainer}>
      <div className={styles.quoteContainer}>
        {/* Left: Map Section */}
        <div className={styles.mapSection}>
          <div className={styles.mapWrapper}>
            <img
              src="./assets/World Map.svg"
              alt="Map"
              className={styles.mapImage}
            />
            <div className={styles.pin} style={{ top: "50%", left: "30%" }}>
              Main Office
            </div>
            <div className={styles.pin} style={{ top: "40%", left: "70%" }}>
              Branch 1
            </div>
            <div className={styles.pin} style={{ top: "60%", left: "50%" }}>
              Branch 2
            </div>
          </div>
        </div>

        {/* Right: Request a Quote Form */}
        <div className={styles.formSection}>
          <h2 className={styles.formTitle}>
            Request a quote for available stock
          </h2>
          <p className={styles.formSubtitle}>
            You will receive your quote within 24 hours.
          </p>
          <form className={styles.form}>
            <input
              className={styles.input}
              type="text"
              placeholder="Name*"
              required
            />
            <input
              className={styles.input}
              type="email"
              placeholder="E-mail*"
              required
            />
            <input
              className={styles.input}
              type="text"
              placeholder="Required volume (kg)"
            />
            <input
              className={styles.input}
              type="text"
              placeholder="City of delivery*"
            />
            <textarea
              className={styles.textarea}
              placeholder="Add here your special product requirements, packaging, and volume per product."
            ></textarea>
            <input
              className={styles.input}
              type="text"
              placeholder="Control Question 12+1=?"
            />
            <button className={styles.submitButton} type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
