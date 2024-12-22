import React from "react";
import styles from "./ProductsFinder.module.css";

export const SearchSection = () => {
  return (
    <div className={styles.searchContainer}>
      <div className={styles.searchContent}>
        <h1 className={styles.searchTitle}>What are you looking for?</h1>
        <form className={styles.searchForm} role="search">
          <label htmlFor="searchInput" className={styles.visuallyHidden}>
            Search products
          </label>
          <div className={styles.searchField}>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/5b7572a66cb246d79e0c407d9ccc5b29/11b6d3c7b14fc8330c24cdee9e76f9f4c5df0513b03d4ca3ef705b136fa5fedd?apiKey=5b7572a66cb246d79e0c407d9ccc5b29&"
              alt=""
              className={styles.searchIcon}
            />
            <input
              id="searchInput"
              type="search"
              className={styles.searchInput}
              placeholder="What are you search for?"
              aria-label="Search products"
            />
          </div>
        </form>
      </div>
    </div>
  );
};
