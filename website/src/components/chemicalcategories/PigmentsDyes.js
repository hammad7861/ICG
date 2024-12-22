import React, { useEffect, useState } from "react";
import axios from "axios";
import "./PigmentsDyes.css";

const PigmentsDyes = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("/api/pigmentsdyes")
      .then((response) => setProducts(response.data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  return (
    <div className="pigments-dyes-container">
      <div className="image-header">
        <img
          src="./assets/pigmentsdyes.png"
          alt="Pigments and Dyes"
          className="header-image"
        />
      </div>
      <div className="header">
        <h1>CATEGORY 6</h1>
        <h2>Pigment and Dyes</h2>
        <p className="intro-text">
          Color plays a vital role in human perception and aesthetics, impacting
          our daily lives, industries, and cultural expressions. At the core of
          this colorful world are pigments and dyes—two fundamental categories
          of colorants that are indispensable in various applications.
        </p>
        <p className="intro-text">
          Pigments are finely ground, insoluble substances that provide color to
          materials by scattering light. They do not dissolve in the medium and
          are typically used in coatings, paints, plastics, inks, and
          construction materials. Pigments are prized for their stability,
          opacity, and durability.
        </p>
        <p className="intro-text">
          Dyes, in contrast, are soluble compounds that impart color to
          materials through a process called dyeing. When applied, dyes
          penetrate the substrate, creating a chemical bond that offers vivid
          and often longer-lasting color. Dyes are primarily utilized in
          textiles, paper, and certain types of plastics.
        </p>
      </div>

      <div className="types-section">
        <h2>Key Differences of Pigments and Dyes</h2>
        <ul>
          <li>Solubility: Pigments are insoluble; dyes are soluble.</li>
          <li>
            Application Method: Pigments are dispersed in a medium; dyes require
            a dyeing process.
          </li>
          <li>
            Color Intensity: Dyes tend to provide more intense colors, while
            pigments offer opacity and durability.
          </li>
          <li>
            Typically, pigments have been classified into inorganic and organic
            pigments and dyes are classified as Acid, Base, Solvent, Disperse,
            Reactive, and VAT dyes.
          </li>
        </ul>
      </div>

      <div className="applications-section">
        <h2>Uses of Pigments and Dyes</h2>
        <ul>
          <li>Coloring</li>
          <li>Enhancement of Aesthetics</li>
          <li>Functional Properties</li>
        </ul>
      </div>

      <div className="industries-section">
        <h2>Key Industries of Pigments and Dyes</h2>
        <ul>
          <li>Textile Industry</li>
          <li>Coatings and Paints</li>
          <li>Plastics and Polymers</li>
          <li>Inks</li>
          <li>Cosmetics and Personal Care</li>
          <li>Construction and Building Materials</li>
          <li>Automotive</li>
          <li>Food and Pharmaceuticals</li>
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default PigmentsDyes;
