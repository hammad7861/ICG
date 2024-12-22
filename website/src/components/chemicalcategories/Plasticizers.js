import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Plasticizers.css";

const Plasticizers = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("/api/plasticizers")
      .then((response) => setProducts(response.data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  return (
    <div className="plasticizers-container">
      <div className="image-header">
        <img
          src="./assets/Plastic_Additives_430C_647x3291.png"
          alt="Plasticizers"
          className="header-image"
        />
      </div>
      <div className="header">
        <h1>CATEGORY 8</h1>
        <h2>Plasticizers</h2>
        <p className="intro-text">
          Plasticizers are essential chemical additives used to enhance the
          flexibility, workability, and durability of polymer materials,
          particularly in plastics. Their primary function is to reduce the
          intermolecular forces within the polymer chains, increasing the
          material's plasticity and improving its mechanical properties.
        </p>
      </div>

      <div className="applications-section">
        <h2>Key Applications</h2>
        <ul>
          <li>
            <strong>Flexible PVC (Polyvinyl Chloride) Production:</strong>{" "}
            Plasticizers are vital in the manufacturing of flexible PVC,
            transforming it from a rigid polymer into a malleable material used
            in products such as cables, hoses, and vinyl flooring. By embedding
            plasticizers, PVC can achieve enhanced elongation, flexibility, and
            resilience. One of the most widely used general-purpose
            plasticizers, DOP offers excellent flexibility and low volatility,
            making it ideal for soft PVC applications such as wire and cable
            insulation, flooring, and synthetic leather.
          </li>
          <li>
            <strong>Elastomers and Rubbers:</strong> In the rubber industry,
            plasticizers are integrated into elastomeric compounds to enhance
            their processability and elasticity. These compounds are widely used
            in automotive components like tires, seals, and gaskets, where
            superior flexibility under dynamic stress is required.
          </li>
          <li>
            <strong>Coatings and Adhesives:</strong> Plasticizers improve the
            rheological properties of coatings and adhesives, allowing for
            easier application and improved adhesion to substrates. In
            industries like construction and automotive, they help provide
            durable finishes and high-performance bonding solutions.
          </li>
          <li>
            <strong>Plastic Films and Sheets:</strong> In the production of
            films used for packaging and agricultural applications, plasticizers
            impart flexibility, tear resistance, and enhanced transparency. They
            enable materials to endure deformation without breaking, ideal for
            shrink wraps, greenhouse films, and food packaging. DPHP is
            recognized for providing excellent weatherability and UV resistance
            in outdoor applications. Its low volatility and long-term
            flexibility make it ideal for roofing membranes, coated fabrics, and
            automotive components exposed to sunlight and environmental
            elements.
          </li>
          <li>
            <strong>Medical Devices:</strong> In medical applications,
            plasticizers are used in products such as IV tubing, blood bags, and
            catheters, where flexible, biocompatible materials are critical. The
            use of specialized, non-toxic plasticizers in medical-grade plastics
            ensures compliance with stringent health and safety regulations.
          </li>
        </ul>
      </div>

      <div className="benefits-section">
        <h2>Key Benefits of Plasticizers</h2>
        <ul>
          <li>
            <strong>Enhanced Flexibility:</strong> By reducing the rigidity of
            polymers, plasticizers impart significant flexural strength,
            enabling the material to be used in dynamic applications without
            cracking or breaking.
          </li>
          <li>
            <strong>Improved Durability:</strong> Plasticizers increase a
            polymer's ability to resist wear, fatigue, and degradation under
            mechanical stress, UV exposure, and extreme temperatures, prolonging
            the lifespan of the material.
          </li>
          <li>
            <strong>Optimized Processing:</strong> During the extrusion,
            molding, or calendering of polymers, plasticizers act as process
            aids by lowering the glass transition temperature and enhancing the
            flow characteristics, leading to faster cycle times and energy
            efficiency.
          </li>
          <li>
            <strong>Customization of Mechanical Properties:</strong> Depending
            on the formulation and dosage, plasticizers can be fine-tuned to
            deliver specific mechanical properties such as impact resistance,
            tensile strength, and modulus of elasticity, allowing precise
            customization to suit diverse industrial needs.
          </li>
          <li>
            <strong>Cost Efficiency:</strong> The incorporation of plasticizers
            allows manufacturers to reduce material costs by replacing more
            expensive polymers with cost-effective, flexible alternatives
            without compromising on performance.
          </li>
        </ul>
      </div>

      <div className="industries-section">
        <h2>Industries Benefiting from Plasticizers</h2>
        <ul>
          <li>Automotive</li>
          <li>Construction</li>
          <li>Medical and Healthcare</li>
          <li>Textiles</li>
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

export default Plasticizers;
