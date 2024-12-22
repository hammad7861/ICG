import React from "react";
import styles from "./ContactPage.module.css";

export default function ContactInfo() {
  return (
    <div className={styles.leftColumn}>
      <div className={styles.infoContainer}>
        <div className={styles.infoHeader}>
          <div className={styles.headerWrapper}>
            <h1 className={styles.infoTitle}>Contact Us</h1>
            <div className={styles.titleDivider} />
          </div>
          <h2 className={styles.mainTitle}>
            We'd Love To <span className={styles.highlight}>Hear Back</span>{" "}
            From You
          </h2>
          <p className={styles.infoDescription}>
            Need something cleared up? Here are our most frequently asked
            questions.
          </p>
        </div>

        <div className={styles.contactMethods}>
          <div className={styles.contactMethod}>
            <div className={styles.methodIcon}>
              <img src="./assets/Badge.png" alt="" className={styles.icon} />
            </div>
            <h3 className={styles.methodTitle}>Email</h3>
            <p className={styles.methodDescription}>
              Our friendly team is here to help.
            </p>
            <a
              href="mailto:info@icgchemicals.com"
              className={styles.methodContact}
            >
              info@icgchemicals.com
            </a>
          </div>

          <div className={styles.contactMethod}>
            <div className={styles.methodIcon}>
              <img
                src="./assets/Badge (1).png"
                alt=""
                className={styles.icon}
              />
            </div>
            <h3 className={styles.methodTitle}>Phone</h3>
            <p className={styles.methodDescription}>Mon-Fri from 8am to 5pm.</p>
            <a href="tel:+97148876111" className={styles.methodContact}>
              +971 4887 6111
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
