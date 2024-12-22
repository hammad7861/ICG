import React, { useState } from "react";
import styles from "./ProductsFinder.module.css";

const industries = [
  { id: 1, name: "Automotive" },
  { id: 2, name: "Printing and Packaging" },
  { id: 3, name: "Electronics" },
  { id: 4, name: "Agriculture, Feed, and Food" },
  { id: 5, name: "Adhesives and Sealants" },
  { id: 6, name: "Personal and Home Care" },
  { id: 7, name: "Paints and Coating" },
  { id: 8, name: "Medical and Pharmaceutical" },
  { id: 9, name: "Building and Construction" },
];

const categories = [
  "Antioxidents",
  "Masterbatches",
  "Antiblocks",
  "HALS",
  "UV-Absorbers",
  "Optical Brightners",
  "PigmentsAndDyes",
  "Plasticizers",
  "Flame Retardants",
  "Polymers and Resins",
  "Nucleating Agents",
  "Polymer Processing Additives",
];

export const IndustryFilter = () => {
  const [viewMode, setViewMode] = useState("industry"); // 'industry' or 'categories'
  const [selectedIndustry, setSelectedIndustry] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleIndustryFilter = (industry) => {
    setSelectedIndustry(industry);
    console.log(`Selected Industry: ${industry.name}`);
  };

  const handleCategoryFilter = (category) => {
    setSelectedCategory(category);
    console.log(`Selected Category: ${category}`);
  };

  return (
    <div className={styles.filterContainer1}>
      {/* Toggle Buttons */}
      <div className={styles.filterButtons}>
        <button
          className={`${styles.tabButton} ${viewMode === "categories" ? styles.active : ""}`}
          onClick={() => setViewMode("categories")}
        >
          Search by Categories
        </button>
        <button
          className={`${styles.tabButton} ${viewMode === "industry" ? styles.active : ""}`}
          onClick={() => setViewMode("industry")}
        >
          Search by Industry
        </button>
      </div>

      {/* Filter Options Below */}
      <div className={styles.filterOptions}>
        {viewMode === "categories" && (
          <div className={styles.categoryOptions}>
            {categories.map((category, index) => (
              <label key={index} className={styles.filterLabel}>
                <input
                  type="radio"
                  checked={selectedCategory === category}
                  onChange={() =>
                    handleCategoryFilter(
                      selectedCategory === category ? "" : category,
                    )
                  }
                />
                {category}
              </label>
            ))}
          </div>
        )}

        {viewMode === "industry" && (
          <div className={styles.industryOptions}>
            {industries.map((industry) => (
              <label key={industry.id} className={styles.filterLabel}>
                <input
                  type="radio"
                  name="industry"
                  checked={selectedIndustry?.id === industry.id}
                  onChange={() => handleIndustryFilter(industry)}
                />
                {industry.name}
              </label>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
