import React, { useState } from "react";
import "./Navigation.module.css";

const Navigation = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark-mode", !darkMode);
  };

  return (
    <nav className="navigation">
      <ul>{/* Navigation items */}</ul>
      <div className="search-bar">
        <input type="text" placeholder="Search..." />
        <button className="searchButton">Search</button>
      </div>
      <button className="dark-mode-toggle" onClick={toggleDarkMode}>
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>
    </nav>
  );
};

export default Navigation;
