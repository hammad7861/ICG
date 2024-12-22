import React, { useEffect, useState } from "react";
import axios from "axios";
import "./PolymerProcessingAdditives.css";

const PolymerProcessingAdditives = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("/api/products")
      .then((response) => {
        setProducts(response.data.products);
      })
      .catch((error) => {
        console.error("There was an error fetching the data!", error);
      });
  }, []);

  return (
    <div className="polymers-resins-container">
      {/* Image Header Section */}
      <div className="image-header">
        <img
          src="./assets/polymer-chemistry1.png"
          alt="Polymer Processing Additives"
          className="header-image"
        />
      </div>
      {/* Header Section */}
      <div className="header">
        <h1>Polymer Processing Additives PPA</h1>
        <p className="intro-text">
          In the competitive landscape of polymer manufacturing, achieving
          optimal performance during processing is crucial for creating
          high-quality end products. Omniquan Processing Aids (PPAs) stand out
          as essential additives designed to enhance the processing
          characteristics of polymers, ensuring efficiency and consistency
          throughout production.
        </p>
        <p className="intro-text">
          Omniquan Polymer Processing Aids (PPAs) are specialized additives
          formulated to improve the flow characteristics, reduce melt viscosity,
          and facilitate easier processing of various polymer materials. These
          aids modify the rheological properties of polymers, enabling smoother
          processing and enhancing the overall performance of polymer products.
        </p>
      </div>

      {/* Polymer Processing Additives Section */}
      <div className="additives-section">
        <h2>Omniquan Polymer Processing Additives</h2>
        <ul>
          <li>
            <strong>Omniquan PPA 5920:</strong> This processing aid is designed
            for enhanced flow and reduced viscosity, making it ideal for
            applications requiring improved processing efficiency.
          </li>
          <li>
            <strong>Omniquan PPA 5922:</strong> Aimed at optimizing the
            extrusion and injection molding processes, PPA 5922 significantly
            reduces cycle times while enhancing product quality.
          </li>
          <li>
            <strong>Omniquan PPA 5927:</strong> Excels in providing excellent
            compatibility with various polymers, improving mechanical properties
            and processing behavior.
          </li>
          <li>
            <strong>Omniquan PPA 9613:</strong> Especially formulated for
            demanding applications, this processing aid offers superior thermal
            stability and enhanced processing performance across a range of
            temperatures.
          </li>
          <li>
            <strong>Omniquan Zero Moisture:</strong> A groundbreaking addition,
            Omniquan Zero Moisture is engineered to minimize moisture absorption
            during processing, ensuring consistent quality and performance in
            the final products. This innovative processing aid enhances the
            durability and longevity of the polymers, making it particularly
            valuable in applications where moisture resistance is critical.
          </li>
        </ul>
      </div>

      {/* Uses of Polymer Processing Additives Section */}
      <div className="uses-section">
        <h2>Uses of Polymer Processing Additives</h2>
        <p>
          Omniquan PPAs are crucial in various processing techniques, including:
        </p>
        <ul>
          <li>
            Extrusion: Enhancing polymer flow to prevent die drool and improve
            surface finish.
          </li>
          <li>
            Injection Molding: Reducing cycle times and enhancing mold filling
            for consistent part quality.
          </li>
          <li>
            Blow Molding: Ensuring uniform wall thickness and reducing defects
            in blow-molded components.
          </li>
          <li>
            Film Processing: Improving clarity and mechanical properties of
            films while minimizing stickiness and enhancing handling.
          </li>
        </ul>
      </div>

      {/* Key Benefits Section */}
      <div className="benefits-section">
        <h2>Key Benefits</h2>
        <ul>
          <li>
            Improved Process Efficiency: Reduced processing temperatures and
            energy consumption lead to significant cost savings.
          </li>
          <li>
            Enhanced Product Quality: Optimized flow characteristics minimize
            defects, ensuring a superior finish.
          </li>
          <li>
            Increased Output: Faster cycle times and reduced downtime enhance
            production rates and overall efficiency.
          </li>
          <li>
            Better Material Compatibility: Improved compatibility of polymer
            blends enhances the mechanical properties of the final products.
          </li>
        </ul>
      </div>

      {/* Key Industries Section */}
      <div className="industries-section">
        <h2>Key Industries</h2>
        <ul>
          <li>Plastics and Composites</li>
          <li>Consumer Goods</li>
          <li>Medical Devices</li>
          <li>Textiles</li>
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

export default PolymerProcessingAdditives;
