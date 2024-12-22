import React from "react";
import PropTypes from "prop-types";
import styles from "./SocialIcon.module.css"; // Assuming you have a CSS module for styling

export const SocialIcon = ({ src, alt, href }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.iconLink}
    >
      <img src={src} alt={alt} className={styles.iconImage} />
    </a>
  );
};

SocialIcon.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
};
