import React, { useEffect, useState } from "react";
import axios from "axios";
import "./PolymersAndResins.css";

const PolymersAndResins = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch products from API using axios
    axios
      .get("https://api.example.com/products")
      .then((response) => setProducts(response.data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  return (
    <div className="polymers-resins-container">
      {/* Image Header Section */}
      <div className="image-header">
        <img
          src="./assets/polymers.png"
          alt="Polymers and Resins"
          className="header-image fixed-size-image"
        />
      </div>
      {/* Header Section */}
      <div className="header">
        <h1>Polymers and Resins: Essential Materials for Various Industries</h1>
        <p className="intro-text">
          Polymers and resins are essential materials in numerous industrial
          applications. These compounds possess unique chemical properties that
          enable them to be used in various high-performance products,
          contributing to sectors such as automotive, construction, electronics,
          textiles, and packaging.
        </p>
      </div>

      {/* Polymers Section */}
      <div className="polymers-section">
        <h2>Polymers</h2>
        <ul>
          <li>
            <strong>Nylon 6:</strong> Nylon 6 is a widely used engineering
            polymer characterized by its high tensile strength, excellent
            abrasion resistance, and flexibility. This polymer offers superior
            performance in automotive, industrial, and textile applications.
          </li>
          <li>
            <strong>Nylon 12:</strong> Nylon 12 offers lower moisture absorption
            and better dimensional stability compared to Nylon 6, making it
            ideal for applications requiring flexibility and chemical
            resistance, especially in the automotive and electronics industries.
          </li>
          <li>
            <strong>EVA (Ethylene Vinyl Acetate):</strong> Ethylene Vinyl
            Acetate (EVA) copolymers are versatile materials used in
            applications requiring flexibility, impact resistance, and adhesion.
            EVA grades vary depending on the vinyl acetate (VA) content,
            affecting the material's properties.
            <ul>
              <li>
                EVA 18% VA Content: Offers moderate flexibility and impact
                resistance, often used in packaging films and adhesives.
              </li>
              <li>
                EVA 24% VA Content: Provides enhanced elasticity, making it
                suitable for footwear, hoses, and flexible packaging.
              </li>
              <li>
                EVA 28% VA Content: Ideal for high-clarity applications, such as
                solar panel encapsulation, protective films, and packaging.
              </li>
            </ul>
          </li>
          <li>
            <strong>PE Wax (Polyethylene Wax):</strong> Polyethylene wax is a
            low molecular weight polymer used as a lubricant, dispersant, and
            processing aid in the plastics industry. It improves the
            processability of plastics and enhances the appearance and stability
            of finished products.
          </li>
          <li>
            <strong>SBR (Styrene-Butadiene Rubber):</strong> SBR is a synthetic
            rubber noted for its excellent abrasion resistance and durability,
            making it widely applicable in the automotive and industrial
            sectors.
          </li>
        </ul>
      </div>

      {/* Resins Section */}
      <div className="resins-section">
        <h2>Resins</h2>
        <ul>
          <li>
            <strong>Epoxy Resin:</strong> Epoxy resin is a high-performance
            thermosetting polymer widely known for its excellent adhesive
            properties, mechanical strength, and chemical resistance. It is
            essential in industries like electronics, aerospace, and
            construction.
          </li>
          <li>
            <strong>Vinyl Acetate Monomer (VAM):</strong> Vinyl Acetate Monomer
            (VAM) is a building block for producing a wide variety of polymers
            and resins, including polyvinyl acetate (PVA) and ethylene-vinyl
            acetate (EVA). VAM imparts flexibility, adhesion, and durability to
            end products.
          </li>
          <li>
            <strong>Diethanolamine (DEA):</strong> Diethanolamine is used as an
            intermediate in the production of resins, surfactants, and
            detergents. It is also utilized as a neutralizing agent in
            industrial formulations.
          </li>
          <li>
            <strong>Synthetic Barium Sulfate:</strong> Synthetic Barium Sulfate
            is an inert filler commonly used in plastics and resins to enhance
            the final product’s density, brightness, and chemical resistance.
          </li>
        </ul>
      </div>

      {/* Products Section */}
      <div className="products-section">
        <h2>Products</h2>
        <div className="product-grid">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <div className="product-name">{product.name}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Additional Information */}
      <div className="additional-info">
        <h2>Key Industries of Polymers and Resins:</h2>
        <ul>
          <li>Automotive</li>
          <li>Construction</li>
          <li>Electronics</li>
          <li>Medical</li>
          <li>Packaging</li>
          <li>Textile</li>
        </ul>
      </div>
    </div>
  );
};

export default PolymersAndResins;
