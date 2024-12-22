import React, { useEffect, useState } from "react";
import axios from "axios";
import "./AntiBlocks.css";

const Antiblocks = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch products from API using axios
    axios.get("https://api.example.com/products")
      .then((response) => setProducts(response.data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  return (
    <div className="antiblocks-container">
      {/* Image Section */}
      <div className="image-container">
        <img
          src="./assets/Anti-Block-Masterbatch-scaled1.png"
          alt="Antiblocks"
          className="header-image"
        />
        <h1>Antiblocks (AB)</h1>
      </div>

      {/* Header Section */}
      <div className="header">
        <h1>Antiblocks for Material Handling</h1>
        <p className="intro-text">
          Anti-blocking agents are additives used to reduce the adhesion or blocking of materials,
          particularly in industries where materials have a tendency to stick together or adhere. These
          agents possess specific properties that make them effective in preventing blocking or
          clumping. These agents work by reducing the surface friction or stickiness between particles
          or surfaces, making materials easier to handle, transport, and process.
        </p>
      </div>

      {/* Content Section */}
      <div className="content-section">
        <h2>Types of Antiblocks</h2>
        <h3>1. Inorganic Antiblocks:</h3>
        <ul>
          <li>Silica-based: Effective in reducing surface adhesion.</li>
          <li>Calcium Carbonate: Provides excellent anti-blocking properties.</li>
        </ul>

        <h3>2. Organic Antiblocks:</h3>
        <ul>
          <li>Fatty Acid Amides: Improve slip and reduce blocking.</li>
          <li>Polymeric Additives: Enhance processing and reduce friction.</li>
        </ul>
      </div>

      {/* Highlighted Products */}
      <h2 className="highlight-title">Highlighted Products</h2>
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
            <p className="product-cas">{product.cas}</p>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="pagination">
        <button className="pagination-arrow">
          <img src="/left-arrow.svg" alt="Previous" />
        </button>
        <span className="page-numbers">1 2 3 4</span>
        <button className="pagination-arrow">
          <img src="/right-arrow.svg" alt="Next" />
        </button>
      </div>

      {/* Additional Information */}
      <div className="additional-info">
        <h2>Key Benefits of Antiblocks</h2>
        <ul>
          <li>Reduces surface friction to prevent layers from sticking together.</li>
          <li>Enhances clarity for improved visibility in applications.</li>
          <li>Improves printability, ensuring high-quality prints on packaging.</li>
          <li>Optimizes packaging performance by minimizing adhesion between layers.</li>
          <li>Maintains consistent product quality by reducing defects.</li>
          <li>Offers versatility across various materials and applications.</li>
          <li>Provides cost-effectiveness by lowering production costs and increasing yields.</li>
          <li>Compatible with other additives for enhanced overall performance.</li>
        </ul>

        <h2>Key Industries</h2>
        <ul>
          <li>Plastics Industry</li>
          <li>Food Industry</li>
          <li>Pharmaceutical Industry</li>
          <li>Agriculture</li>
          <li>Packaging Industry</li>
          <li>Paper and Printing</li>
          <li>Chemical Industry</li>
          <li>Mining and Mineral Processing</li>
        </ul>
      </div>
    </div>
  );
};

export default Antiblocks;
