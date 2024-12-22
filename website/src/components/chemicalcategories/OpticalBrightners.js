import React, { useEffect, useState } from "react";
import axios from "axios";
import "./OpticalBrightners.css";

const OpticalBrightners = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("/api/opticalbrightners")
      .then((response) => setProducts(response.data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  return (
    <div className="optical-brightners-container">
      <div className="image-header">
        <img
          src="./assets/opti.png"
          alt="Optical Brighteners"
          className="header-image"
        />
      </div>
      <div className="header">
        <h1>CATEGORY 5</h1>
        <h2>Optical Brighteners (OB)</h2>
        <p className="intro-text">
          Optical brighteners, also known as optical brightening agents (OBAs)
          are specialized chemical compounds designed to enhance the luminance
          and visual appeal of materials. By absorbing ultraviolet light and
          re-emitting it as visible blue light, these agents create a perception
          of increased whiteness and brightness, transforming the aesthetics of
          various products.
        </p>
      </div>

      <div className="types-section">
        <h2>Key Benefits</h2>
        <ul>
          <li>
            Enhanced Aesthetic Appeal: Optical brighteners significantly improve
            the visual quality of products, imparting a vibrant and pristine
            appearance.
          </li>
          <li>
            Value Addition: Products treated with OBAs often enjoy higher market
            valuation due to their enhanced aesthetics.
          </li>
          <li>
            Versatility Across Industries: Their applicability across diverse
            sectors makes optical brighteners invaluable to manufacturers.
          </li>
          <li>
            Cost Efficiency: The integration of optical brighteners can enhance
            product quality without necessitating major alterations in
            manufacturing processes.
          </li>
        </ul>
      </div>

      <div className="applications-section">
        <h2>Applications</h2>
        <ul>
          <li>Textile Manufacturing</li>
          <li>Paper and Packaging Industries</li>
          <li>Household Cleaning and Detergent Products</li>
          <li>Cosmetics and Personal Care Formulations</li>
          <li>Plastics and Polymer Production</li>
          <li>Industrial Coatings and Inks</li>
        </ul>
      </div>

      <h2 className="highlight-title">Products</h2>
      <div className="product-grid">
        {products.map((product) => (
          <div
            className="product-card"
            key={product.id}
            onClick={() => alert(`Clicked on ${product.name}`)}
          >
            <img
              src={`https://via.placeholder.com/150?text=${product.name}`}
              alt={product.name}
              className="product-image"
            />
            <p className="product-name">{product.name}</p>
            {product.cas && <p className="product-cas">CAS: {product.cas}</p>}
          </div>
        ))}
      </div>

      <div className="pagination">
        <img
          src="/left-arrow.svg"
          alt="Previous"
          className="pagination-arrow"
        />
        <span className="page-numbers">1 2 3 4</span>
        <img src="/right-arrow.svg" alt="Next" className="pagination-arrow" />
      </div>
    </div>
  );
};

export default OpticalBrightners;
