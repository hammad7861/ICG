import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Products.css";

const Products = () => {
  const [viewMode, setViewMode] = useState("categories"); // Switch between 'categories' and 'industry'
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [industries, setIndustries] = useState([]);
  const [selectedIndustry, setSelectedIndustry] = useState("");

  // Fetch data from API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://api.example.com/products"); // Replace with actual API
        setProducts(response.data);
        setFilteredProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    // Fetch categories and industries (example data, update as needed)
    setCategories([
      "Antioxidant",
      "UV-absorbers",
      "Flame Retardants",
      "Optical Brighteners",
      "Pigment & Dye",
    ]);
    setIndustries(["Automotive", "Textiles", "Construction", "Agriculture"]);

    fetchProducts();
  }, []);

  // Handle filtering by category
  const handleCategoryFilter = (category) => {
    setSelectedCategory(category);
    if (category) {
      setFilteredProducts(
        products.filter((product) => product.category === category),
      ); // Adjust API field name
    } else {
      setFilteredProducts(products);
    }
  };

  // Handle filtering by industry
  const handleIndustryFilter = (industry) => {
    setSelectedIndustry(industry);
    if (industry) {
      setFilteredProducts(
        products.filter((product) => product.industry === industry),
      ); // Adjust API field name
    } else {
      setFilteredProducts(products);
    }
  };

  return (
    <div
      className="find-product-container"
      style={{
        backgroundImage: "url('./assets/greenflex.png')", // Directly from the public folder
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className="product-finder">
        <header className="search-header">
          <h1>What are you looking for?</h1>
          <input
            type="text"
            placeholder="What are you searching for?"
            className="search-input"
          />
        </header>

        <div className="filter-tabs">
          <button
            className={`tab-button ${viewMode === "categories" ? "active" : ""}`}
            onClick={() => setViewMode("categories")}
          >
            Search by Categories
          </button>
          <button
            className={`tab-button ${viewMode === "industry" ? "active" : ""}`}
            onClick={() => setViewMode("industry")}
          >
            Search by Industry
          </button>
        </div>

        {viewMode === "categories" && (
          <div className="filter-options">
            {categories.map((category, index) => (
              <label key={index} className="filter-label">
                <input
                  type="checkbox"
                  checked={selectedCategory === category}
                  onChange={() =>
                    handleCategoryFilter(
                      selectedCategory === category ? "" : category,
                    )
                  }
                />
                {category}
              </label>
            ))}
          </div>
        )}

        {viewMode === "industry" && (
          <div className="filter-options">
            {industries.map((industry, index) => (
              <label key={index} className="filter-label">
                <input
                  type="radio"
                  name="industry"
                  checked={selectedIndustry === industry}
                  onChange={() =>
                    handleIndustryFilter(
                      selectedIndustry === industry ? "" : industry,
                    )
                  }
                />
                {industry}
              </label>
            ))}
          </div>
        )}

        <div className="products-section">
          <h2>
            All Available <span>Products</span>
          </h2>
          <div className="products-grid">
            {filteredProducts.map((product) => (
              <div key={product.id} className="product-card">
                <img src={product.image} alt={product.title} />
                <div className="product-info">
                  <h3>{product.title}</h3>
                  <p>CAS {product.casNumber || "N/A"}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="pagination">
          <button className="page-button">&lt;</button>
          <button className="page-button active">1</button>
          <button className="page-button">2</button>
          <button className="page-button">3</button>
          <button className="page-button">4</button>
          <button className="page-button">&gt;</button>
        </div>
      </div>
    </div>
  );
};

export default Products;
