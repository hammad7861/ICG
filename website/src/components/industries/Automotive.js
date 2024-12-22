import React from "react";
import "./Automotive.css";

const Automotive = () => {
  return (
    <div className="Automotive-page">
      <div className="header-section-auto">
        <div className="header-text">
          <h1>Automotive</h1>
        </div>
      </div>

      <div className="content-section">
        <div className="text-section">
          <h2>Thermal Management of Vehicles</h2>
          <p>
            ICG Chemical proudly distributes Nocolok®, Solvay's renowned
            brazing solution, widely used in automotive thermal management
            systems. Known for its superior performance in joining aluminum
            parts, Nocolok® ensures that manufacturers benefit from reliable,
            high-efficiency brazing processes. The result is durable,
            lightweight assemblies that comply with the automotive industry's
            rigorous standards.
          </p>
          <h3>E-Mobility: Advancing Battery Technologies</h3>
          <p>
            ICG Chemical powers electric mobility with advanced battery
            solutions. Solvay’s Interox® VOLT50 supports metal recovery from
            recycled batteries, while LiTFSI, LiFSI, and M-TFSI salts enhance
            battery performance. Our TAB additives boost electrolyte capacity
            and voltage, enabling longer-lasting batteries.
          </p>
        </div>

        <div className="image-section">
          <img
            src="./assets/image (6).png"
            alt="Printer with vivid colors"
            style={{ width: "556px", height: "476px", objectFit: "cover" }}
          />
        </div>
      </div>

      {/* Solutions Section */}

      <div className="image-section">
        <img src="./assets/image (7).png" alt="Printer with vivid colors" />
      </div>
      <div className="solutions-section">
        <div className="solution">
          <h3>Tires: Safe and Bio-Based Solutions</h3>
          <p>
            Tires contribute to 20% of a vehicle’s fuel consumption due to
            rolling resistance. ICG Chemical provides Solvay's innovative
            materials designed to improve tire energy efficiency. Our highly
            dispersible silica (HDS) range, including Zeosil®, made from
            bio-based sodium silicate sourced from rice husk ash, significantly
            reduces rolling resistance while enhancing tire wear resistance.
            Collaborating with Bridgestone, we offer TECHSYN tire compounds,
            which deliver a sustainable, high-performance solution for extended
            vehicle range.
          </p>
        </div>

        <div className="solution">
          <h3>Body and Chassis: Sustainable Innovations</h3>
          <p>
            ICG Chemical brings forward cutting-edge solutions for body and
            chassis applications that prioritize sustainability. Our Alve-One®
            Foaming Solutions, made from sodium bicarbonate, offer a safe,
            eco-friendly alternative for automotive interiors, contributing to a
            reduced carbon footprint. We also distribute Augeo®, Solsys® Coat
            MA, and Solsys® Coat IBA, high-performance bio-based solvents for
            automotive coatings. For durable engineering plastics, Rhodianyl
            polyamide 6.6 polymers, including a 100% recycled grade, provide
            sustainable options for various automotive components.
          </p>
        </div>
      </div>

      <div className="image-section">
        <img src="./assets/image (8).png" alt="Printer with vivid colors" />
      </div>
      <div className="content-section">
        <div className="text-section">
          <h2>Internal Combustion Engines (ICE): Emission Control Catalyst</h2>
          <p>
            ICG Chemical is at the forefront of reducing emissions in
            traditional internal combustion engines. Through products like
            Actalys® and Optalys®, along with high-stability alumina, we
            provide the essential materials for producing automotive emission
            control catalysts. Our Eolys PowerFlex® fuel-borne catalyst ensures
            rapid and thorough particulate filter regeneration, removing up to
            99.9% of particulate emissions. These solutions also contribute to
            lower fuel consumption while improving thermal resistance and
            stability.
          </p>
        </div>
      </div>

      {/* Footer Section */}
      <div className="footer-section">
        <p>
          At ICG Chemical, we’re dedicated to driving sustainability and
          efficiency in the automotive industry with cutting-edge materials and
          solutions. Our portfolio enables our customers to meet the evolving
          demands of the market, ensuring a cleaner and more efficient future
          for mobility.
        </p>
      </div>
    </div>
  );
};

export default Automotive;
