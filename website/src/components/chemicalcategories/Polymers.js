import React from "react";
import "./PolymersAndResins";

const PolymersAndResins = () => {
  const products = [
    { name: "Diethanolamine (DEA)", id: 1 },
    { name: "Monoethanolamine (MEA)", id: 2 },
    { name: "Monoethylene glycol (MEG)", id: 3 },
    { name: "Triethylene glycol (TEG)", id: 4 },
    { name: "Vinyl Acetate Monomer", id: 5 },
    { name: "Sodium Benzoate", id: 6 },
    { name: "PVC K67", id: 7 },
    { name: "PVC K58", id: 8 },
  ];

  return (
    <div className="polymers-resins-container">
      {/* Header Section */}
      <div className="header">
        <h1>Polymers and Resins: Essential Materials for Various Industries</h1>
        <p className="intro-text">
          Polymers and resins are crucial materials in various industrial
          sectors, valued for their distinct chemical properties, such as
          strength, flexibility, and resistance to abrasion, chemicals, and
          environmental factors.
        </p>
      </div>

      {/* Polymers Section */}
      <div className="polymers-section">
        <h2>Polymers</h2>
        <ul>
          <li>
            <strong>Nylon 6:</strong> High tensile strength, abrasion
            resistance, and flexibility, used in automotive, industrial, and
            textile applications.
          </li>
          <li>
            <strong>Nylon 12:</strong> Better dimensional stability and chemical
            resistance, ideal for automotive and electronics.
          </li>
          <li>
            <strong>EVA (Ethylene Vinyl Acetate):</strong> Versatile and
            flexible, used in packaging, footwear, solar panels, and sports
            equipment.
          </li>
          <li>
            <strong>PE Wax (Polyethylene Wax):</strong> A lubricant and
            processing aid in plastics.
          </li>
          <li>
            <strong>PE 100 Black:</strong> High-density polyethylene with
            excellent UV resistance, used in pressure pipes and construction.
          </li>
          <li>
            <strong>SBR (Styrene-Butadiene Rubber):</strong> Abrasion resistance
            and durability, used in tires and industrial rubber products.
          </li>
        </ul>
      </div>

      {/* Resins Section */}
      <div className="resins-section">
        <h2>Resins</h2>
        <ul>
          <li>
            <strong>Epoxy Resin:</strong> Used for its adhesive properties,
            mechanical strength, and chemical resistance.
          </li>
          <li>
            <strong>Diethylene Glycol (DEG):</strong> Used in polyester resins,
            plasticizers, and antifreeze formulations.
          </li>
          <li>
            <strong>Triethylene Glycol (TEG):</strong> Used as a desiccant in
            gas processing and a plasticizer in resin formulations.
          </li>
          <li>
            <strong>Vinyl Acetate Monomer (VAM):</strong> Key ingredient in
            adhesives, paints, and textiles.
          </li>
          <li>
            <strong>Diethanolamine (DEA):</strong> Used in the production of
            resins, surfactants, and corrosion inhibitors.
          </li>
          <li>
            <strong>Monoethanolamine (MEA):</strong> An intermediate for
            emulsifiers, detergents, and chemical resins.
          </li>
          <li>
            <strong>Synthetic Barium Sulfate:</strong> A filler used in
            plastics, rubbers, coatings, and radiation shielding.
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
    </div>
  );
};

export default PolymersAndResins;
