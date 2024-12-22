import React from "react";
import { SearchSection } from "./SearchSection";
import { IndustryFilter } from "./IndustryFilter";
import { SearchFilters } from "./SearchFilters";
import { ProductCard } from "./ProductCard";
import styles from "./ProductsFinder.module.css";

const products = [
  {
    id: 1,
    image:
      "https://cdn.builder.io/api/v1/image/assets/5b7572a66cb246d79e0c407d9ccc5b29/992aff619d5b7eb417a081867983afa7183834ae10f1df58cf8a55ef2b632773?apiKey=5b7572a66cb246d79e0c407d9ccc5b29&",
    title: "Omniquan AN 168",
    code: "31570-04-4",
  },
  {
    id: 2,
    image:
      "https://cdn.builder.io/api/v1/image/assets/5b7572a66cb246d79e0c407d9ccc5b29/262c1464aaa13f8e56be074f560c6c7f56f85e4012b6c179cb39432ed90d8346?apiKey=5b7572a66cb246d79e0c407d9ccc5b29&",
    title: "Omniquan AN 136",
    code: "181314‐48‐7",
  },
  {
    id: 3,
    image:
      "https://cdn.builder.io/api/v1/image/assets/5b7572a66cb246d79e0c407d9ccc5b29/41501c1b269ab1459933fc0cd7b47779275f1a3a8afcfd69a9dcc82eb69373a6?apiKey=5b7572a66cb246d79e0c407d9ccc5b29&",
    title: "Omniquan AN 245",
    code: "31570-04-4",
  },
  {
    id: 4,
    image:
      "https://cdn.builder.io/api/v1/image/assets/5b7572a66cb246d79e0c407d9ccc5b29/2141233ea261864850ca1a3de3b99b60a978f41ba24caa0263399a67f24a6714?apiKey=5b7572a66cb246d79e0c407d9ccc5b29&",
    title: "Omniquan AN 565",
    code: "31570-04-4",
  },
  {
    id: 5,
    image:
      "https://cdn.builder.io/api/v1/image/assets/5b7572a66cb246d79e0c407d9ccc5b29/f87dfdc107377db9ee585b6ad259ef4c2d57d3bbbfc65198555a83cc9a534d43?apiKey=5b7572a66cb246d79e0c407d9ccc5b29&",
    title: "Omniquan AN 168",
    code: "31570-04-4",
  },
  {
    id: 6,
    image:
      "https://cdn.builder.io/api/v1/image/assets/5b7572a66cb246d79e0c407d9ccc5b29/9e6cc137eeceaea0c60e90b0a88f4b968dd75d4b1b7d2e37be2534431ba32c4a?apiKey=5b7572a66cb246d79e0c407d9ccc5b29&",
    title: "Omniquan AN 168",
    code: "31570-04-4",
  },
  {
    id: 7,
    image:
      "https://cdn.builder.io/api/v1/image/assets/5b7572a66cb246d79e0c407d9ccc5b29/b35fd3afbc3409fe62ccffe2bfe84ba286ac1ba50557491b33c29269bdca71c5?apiKey=5b7572a66cb246d79e0c407d9ccc5b29&",
    title: "Omniquan AN 168",
    code: "31570-04-4",
  },
  {
    id: 8,
    image:
      "https://cdn.builder.io/api/v1/image/assets/5b7572a66cb246d79e0c407d9ccc5b29/0b1c7742b0175f81131dab30225bf77e50c1a2fa891d792d44a1ec182cd055bf?apiKey=5b7572a66cb246d79e0c407d9ccc5b29&",
    title: "Omniquan AN 168",
    code: "31570-04-4",
  },
];

export const ProductsFinder = () => {
  return (
    <div className={styles.productFinder}>
      <div className={styles.mainContent}>
        <SearchSection />
        <IndustryFilter />
        <SearchFilters />
        <div className={styles.productGrid}>
          {products.map((product) => (
            <ProductCard
              key={product.id}
              image={product.image}
              title={product.title}
              code={product.code}
            />
          ))}
        </div>
        <nav className={styles.pagination} aria-label="Pagination">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/5b7572a66cb246d79e0c407d9ccc5b29/16dca6f26aca7a6febab70d71fe698338b2b5ad135c6c68b974f9f98b7bb19a9?apiKey=5b7572a66cb246d79e0c407d9ccc5b29&"
            alt="Previous page"
            className={styles.paginationArrow}
            role="button"
            tabIndex="0"
          />
          <div className={styles.pageNumbers}>1 2 3 4</div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/5b7572a66cb246d79e0c407d9ccc5b29/6c86162b24f87dff957c620a8edb787678be7523d8f235e0842550ce34b5366e?apiKey=5b7572a66cb246d79e0c407d9ccc5b29&"
            alt="Next page"
            className={styles.paginationArrow}
            role="button"
            tabIndex="0"
          />
        </nav>
      </div>
    </div>
  );
};
