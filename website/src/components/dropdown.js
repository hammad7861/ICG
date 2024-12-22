import React, { useState } from "react";
import "./dropdown.css"; // Make sure to include your CSS file

function App() {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  // Handlers for showing and hiding the dropdown
  const handleMouseEnter = () => {
    setDropdownVisible(true);
  };

  const handleMouseLeave = () => {
    setDropdownVisible(false);
  };

  return (
    <div className="App">
      <nav className="navbar">
        {/* <div className="navbar-logo">
          <h1>ICG</h1>
        </div> */}
        <div>
          <ul className="navbar-menu">
            <li
              className="navbar-item"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <span className="navbar-link">Our company</span>
              {dropdownVisible && (
                <div className="dropdown">
                  <div className="dropdown-left">
                    <h2>Who we are</h2>
                    <p>
                      We are essential chemistry, making progress possible for
                      generations. Learn about the components that make us who
                      we are.
                    </p>
                  </div>
                  <div className="dropdown-right">
                    <a href="/about-solvay">About ICG</a>
                    <a href="/purpose">Our Purpose</a>
                    <a href="/management">Management</a>
                    <a href="/process-innovation">Process Innovation</a>
                    <a href="/diversity">Diversity, Equity & Inclusion</a>
                    <a href="/corporate-citizenship">Corporate Citizenship</a>
                  </div>
                </div>
              )}
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default App;
