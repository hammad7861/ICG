import React from "react";
import styles from "./Timeline.module.css";
import { TimelineDot } from "./TimelineDot";

export const TimelineEvent = ({
  year,
  description,
  icon,
  position,
  isFirst,
  isLast,
}) => (
  <article
    className={`${styles.timelineEvent} ${styles[position]}`}
    role="article"
    aria-label={`Milestone from ${year}`}
  >
    <div className={styles.eventContent}>
      <div className={styles.eventText}>
        <time className={styles.year} dateTime={year}>
          {year}
        </time>
        <p className={styles.description}>{description}</p>
      </div>
      <div className={styles.iconContainer} role="img" aria-hidden="true">
        <img src={icon} alt="" className={styles.icon} />
      </div>
    </div>
    <div className={styles.timelineConnector}>
      <TimelineDot />
      {!isLast && <div className={styles.connector} aria-hidden="true" />}
    </div>
  </article>
);
