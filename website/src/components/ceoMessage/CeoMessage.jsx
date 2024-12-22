import React from "react";
import styles from "./styles/CeoMessage.module.css";

export const CeoMessage = () => {
  return (
    <div className={styles.pageContainer}>
      <div className={styles.contentWrapper}>
        <div className={styles.headerSection}>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/5b7572a66cb246d79e0c407d9ccc5b29/3c5a48446f8375900b78d914301f74026d4cadc7064799b9e0bf9230dd4fe747?apiKey=5b7572a66cb246d79e0c407d9ccc5b29&"
            alt="ICG Chemicals Header"
            className={styles.headerImage}
          />
        </div>
        <h1 className={styles.pageTitle}>CEO Message</h1>
      </div>

      <div className={styles.messageSection}>
        <div className={styles.messageContent}>
          <div className={styles.messageColumn}>
            <div className={styles.quoteWrapper}>
              <span className={styles.quoteSymbol}>"</span>
              <p className={styles.messageText}>
                At ICG Specialty Chemicals, my vision is to lead in the
                development and delivery of high-quality chemical solutions that
                meet the diverse needs of industries across the globe. My
                commitment to excellence, innovation, and sustainability drives
                us to continually evolve, ensuring that we provide safe,
                effective, and eco-friendly solutions that empower our clients
                to excel in their respective fields.
                <br />
                <br />
                As we move forward, we are dedicated to not only advancing our
                product offerings but also fostering a collaborative environment
                that promotes growth, inclusivity, and social responsibility.
                Together, with our customers and partners, we are shaping a
                future where chemistry contributes positively to a sustainable
                world.
              </p>
            </div>
          </div>
          <div className={styles.profileColumn}>
            <div className={styles.profileContent}>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/5b7572a66cb246d79e0c407d9ccc5b29/3f0429fb6d82f06e0ecc275eba7c077862fed9d0eacca140fc661aa314709149?apiKey=5b7572a66cb246d79e0c407d9ccc5b29&"
                alt="Mr. Ishfaq Ahmed - CEO"
                className={styles.profileImage}
              />
              <h2 className={styles.ceoName}>Mr. Ishfaq Ahmed</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
