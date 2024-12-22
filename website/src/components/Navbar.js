// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';  // Add this import

// import './Navbar.css';

// const Navbar = () => {
//   const [dropdownOpen, setDropdownOpen] = useState({
//     ourCompany: true,
//     productsSolutions: false,
//     sustainability: false,
//     career: false,
//   });

//   const toggleDropdown = (key) => {
//     setDropdownOpen((prev) => ({
//       ...prev,
//       [key]: !prev[key],
//     }));
//   };

//   return (
//     <div className="navbar">
//       {/* Logo Section */}
//       <img className="logo-img" src="assets\logo.png" alt="Header Logo" />
//       <div className="header-logo"></div>

//       {/* Navbar Items */}
//       {/* <div className="nav-items">
//       <span className="navbar-link">Our company</span>
//            (
//             <div className="dropdown">
//               <div className="dropdown-left">
//                 <h2>Who we are</h2>
//                 <p>
//                   We are essential chemistry, making progress possible for
//                   generations. Learn about the components that make us who we are.
//                 </p>
//               </div>
//               <div className="dropdown-right">
//                 <Link to="/about-solvay">About Solvay</Link>
//                 <Link to="/purpose">Our Purpose</Link>
//                 <Link to="/management">Management</Link>
//                 <Link to="/process-innovation">Process Innovation</Link>
//                 <Link to="/diversity">Diversity, Equity & Inclusion</Link>
//                 <Link to="/corporate-citizenship">Corporate Citizenship</Link>
//               </div>
//             </div>
//           )} */}
//         {/* Dropdown for Our Company */}
//         <div className="nav-item" onClick={() => toggleDropdown('ourCompany')}>
//           <span>Our Company</span>
//           <span className="dropdown-caret">▼</span>
//           {dropdownOpen.ourCompany && (
//             <div className="dropdown-menu">
//             <Link to="/about-us">About Us</Link>
//              /* <a href="/">History</a>
//             <a href="/">Leadership</a>
//            </div>
//            )}
//        </div>

//         {/* Dropdown for Products & Solutions */}
//         <div className="nav-item" onClick={() => toggleDropdown('productsSolutions')}>
//           <span>Products & Solutions</span>
//           <span className="dropdown-caret">▼</span>
//           {dropdownOpen.productsSolutions && (
//             <div className="dropdown-menu">
//               <a href="/">Product 1</a>
//               <a href="/">Product 2</a>
//             </div>
//           )}
//         </div>

//         {/* Dropdown for Sustainability */}
//         <div className="nav-item" onClick={() => toggleDropdown('sustainability')}>
//           <span>Sustainability</span>
//           <span className="dropdown-caret">▼</span>
//           {dropdownOpen.sustainability && (
//             <div className="dropdown-menu">
//               <a href="/">Sustainability Program</a>
//               <a href="/">Reports</a>
//             </div>
//           )}
//         </div>

//         {/* Non-Dropdown Items */}
//         <div className="nav-item">Media</div>

//         {/* Dropdown for Career */}
//         <div className="nav-item" onClick={() => toggleDropdown('career')}>
//           <span>Career</span>
//           <span className="dropdown-caret">▼</span>
//           {dropdownOpen.career && (
//             <div className="dropdown-menu">
//               <a href="/">Opportunities</a>
//               <a href="/">Internships</a>
//             </div>
//           )}
//         </div>

//         <div className="nav-item">Contact</div>
//       </div>

//       {/* Search and Icons Section */}
//       <div className="icons">
//         <div className="icon">🔍 </div>
//         <div className="icon">🌍</div>
//         <div className="icon">🌙</div>
//       </div>

//       {/* Available Stocks Button */}
//       <div className="available-stocks">Available stocks</div>
//     </div>
//   );
// };

// export default Navbar;

// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

// import './Navbar.css';

// const Navbar = () => {
//   const [dropdownOpen, setDropdownOpen] = useState({
//     ourCompany: true,
//     productsSolutions: false,
//     sustainability: false,
//     career: false,
//   });

//   const toggleDropdown = (key) => {
//     setDropdownOpen((prev) => ({
//       ...prev,
//       [key]: !prev[key],
//     }));
//   };

//   return (
//     <div className="navbar">
//       {/* Logo Section */}
//       <img className="logo-img" src="assets/logo.png" alt="Header Logo" />
//       <div className="header-logo"></div>

//       {/* Navbar Items */}
//       <div className="nav-items">
//         {/* Dropdown for Our Company */}
//         <div className="nav-item" onClick={() => toggleDropdown('ourCompany')}>
//           <span>Our Company</span>
//           <span className="dropdown-caret">▼</span>
//           {dropdownOpen.ourCompany && (
//             <div className="dropdown-menu">
//               <Link to="/dropdown.js">About Us</Link>
//               {/* <a href="/">History</a> */}
//               <a href="./dropdown">Leadership</a>
//             </div>
//           )}
//         </div>

