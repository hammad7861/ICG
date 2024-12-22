import React from "react";
import "./Plasticizers";

const Plasticizers = () => {
  const products = [
    { name: "DPHP (Di(2-propyl heptyl) phthalate)", id: 1 },
    { name: "DINP (Diisononyl Phthalate)", id: 2 },
    { name: "DOTP (Dioctyl Terephthalate)", id: 3 },
    { name: "TOTM (Trioctyl Trimellitate)", id: 4 },
    { name: "DOA (Dioctyl Adipate)", id: 5 },
    { name: "CPW (Chlorinated Paraffin Wax)", id: 6 },
    { name: "Ethanol 99.9%", id: 7 },
  ];

  return (
    <div className="plasticizers-container">
      {/* Header Section */}
      <div className="header">
        <h1>Plasticizers: Enhancing Flexibility and Durability of Polymers</h1>
        <p className="intro-text">
          Plasticizers are chemical additives used to enhance the flexibility,
          workability, and durability of polymers, especially plastics. They
          reduce intermolecular forces between polymer chains, making materials
          more pliable and improving their mechanical properties.
        </p>
      </div>

      {/* Key Applications Section */}
      <div className="applications-section">
        <h2>Key Applications</h2>
        <ul>
          <li>
            <strong>Flexible PVC:</strong> Plasticizers (e.g., DOP, TOTM) make
            PVC flexible for products like cables, flooring, and synthetic
            leather.
          </li>
          <li>
            <strong>Rubbers & Elastomers:</strong> Improve elasticity and
            processability for items like tires and gaskets.
          </li>
          <li>
            <strong>Coatings & Adhesives:</strong> Enhance application and
            adhesion properties in construction and automotive sectors.
          </li>
          <li>
            <strong>Plastic Films & Sheets:</strong> Used in packaging,
            agricultural films, and shrink wraps, with plasticizers like DOTP
            for environmental compliance.
          </li>
          <li>
            <strong>Medical Devices:</strong> Ensure flexibility and
            biocompatibility in medical products like IV tubing and catheters.
          </li>
        </ul>
      </div>

      {/* Industries Benefiting Section */}
      <div className="industries-section">
        <h2>Industries Benefiting</h2>
        <ul>
          <li>
            <strong>Automotive:</strong> Used in interior parts, flexible
            materials, and cold-resistant applications.
          </li>
          <li>
            <strong>Construction:</strong> Improve PVC pipes, flooring,
            waterproofing, and fire-resistant cables.
          </li>
          <li>
            <strong>Medical:</strong> Provide safe, flexible materials for
            medical devices and packaging.
          </li>
          <li>
            <strong>Textiles:</strong> Enhance flexibility in synthetic fibers
            for protective clothing and upholstery.
          </li>
        </ul>
      </div>

      {/* Benefits Section */}
      <div className="benefits-section">
        <h2>Benefits</h2>
        <ul>
          <li>
            <strong>Flexibility:</strong> Reduces rigidity, allowing materials
            to bend and stretch without cracking.
          </li>
          <li>
            <strong>Durability:</strong> Increases resistance to wear, UV, and
            temperature extremes.
          </li>
          <li>
            <strong>Processing:</strong> Improves flow properties during
            production, reducing energy costs.
          </li>
          <li>
            <strong>Customization:</strong> Allows tailored mechanical
            properties for specific needs.
          </li>
          <li>
            <strong>Cost Efficiency:</strong> Reduces material costs while
            maintaining performance.
          </li>
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default Plasticizers;
