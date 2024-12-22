import React, { useEffect, useState } from "react";
import axiosInstance from "../axiosInstance"; // Import the axios instance
import "./AvailableStock.css";
import { useNavigate } from "react-router-dom";

const AvailableStock = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  // Fetch products from API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axiosInstance.get("/products/?page=1&limit=10");
        setProducts(response.data.data); // Assuming the response structure has data inside data
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  const handleCardClick = (productId) => {
    navigate(`/product/${productId}`); // Redirect to the product detail page
  };

  return (
    <div className="available-stock">
      <div className="header-section">
        <h1>Available Stocks</h1>
      </div>
      <div className="products-section">
        <h2>
          All Available <span>Products</span>
        </h2>
        <div className="products-grid">
          {products.length > 0 ? (
            products.map((product) => (
              <div
                key={product.id}
                className="product-card"
                onClick={() => handleCardClick(product.id)}
              >
                <img src={product.image} alt={product.title} />
                <div className="product-info">
                  <h3>{product.title}</h3>
                  <p>${product.price}</p>
                </div>
              </div>
            ))
          ) : (
            <p>Loading products...</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default AvailableStock;
