import React, { useEffect, useState } from "react";
import "./Compounds.css";

const Compounds = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/api/products")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  return (
    <div className="compounds-container">
      {/* Image Section */}
      <div className="image-container">
        <img
          src="./assets/attachment6.png"
          alt="Compounds"
          className="header-image"
        />
        <h1>CATEGORY 13: Compounds</h1>
      </div>

      {/* Header Section */}
      <div className="header">
        <h1>Compounds</h1>
        <p className="intro-text">
          Compounds are versatile materials used across industries to enhance product
          performance, improve processability, and meet specific functional requirements. At ICG
          Specialty Chemicals, we offer a comprehensive range of compounds that deliver
          exceptional quality, consistency, and functionality. Our compounds are tailored to meet
          the stringent demands of key industries such as automotive, construction, electronics,
          and chemicals manufacturing.
        </p>
      </div>

      {/* Content Section */}
      <div className="content-section">
        <h2>Key Compound Products</h2>
        <h3>1. AMP 95 (Amino Methyl Propanol)</h3>
        <p>
          AMP 95 is a multifunctional amine compound widely used as a neutralizing agent,
          dispersing agent, and pH stabilizer in various applications. Known for its excellent
          stability and compatibility with a range of materials, AMP 95 plays a vital role in the
          formulation of coatings, adhesives, and personal care products.
        </p>

        <h3>2. Glycerin</h3>
        <p>
          Glycerin is a versatile, colorless, odorless liquid used extensively in personal care,
          pharmaceuticals, and food industries due to its moisturizing and emollient properties. As a
          humectant, glycerin helps retain moisture in formulations, enhancing product texture and
          stability.
        </p>

        <h3>3. Ethanol 96% and Ethanol 99.9%</h3>
        <p>
          Ethanol is a highly pure alcohol used in a broad spectrum of industries including
          pharmaceuticals, cosmetics, and chemicals. Ethanol 96% and Ethanol 99.9% are ideal for
          high-purity applications, ensuring precision in formulations requiring exact alcohol content.
        </p>

        <h3>4. MDI (Methylene Diphenyl Diisocyanate)</h3>
        <p>
          MDI is a key component in polyurethane production, widely used in the creation of rigid
          foams, elastomers, and adhesives. MDI offers excellent thermal stability and mechanical
          properties, making it suitable for high-performance applications.
        </p>

        <h3>5. TDI (Toluene Diisocyanate)</h3>
        <p>
          TDI is another critical compound in the production of flexible polyurethane foams, used
          extensively in furniture, automotive seating, and mattresses. TDI offers excellent flexibility
          and cushioning properties, ensuring comfort and durability.
        </p>

        <h3>6. Methylene Chloride</h3>
        <p>
          Methylene Chloride is a powerful solvent with a wide range of applications, including paint
          stripping, pharmaceutical production, and chemical processing. Known for its low boiling
          point, it allows for efficient evaporation and easy removal in solvent-based processes.
        </p>

        <h3>7. XLPE (Cross-Linked Polyethylene)</h3>
        <p>
          XLPE is a durable, thermoset plastic known for its superior insulation and chemical
          resistance properties. Cross-linking increases its strength, making it ideal for demanding
          applications where thermal, electrical, and mechanical properties are essential.
        </p>

        <h3>8. HFFR (Halogen-Free Flame Retardant Compounds)</h3>
        <p>
          HFFR Compounds are specially formulated to provide flame retardancy without the use of
          halogenated chemicals, making them environmentally friendly while ensuring high safety
          standards. These compounds are ideal for applications requiring strict fire safety
          regulations.
        </p>

        <h3>Key Industries:</h3>
        <ul>
          <li>Automotive: Compounds like MDI, TDI, and XLPE are integral in manufacturing
              durable, lightweight, and high-performance components for vehicles.</li>
          <li>Construction: Compounds such as MDI and HFFR play a key role in insulation
              materials, ensuring fire safety and thermal efficiency in buildings.</li>
          <li>Electronics: HFFR and XLPE compounds are critical in producing safe, flame-
              retardant wire and cable insulation for electronics and infrastructure.</li>
          <li>Pharmaceuticals: Ethanol and Methylene Chloride are crucial in drug
              manufacturing, serving as solvents and extraction agents for various applications.</li>
          <li>Consumer Goods: Glycerin and Ethanol find extensive use in personal care
              products, cosmetics, and household items.</li>
        </ul>
      </div>

      {/* Highlighted Products */}
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

export default Compounds;
