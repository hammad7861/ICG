import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Absorber.css";

const Absorber = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("/api/products")
      .then((response) => setProducts(response.data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  return (
    <div className="absorber-container">
      <div className="image-container">
        <img
          src="./assets/uvab.png"
          alt="UV Absorbers"
          className="header-image"
        />
      </div>
      <div className="header">
        <h1>UV Absorbers</h1>
        <p className="intro-text">
          UV absorbers are specialized compounds designed to absorb harmful
          ultraviolet (UV) radiation from sunlight or artificial light sources.
          They help protect materials, products, and surfaces from the
          detrimental effects of UV rays, which can cause degradation,
          discoloration, and loss of mechanical properties. UV absorbers are
          widely used in industries such as plastics, coatings, textiles, and
          personal care to ensure the longevity and stability of products.
        </p>
      </div>

      <div className="header">
        <h2>Types of UV Absorbers</h2>
        <ul>
          <li>
            <strong>Benzotriazoles:</strong> These are some of the most
            effective and widely used UV absorbers, particularly in plastic and
            coatings applications. They offer excellent UV protection and high
            thermal stability, making them suitable for outdoor applications.
            Omniquan UV 326 is a benzotriazole UV absorber that offers
            broad-spectrum UV protection, ideal for plastic applications.
            Omniqaun UV 1577 is used in automotive coatings, providing excellent
            thermal stability and UV resistance.
          </li>
          <li>
            <strong>Benzophenones:</strong> Benzophenones work by absorbing UV
            radiation and dissipating it as heat. They are commonly used in
            plastics, coatings, and adhesives to protect against UV
            light-induced degradation. Omniquan BP 12 belongs to the
            benzophenone class of UV absorbers, known for their ability to
            absorb UVB radiation in the wavelength range of 280-320 nm. This
            class of absorbers converts UV radiation into harmless heat,
            preventing UV light from causing chemical degradation in the
            materials it protects.
          </li>
          <li>
            <strong>Triazines:</strong> Known for their high performance in
            stabilizing polymers and coatings, triazines are especially
            effective at absorbing UVB rays. They are used in automotive and
            industrial coatings to enhance durability. Omniquan UV 1577 is a
            high- performance triazine UV absorber that is widely used in
            automotive and industrial coatings. It provides excellent stability
            at high temperatures and efficient UV protection. Omniquan UV 1600
            is a triazine-based UV absorber that is specifically designed for
            applications requiring long-term outdoor stability, such as
            automotive clear coats and industrial finishes. It is known for its
            exceptional durability.
          </li>
        </ul>
        <h3>Key Benefits</h3>
        <ul>
          <li>Protection from UV Degradation</li>
          <li>Enhancing Product Lifespan</li>
          <li>Preserving Color and Appearance</li>
          <li>Improving Stability</li>
        </ul>
        <h3>Key Industries</h3>
        <ul>
          <li>Automotive</li>
          <li>Textiles</li>
          <li>Plastics</li>
          <li>Coatings</li>
          <li>Agriculture</li>
          <li>Personal Care</li>
          <li>Aerospace</li>
        </ul>
      </div>

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

export default Absorber;
