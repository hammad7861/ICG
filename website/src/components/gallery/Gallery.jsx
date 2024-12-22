import React from "react";
import { GalleryImage } from "./GalleryImage";
import { galleryImages } from "./GalleryData";
import styles from "./Gallery.module.css";

export const Gallery = () => {
  return (
    <div className={styles.galleryContainer}>
      <div className={styles.header}>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/5b7572a66cb246d79e0c407d9ccc5b29/e8fcdc3e3b72114cdc9679b1249b7061cf95bd0f68e12e1c193dd86502ae8835?apiKey=5b7572a66cb246d79e0c407d9ccc5b29&"
          alt="ICG Chemical company overview"
          className={styles.headerImage}
        />
        <h1 className={styles.title}>Life at ICG Chemical</h1>
        <div className={styles.decorativeBox} />
      </div>

      <section className={styles.gallerySection}>
        <div className={styles.galleryHeader}>
          <span className={styles.label}>Gallery</span>
          <h2 className={styles.subtitle}>
            Explore the other side of{" "}
            <span className={styles.highlight}>ICG</span>
          </h2>
        </div>

        <div className={styles.imageGrid}>
          <div className={styles.topRow}>
            <GalleryImage
              src={galleryImages[0].src}
              alt={galleryImages[0].alt}
              className={styles.largeImage}
            />
          </div>

          <div className={styles.middleRow}>
            <GalleryImage
              src={galleryImages[1].src}
              alt={galleryImages[1].alt}
              className={styles.mediumImage}
            />
            <GalleryImage
              src={galleryImages[2].src}
              alt={galleryImages[2].alt}
              className={styles.tallImage}
            />
            <div className={styles.stackedImages}>
              <GalleryImage
                src={galleryImages[3].src}
                alt={galleryImages[3].alt}
                className={styles.smallImage}
              />
              <GalleryImage
                src={galleryImages[4].src}
                alt={galleryImages[4].alt}
                className={styles.smallImage}
              />
            </div>
          </div>

          <div className={styles.bottomRow}>
            <GalleryImage
              src={galleryImages[5].src}
              alt={galleryImages[5].alt}
              className={styles.smallImage}
            />
            <GalleryImage
              src={galleryImages[6].src}
              alt={galleryImages[6].alt}
              className={styles.smallImage}
            />
            <GalleryImage
              src={galleryImages[7].src}
              alt={galleryImages[7].alt}
              className={styles.wideImage}
            />
          </div>
        </div>

        <button className={styles.viewAllButton} tabIndex="0">
          See all pictures
        </button>
      </section>
    </div>
  );
};
