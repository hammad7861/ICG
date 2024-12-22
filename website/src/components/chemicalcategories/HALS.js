import React, { useEffect, useState } from "react";
import axios from "axios";
import "./HALS.css";

const HALS = () => {
  const [halsProducts, setHalsProducts] = useState([]);

  useEffect(() => {
    axios
      .get("/api/hals-products")
      .then((response) => setHalsProducts(response.data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  return (
    <div className="hals-container">
      {/* Image Section */}
      <div className="image-container">
        <img
          src="./assets/hoc.png"
          alt="Hindered Amine Light Stabilizers"
          className="header-image"
        />
        <h1>Hindered Amine Light Stabilizers (HALS)</h1>
      </div>

      {/* Header Section */}
      <div className="header">
        <h1>Hindered Amine Light Stabilizers (HALS)</h1>
        <p className="intro-text">
          Although not technically UV absorbers, HALS play a complementary role
          by scavenging free radicals formed during UV exposure, thus preventing
          further degradation of materials. Omniquan LS 944 is a high molecular
          weight HALS that is effective in polyolefin applications such as
          agricultural films, outdoor furniture, and other plastic products. It
          provides long-lasting UV protection and reduces photo- oxidation.
          Omniquan LS 770 is a well-known HALS product, it is highly effective
          in preventing the degradation of plastics and coatings exposed to UV
          radiation. It is commonly used in polyolefins, polyurethanes, and
          styrene.
        </p>
      </div>

      <h3>Key Benefits</h3>
      <ul>
        <li>Protection from UV Degradation</li>
        <li>Enhancing Product Lifespan</li>
        <li>Preserving Color and Appearance</li>
        <li>Improving Stability</li>
      </ul>

      <h3>Key Industries</h3>
      <ul>
        <li>Agriculture</li>
        <li>Packaging</li>
        <li>Furniture</li>
        <li>Automotive</li>
        <li>Coatings</li>
        <li>Textiles</li>
        <li>Construction</li>
        <li>Sports & Recreation</li>
      </ul>

      {/* Highlighted Products */}
      <h2 className="highlight-title">Highlighted HALS Products</h2>
      <div className="product-grid">
        {halsProducts.map((product) => (
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
    </div>
  );
};

export default HALS;
