import React, { useEffect, useState } from "react";
import axios from "axios";
import "./NucleatingAgents.css";

const NucleatingAgents = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("/api/products")
      .then((response) => setProducts(response.data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  return (
    <div className="nucleating-agents-container">
      {/* Image Header */}
      <div className="image-header">
        <img
          src="./assets/csm_lohtragon-nucleating-agents_923ddb98fc1.png"
          alt="Nucleating Agents"
          className="header-image"
        />
      </div>

      {/* Header Section */}
      <div className="header">
        <h1>CATEGORY 9</h1>
        <h2>Nucleating Agents</h2>
        <p className="intro-text">
          Nucleating agents (NAs) are essential additives in research and
          industrial applications, promoting the formation of nuclei in
          supersaturated solutions or molten systems. These agents serve as
          catalysts, accelerating nucleation—the critical stage in phase
          transitions where small clusters of a new crystalline or solid phase
          emerge within the original matrix. NAs enhance crystallization
          kinetics, particularly in polymers, and improve material properties
          such as clarity, mechanical strength, and thermal resistance. Their
          role is vital in polymer technology, materials science, and related
          sectors, where controlled nucleation is essential for optimizing
          performance and processing efficiency.
        </p>
        <p className="intro-text">
          Nucleating agents can be categorized based on their chemical
          composition, physical state, and the nucleation process they induce
          such as organic, inorganic hybrid, and specialized nucleating agents.
        </p>
      </div>

      {/* Content Section */}
      <div className="content-section">
        <h2>Types:</h2>
        <ul>
          <li>Organic nucleating agents</li>
          <li>Inorganic Nucleating Agents</li>
          <li>Hybrid Nucleating Agents</li>
        </ul>

        <h3>1. Organic nucleating agents</h3>
        <p>
          These agents typically contain functional groups capable of
          interacting with the parent phase. They are widely used in polymer
          crystallization techniques. Omniquan NA 2988 is a first-generation
          sorbitol-based nucleating agent, designed to improve the transparency
          and surface gloss of polypropylene. It also enhances overall polymer
          performance by promoting faster crystallization, making it ideal for
          applications where optical clarity and smooth finishes are critical.
          Omniquan NA 5988: This second- generation sorbitol-based agent offers
          better thermal stability and increased crystallization rates compared
          to its predecessor. It improves the mechanical properties of
          polypropylene, such as stiffness and impact resistance, making it
          suitable for demanding industrial uses that require durability and
          heat resistance. Omniquan NA 3988 and Omniquan NA 8000 delivers
          superior optical properties, including enhanced clarity and reduced
          haze, while significantly shortening cycle times during polymer
          processing. This makes it ideal for high-speed production environments
          where both quality and efficiency are paramount.
        </p>

        <h3>2. Inorganic Nucleating Agents</h3>
        <p>
          These solid particles provide a large surface area, commonly used in
          polymers like polypropylene to raise crystallization temperatures and
          reduce cycle times in molding, improving production efficiency.
        </p>

        <h3>3. Hybrid Nucleating Agents</h3>
        <p>
          Used in metal and alloy crystallization, these agents combine the
          benefits of organic and inorganic components. Omniquan NA 21: An
          organometallic salt-based nucleator that enhances product rigidity,
          heat resistance, and boosts crystallization efficiency and mechanical
          properties, ideal for high-performance applications.
        </p>

        <p>
          A range of specialized nucleating agents designed to enhance the
          crystallization morphology and macroscopic mechanical properties of
          polypropylene. Omniquan NA 101: Enhances crystallization in
          polypropylene, leading to improved mechanical strength and thermal
          stability. Omniquan NA 11 improves clarity and dimensional stability,
          making it ideal for high-performance applications requiring excellent
          optical properties.
        </p>

        <h2>Key Benefits</h2>
        <ul>
          <li>
            Accelerated crystallization in thermoplastics, reducing cycle times
            in production.
          </li>
          <li>
            Enhanced mechanical properties, such as strength, stiffness, and
            impact resistance.
          </li>
          <li>
            Improved optical clarity and surface gloss in polymers like
            polypropylene.
          </li>
          <li>
            Increased thermal stability, enhancing performance under
            high-temperature conditions.
          </li>
          <li>
            Improved dimensional stability, reducing shrinkage and deformation.
          </li>
          <li>
            Better control of polymorphs and particle size distribution in
            pharmaceutical applications.
          </li>
          <li>
            Uniform grain structure in metals, leads to increased strength and
            durability.
          </li>
          <li>
            Enhanced texture, consistency, and shelf life of food products like
            fats and sugars.
          </li>
          <li>
            Optimized processing efficiency across multiple industries,
            improving overall production output and quality.
          </li>
        </ul>

        <h2>Key Industries of Nucleating Agents:</h2>
        <ul>
          <li>Polymers Industry</li>
          <li>Metallurgy Industry</li>
          <li>Pharmaceuticals</li>
        </ul>
      </div>

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
            <p className="product-cas">{product.cas}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NucleatingAgents;
