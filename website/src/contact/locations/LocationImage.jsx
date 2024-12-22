import React from "react";
import styles from "./LocationImage.module.css";

export const LocationImage = ({ src, alt, className }) => (
  <img
    loading="lazy"
    src={src}
    alt={alt}
    className={className}
    aria-hidden={alt ? "false" : "true"}
  />
);
