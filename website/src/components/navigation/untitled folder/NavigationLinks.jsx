import React from "react";
import styles from "./NavigationBar.module.css";

const marketLinks = [
  { text: "Agriculture, feed and food" },
  { text: "Building and construction" },
  { text: "Personal and Home Care" },
  { text: "Adhesive and Sealants" },
];

export const NavigationLinks = () => (
  <nav className={styles.marketLinksContainer}>
    {marketLinks.map((link, index) => (
      <a href="#" key={index} className={styles.marketLink} tabIndex="0">
        {link.text}
      </a>
    ))}
  </nav>
);
