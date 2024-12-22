import React from "react";
import { useNavigate } from "react-router-dom";
import "./ChemicalCategories.css"; // Import the CSS file

const ChemicalCategories = () => {
  const navigate = useNavigate();

  const categories = [
    {
      name: "Antioxidant",
      image: "../assets/attachment6.png",
      path: "/AntiOxidants",
    },
    { name: "UV-absorbers", image: "../assets/uvab.png", path: "/Absorber" },
    {
      name: "Flame retardants",
      image: "../assets/fkamere.png",
      path: "/FlameRetardants",
    },
    {
      name: "Optical Brighteners",
      image: "../assets/opti.png",
      path: "/OpticalBrightners",
    },
    {
      name: "Pigments and Dyes",
      image: "../assets/pigmentsdyes.png",
      path: "/PigmentsDyes",
    },
    { name: "HALS", image: "../assets/hoc.png", path: "/HALS" },
    {
      name: "AntiBlock",
      image: "../assets/Anti-Block-Masterbatch-scaled1.png",
      path: "/AntiBlocks",
    },
    {
      name: "Polymers and Resins",
      image: "../assets/polymers.png",
      path: "/PolymersAndResins",
    },
    {
      name: "Plasticizers",
      image: "../assets/Plastic_Additives_430C_647x3291.png",
      path: "/Plasticizers",
    },
    {
      name: "Nucleating agents",
      image: "../assets/csm_lohtragon-nucleating-agents_923ddb98fc1.png",
      path: "/NucleatingAgents",
    },
    {
      name: "Polymer Processing Additives",
      image: "../assets/polymer-chemistry1.png",
      path: "/PolymerProcessingAdditives",
    },
    {
      name: "Masterbatches",
      image: "../assets/mast.png",
      path: "/MasterBatches",
    },
    {
      name: "Compounds",
      image: "../assets/compounds.png",}
  ];

  const handleCardClick = (path) => {
    navigate(path);
  };

  return (
    <div className="chemical-categories">
      <div className="search-section">
        <h1>Chemical Categories</h1>
        <div className="search-bar">
          <input type="text" placeholder="What are you searching for?" />
        </div>
        <p>
          ICG offers a wide range of products and solutions designed for
          enterprises and small businesses across a variety of industries.
        </p>
      </div>

      <div className="categories">
        <h2>Select the Categories</h2>
        <div className="category-grid">
          {categories.map((category, index) => (
            <div
              key={index}
              className="category-card"
              onClick={() => handleCardClick(category.path)}
            >
              <img src={category.image} alt={category.name} />
              <p>{category.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChemicalCategories;
