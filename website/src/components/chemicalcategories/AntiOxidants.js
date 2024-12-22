import React, { useEffect, useState } from "react";
import "./AntiOxidants.css";

const Antioxidants = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/api/products")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  return (
    <div className="antioxidants-container">
      {/* Image Section */}
      <div className="image-container">
        <img
          src="./assets/attachment6.png"
          alt="Antioxidants"
          className="header-image"
        />
        <h1>CATEGORY 1: Antioxidants (AN)</h1>
      </div>

      {/* Header Section */}
      <div className="header">
        <h1>Antioxidants for Polymer Protection</h1>
        <p className="intro-text">
          Oxidation is common in polymers exposed to heat, light, oxygen, or
          mechanical stress. Without stabilization, this can lead to serious
          issues such as brittleness, discoloration, loss of mechanical
          properties, and eventually, complete material failure. Antioxidants
          are crucial additives used to protect polymers from degradation due to
          oxidative processes.
        </p>
        <p className="intro-text">
          Antioxidants play a vital role in prolonging the life of polymer
          products by preventing or minimizing these oxidative reactions.
          Antioxidants work by neutralizing the harmful effects of oxidation.
          The oxidative degradation process involves the formation of free
          radicals—highly reactive molecules that propagate chain reactions,
          breaking down polymer chains.
        </p>
        <p className="intro-text">
          Antioxidants used in polymers are broadly classified into Types:
        </p>
        <ol>
          <li>1.1 Primary Antioxidants (Radical Scavengers)</li>
          <li>1.2 Secondary Antioxidants (Peroxide Decomposers)</li>
        </ol>
      </div>

      {/* Content Section */}
      <div className="content-section">
        <h2>Types of Antioxidants</h2>
        <h3>1.1 Primary Antioxidants (Radical Scavengers)</h3>
        <p>
          Primary antioxidants are designed to neutralize free radicals and
          interrupt the oxidation process. These are the first line of defense
          and are effective during the early stages of oxidation. Primary
          antioxidants usually consist of hindered phenols, aromatic amines, and
          metal deactivators. Common examples of primary antioxidants include:
        </p>
        <h4>Sub-types:</h4>
        <ul>
          <li>
            <strong>Hindered Phenols:</strong> Hindered phenolic antioxidants
            enhance polymer durability by offering hydrolysis and extraction
            resistance, preventing yellowing from heat and UV exposure. They
            neutralize free radicals, stopping oxidative degradation, and are
            effective at low concentrations (0.01-0.1%). Commonly used in
            plastics, elastomers, coatings, and adhesives, these antioxidants
            ensure long-term stability with low volatility and non-staining
            properties.
          </li>
          <li>
            <strong>Omniquan AN 1076:</strong> A versatile antioxidant that
            plays a crucial role in extending the service life and performance
            of various polymers, including PE, PP, PVC, PS, ABS, PC, nylon, and
            TPE. Its excellent thermal stability and oxidation resistance make
            it a preferred choice across multiple industries, ensuring the
            durability and quality of finished products.
          </li>
          <li>
            <strong>Aromatic Amines:</strong> These antioxidants are especially
            effective at high temperatures. They act by reacting with
            oxygen-centered radicals and hydroperoxides to prevent further
            oxidative damage. Omniquan AN 5057 is a primary aromatic amine
            antioxidant that is used for polyol and rubber stabilization.
          </li>
          <li>
            <strong>Metal Deactivators:</strong> Metal deactivators are
            characterized by their low melting point and ease of use, providing
            good stability and strong anti-aging properties. They effectively
            deactivate metal ion activity, preventing the acceleration of
            polyolefin degradation, making them ideal for applications in PP/PE
            wire and cable, as well as filled modified materials.
          </li>
        </ul>

        <h3>1.2 Secondary Antioxidants (Peroxide Decomposers)</h3>
        <p>
          Secondary antioxidants, also known as hydroperoxide decomposers, work
          in tandem with primary antioxidants. They decompose hydroperoxides
          formed during the oxidation process into harmless products, preventing
          the formation of more radicals.
        </p>
        <h4>Common secondary antioxidants include:</h4>
        <ul>
          <li>
            <strong>Phosphites/Phosphonites:</strong> These compounds react with
            hydroperoxides, converting them into stable alcohols and thus
            inhibiting further degradation. Phosphites are often used in PVC and
            polycarbonate (PC) to enhance heat stability.
          </li>
          <li>
            <strong>Thioesters:</strong> These sulfur-based compounds are
            particularly effective in systems requiring high-temperature
            stabilization. They decompose hydroperoxides by converting them into
            non-reactive species, protecting the polymer from oxidative
            breakdown.
          </li>
          <li>
            <strong>Thiosynergists:</strong> Provide superior long-term heat
            resistance compared to DSTDP/DLTDP and are odorless. They are ideal
            for long-term stabilization in PP/PE, including filler-modified
            PP/PE, wire, and cable applications.
          </li>
          <li>
            <strong>Antioxidant blends:</strong> These offer excellent
            processing, color, and heat stability with no residual impurities,
            available in dust-free granule form. Typically available in granule
            form, they are easy to handle and reduce dust, making them safer and
            cleaner to work with in industrial environments. They are used in
            polyolefins, PC and PC alloys, nylon, styrenics, elastomers, and POM
            for enhanced durability.
          </li>
        </ul>
        <p>
          Different types of secondary antioxidants include: Omniquan AN 1010,
          Omniquan AN 168, Omniquan AN 126, Omniquan AN 1035, Omniquan AN 1024,
          Omniquan AN 800, Omniquan AN 802.
        </p>

        <h3>Key Benefits:</h3>
        <ul>
          <li>Enhanced material longevity</li>
          <li>Improved processing stability</li>
          <li>Protection from heat and light-induced degradation</li>
        </ul>

        <h3>Industries Served:</h3>
        <ul>
          <li>Automotive</li>
          <li>Packaging</li>
          <li>Electronics</li>
          <li>Construction</li>
          <li>Textiles</li>
          <li>Consumer Goods</li>
          <li>Industrial Equipment</li>
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

export default Antioxidants;
