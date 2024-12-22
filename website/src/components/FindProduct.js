import React, { useState } from "react";
import "./FindProduct.css";

const FindProduct = () => {
  const [industry, setIndustry] = useState("");
  const [solution, setSolution] = useState("");

  const handleSearch = () => {
    console.log("Searching for products in:", industry, solution);
  };

  const handleViewAll = () => {
    console.log("View all products");
  };

  return (
    <div className="find-product-container">
      <div className="find-product-header">Find a Product</div>

      <div className="dropdown-container">
        <div className="dropdown">
          <label>Industries</label>
          <div
            className="dropdown-select"
            onClick={() => setIndustry("Selected Industry")}
          >
            Select Industry
            <span className="dropdown-icon"></span>
          </div>
        </div>

        <div className="dropdown">
          <label>Chemical Solutions</label>
          <div
            className="dropdown-select"
            onClick={() => setSolution("Selected Solution")}
          >
            Select Solutions
            <span className="dropdown-icon"></span>
          </div>
        </div>
      </div>

      <div className="search-container">
        <div className="input-field">
          <div className="input-placeholder">
            Search for products, grades or codes
          </div>
        </div>
        <button className="search-button" onClick={handleSearch}>
          Search
        </button>
      </div>

      <div className="other-resources">
        Looking for other resources? Select an item below.
      </div>

      <div className="resource-links">
        <div className="resource-item">Safety Data Sheets</div>
        <div className="resource-item">Technical Data Sheets</div>
        <div className="resource-item">Product Brochures</div>
      </div>

      <div className="view-all-products" onClick={handleViewAll}>
        <div className="view-all-text">View All Products</div>
        <div className="view-all-arrow">
          <span className="arrow-icon"></span>
        </div>
      </div>
    </div>
  );
};

export default FindProduct;
