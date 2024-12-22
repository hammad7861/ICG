import React from "react";
import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";
import GlobalLocations from "./GlobalLocations";
import WorldMap from "./WorldMap";
import styles from "./ContactPage.module.css";

export default function ContactPage() {
  return (
    <div className={styles.contactWrapper}>
      <main className={styles.mainContent}>
        <div className={styles.contentContainer}>
          <div className={styles.twoColumnLayout}>
            <ContactInfo />
            <ContactForm />
          </div>
        </div>
        <h2 className={styles.mapTitle}>Global Presence</h2>
      </main>
      <GlobalLocations />
      <WorldMap />
    </div>
  );
}
