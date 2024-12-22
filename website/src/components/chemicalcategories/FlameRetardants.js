import React, { useEffect, useState } from "react";
import axios from "axios";
import "./FlameRetardants.css";

const FlameRetardants = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("/api/flame-retardants")
      .then((response) => setProducts(response.data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  return (
    <div className="flameretardants-container">
      {/* Image Section */}
      <div className="image-container">
        <img
          src="./assets/fkamere.png"
          alt="Flame Retardants"
          className="header-image"
        />
      </div>

      <div className="header">
        <h1>CATEGORY 4</h1>
        <h2>Flame Retardants</h2>
        <p className="intro-text">
          Flame retardants are chemical substances that are added to materials
          to prevent the start of a fire or to slow its progression. Flame
          retardants play a critical role in protecting materials and products
          from the risk of fire, reducing the rate of ignition, slowing the
          spread of flames, and preventing catastrophic damage. We serve
          industries ranging from construction and automotive to electronics,
          textiles, and beyond, with flame retardants tailored to meet specific
          material needs.
        </p>
      </div>

      <div className="types-section">
        <h2>Types of Flame Retardants</h2>
        <ul>
          <li>
            <strong>Halogenated Flame Retardants:</strong> These compounds
            contain halogen elements (such as chlorine or bromine). They release
            halogen atoms when exposed to heat, which helps quench free radicals
            and inhibit combustion and are ideal for electronics and textiles.
          </li>
          <li>
            <strong>Brominated Flame Retardants:</strong> OMNIQUAN DBDPE:
            Decabromodiphenyl ethane flame retardant, ideal for high-temperature
            thermoplastics and electrical insulation. OMNIQUAN BDDP BDDP is an
            advanced, high-efficiency additive flame retardant characterized by
            the presence of both aromatic and aliphatic bromine.
          </li>
          <li>
            <strong>Non-Halogenated Flame retardants:</strong> These do not
            contain halogen elements and are often considered more
            environmentally friendly. They work by forming a protective char
            layer on the material surface, slowing down heat and flame spread.
          </li>
          <li>
            <strong>Phosphorous-Based:</strong> Promote char formation to
            inhibit flammable gas release, widely used in polymers and coatings.
          </li>
          <li>
            <strong>Inorganic Flame Retardants:</strong> These are minerals and
            metal-based compounds that act as flame retardants. They release
            water vapor when heated, which cools the material and dilutes
            flammable gases.
          </li>
        </ul>
      </div>

      <div className="applications-section">
        <h2>Applications</h2>
        <p>
          Flame retardants are indispensable in:
          <ul>
            <li>
              Construction: Insulation, wallboards, and roofing materials.
            </li>
            <li>Electronics: Circuit boards and device housings.</li>
            <li>
              Textiles: Upholstery, curtains, and fire-resistant clothing.
            </li>
            <li>Automotive: Interior materials and wiring.</li>
            <li>
              Furniture: Foams and wood products that meet fire safety
              standards.
            </li>
          </ul>
        </p>
      </div>

      <h2 className="highlight-title">Highlighted Products</h2>
      <div className="product-grid">
        {products.map((product) => (
          <div
            className="product-card"
            key={product.code}
            onClick={() => alert(`Clicked on ${product.name}`)}
          >
            <img
              src={`https://via.placeholder.com/150?text=${product.name}`}
              alt={product.name}
              className="product-image"
            />
            <p className="product-name">{product.name}</p>
            <p className="product-code">{product.code}</p>
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

export default FlameRetardants;