//         {/* Dropdown for Products & Solutions */}
//         <div className="nav-item" onClick={() => toggleDropdown('productsSolutions')}>
//           <span>Products & Solutions</span>
//           <span className="dropdown-caret">▼</span>
//           {dropdownOpen.productsSolutions && (
//             <div className="dropdown-menu">
//               <a href="/">Product 1</a>
//               <a href="/">Product 2</a>
//             </div>
//           )}
//         </div>

//         {/* Dropdown for Sustainability */}
//         {/* <div className="nav-item" onClick={() => toggleDropdown('sustainability')}>
//           <span>Sustainability</span>
//           <span className="dropdown-caret">▼</span>
//           {dropdownOpen.sustainability && (
//             <div className="dropdown-menu">
//               <a href="/">Sustainability Program</a>
//               <a href="/">Reports</a>
//             </div>
//           )}
//         </div> */}

//         {/* Non-Dropdown Items */}
//         <div className="nav-item">Media</div>

//         {/* Dropdown for Career */}
//         <div className="nav-item" onClick={() => toggleDropdown('OurCareer')}>
//           <span>Career</span>
//           <span className="dropdown-caret">▼</span>
//           {dropdownOpen.OurCareer && (
//             <div className="dropdown-menu">
//               <a href="/OurCareer">Opportunities</a>
//               <a href="/">Internships</a>
//             </div>
//           )}
//         </div>

//         <div className="nav-item">Contact</div>
//       </div>

//       {/* Search and Icons Section */}
//       <div className="icons">
//         <div className="icon">🔍</div>
//         <div className="icon">🌍</div>
//         <div className="icon">🌙</div>
//       </div>

//       {/* Available Stocks Button */}
//       <div className="available-stocks">Available stocks</div>
//     </div>
//   );
// };

// export default Navbar;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import "./dropdown.css"; // Include the dropdown styles

const Navbar = () => {
  const [visibleDropdown, setVisibleDropdown] = useState(null);

  // Handlers for showing and hiding dropdowns
  const handleMouseEnter = (key) => {
    setVisibleDropdown(key);
  };

  const handleMouseLeave = () => {
    setVisibleDropdown(null);
  };

  return (
    <div className="navbar">
      {/* Logo Section */}
      <img className="logo-img" src="assets/logo.png" alt="Header Logo" />
      <div className="header-logo"></div>

      {/* Navbar Items */}
      <div className="nav-items">
        {/* Dropdown for Our Company */}

        <div
          className="nav-item"
          onMouseEnter={() => handleMouseEnter("ourCompany")}
          onMouseLeave={handleMouseLeave}
        >
          <span>Our Company</span>
          {visibleDropdown === "ourCompany" && (
            <div className="dropdown-menu">
              <div className="dropdown-left">
                <h2>Who we are</h2>
                <p>
                  ICG Specialty Chemicals FZCO is a leading provider of
                  specialty chemicals, recognized for our commitment to quality
                  and innovation.
                </p>
              </div>
              <div className="dropdown-right">
                <Link to="/about-ICG">About ICG Chemicals</Link>
                <Link to="/management">Management</Link>
                <Link to="/history">Our History</Link>
              </div>
            </div>
          )}
        </div>
        {/* Dropdown for Products & Solutions */}
        <div
          className="nav-item"
          onMouseEnter={() => handleMouseEnter("productsSolutions")}
          onMouseLeave={handleMouseLeave}
        >
          <span>Products & Solutions</span>
          <span className="dropdown-caret">▼</span>
          {visibleDropdown === "productsSolutions" && (
            <div className="dropdown-menu">
              <div className="dropdown-left">
                <h2>Who we are</h2>
                <p>
                  We are essential chemistry, making progress possible for
                  generations. Learn about the components that make us who we
                  are.
                </p>
              </div>
              <div className="dropdown-right">
                <Link to="/About">About Us</Link>
                <Link to="/purpose">Our Purpose</Link>
                <Link to="/management">Management</Link>
                <Link to="/process-innovation">Process Innovation</Link>
                <Link to="/diversity">Diversity, Equity & Inclusion</Link>
                <Link to="/corporate-citizenship">Corporate Citizenship</Link>
              </div>
            </div>
          )}
        </div>

        {/* Media */}
        <div className="nav-item">Media</div>

        {/* Dropdown for Career */}
        <div
          className="nav-item"
          onMouseEnter={() => handleMouseEnter("career")}
          onMouseLeave={handleMouseLeave}
        >
          <span>Career</span>
          <span className="dropdown-caret">▼</span>
          {visibleDropdown === "career" && (
            <div className="dropdown-menu">
              <a href="/OurCareer">Opportunities</a>
              <a href="/">Internships</a>
            </div>
          )}
        </div>

        {/* Contact */}
        <div className="nav-item">Contact</div>
      </div>

      {/* Search and Icons Section */}
      <div className="icons">
        <div className="icon">🔍</div>
        <div className="icon">🌍</div>
        <div className="icon">🌙</div>
      </div>

      {/* Available Stocks Button */}
      <div className="available-stocks">Available stocks</div>
    </div>
  );
};

export default Navbar;
