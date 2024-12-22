import React, { useEffect, useState } from "react";
import axios from "axios";
import "./MasterBatches.css";

const MasterBatches = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("/api/masterbatches")
      .then((response) => setProducts(response.data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  return (
    <div className="masterbatches-container">
      {/* Image Section */}
      <div className="image-container">
        <img
          src="./assets/mast.png"
          alt="Masterbatches"
          className="header-image"
        />
      </div>
      {/* Header Section */}
      <div className="header">
        <h1>CATEGORY 12</h1>
        <h2>Masterbatches</h2>
        <p className="intro-text">
          Masterbatches are essential additives used in the plastics and polymer industries to impart
          color, enhance properties, and optimize processing. ICG Specialty Chemicals offers a wide
          range of masterbatches tailored for specific industrial applications, delivering unmatched
          quality and consistency. Our masterbatch products are designed to enhance durability,
          improve aesthetic appeal, and optimize performance, making them indispensable for
          manufacturers across a variety of industries.
        </p>
      </div>

      <div className="types-section">
        <h2>Key Masterbatch Products</h2>
        <ul>
          <li>
            <strong>Liquid/Paste Black Masterbatch:</strong> Liquid/Paste Black Masterbatch is a concentrated colorant formulated for easy dispersion into a variety of plastic resins. This product offers superior color consistency and is ideal for applications that require deep, rich black tones with minimal usage levels. Its paste form makes it convenient to mix directly into liquid or semi-liquid processing environments.
            <ul>
              <li>Excellent dispersion and coverage.</li>
              <li>High pigment concentration, allowing lower dosages.</li>
              <li>Suitable for injection molding, extrusion, and film applications.</li>
              <li>Provides UV resistance, enhancing outdoor weatherability.</li>
            </ul>
          </li>
          <li>
            <strong>Black Masterbatch:</strong> Black Masterbatch is a versatile, solid concentrate of carbon black pigments designed for efficient and uniform coloring of plastic materials. It provides excellent opacity, UV stability, and mechanical performance enhancement. Black masterbatch by ICG Specialty Chemicals is specifically formulated to meet the stringent demands of sectors that require robust coloration with added strength and protection.
            <ul>
              <li>High opacity and color strength, reducing usage rates.</li>
              <li>Exceptional UV resistance, protecting against weathering.</li>
              <li>Enhances mechanical properties like tensile strength.</li>
              <li>Heat-resistant, making it suitable for high-temperature applications.</li>
            </ul>
          </li>
          <li>
            <strong>Moisture Absorber (AB):</strong> Moisture Absorber (AB) masterbatch is engineered to effectively remove excess moisture from recycled or virgin polymers during processing. It ensures improved product quality by preventing moisture-related defects like voids, bubbles, and surface blemishes in plastic parts. This masterbatch is essential for improving the processing efficiency of hygroscopic materials, reducing downtime, and ensuring consistent output.
            <ul>
              <li>Absorbs excess moisture from resins, reducing defects.</li>
              <li>Improves the quality of finished products by preventing splay and streaking.</li>
              <li>Enhances mechanical properties and surface finish.</li>
              <li>Cost-effective solution for processing recycled materials.</li>
            </ul>
          </li>
        </ul>
      </div>

      <div className="applications-section">
        <h2>Key Industries Of Masterbatch</h2>
        <ul>
          <li>Automotive</li>
          <li>Packaging</li>
          <li>Construction</li>
          <li>Electronics</li>
          <li>Recycling</li>
        </ul>
      </div>

      <h2>Technical Advantages and Sustainable Benefits</h2>
      <p>
        ICG Masterbatches are designed for even dispersion within polymers, reducing the need for additional mixing and enhancing processability. Their concentrated formulations require minimal dosages, offering a cost-effective way to achieve desired results. With solutions tailored for using recycled materials, these Masterbatches also support more sustainable production practices. Consistent color distribution ensures high aesthetic standards, enabling manufacturers to produce uniform, visually appealing products across large production runs.
      </p>

      {/* Highlighted Products */}
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

export default MasterBatches;
