import React from "react";
import styles from "./Gallery.module.css";
import { GalleryImage } from "./GalleryImage";

const GalleryThumbnail = ({ src }) => {
  return (
    <div className={styles.thumbnailWrapper}>
      <GalleryImage src={src} className={styles.thumbnailImage} />
    </div>
  );
};

export default GalleryThumbnail;
