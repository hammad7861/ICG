import React from "react";
import styles from "./SearchInput.module.css";

export function SearchInput() {
  return (
    <form className={styles.searchContainer}>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/427be3ae8b5825e89a65eb4e74bff3d1d358d159c0e5389b68db3d95cdbdd290?placeholderIfAbsent=true&apiKey=5b7572a66cb246d79e0c407d9ccc5b29"
        className={styles.searchIcon}
        alt="Search icon"
      />
      <label htmlFor="productSearch" className="visually-hidden">
        Search for products
      </label>
      <input
        id="productSearch"
        type="search"
        className={styles.searchText}
        placeholder="Search for products, grades or codes"
        aria-label="Search for products, grades or codes"
      />
      <button type="submit" className={styles.searchButton}>
        Search
      </button>
    </form>
  );
}
