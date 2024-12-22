import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./NavigationBar.module.css";

const NavigationBar = () => {
  const [visibleDropdown, setVisibleDropdown] = useState(null);
  const [visibleSubmenu, setVisibleSubmenu] = useState(null);
  const navigate = useNavigate();

  const handleMouseEnter = (key) => {
    setVisibleDropdown(key);
  };

  const handleMouseLeave = () => {
    setVisibleDropdown(null);
    setVisibleSubmenu(null); // Ensure submenu hides when leaving the parent menu
  };

  const handleSubmenuEnter = (key) => {
    setVisibleSubmenu(key);
  };

  const handleNavigate = () => {
    navigate("/AvailableStock"); // Redirects to the desired route
  };

  return (
    <nav className={styles.navbar}>
      <Link to="/">
        <img
          className={styles.logo}
          src="assets/logo.png"
          alt="ICG Chemicals Logo"
        />
      </Link>

      <div className={styles.navItems}>
        {/* Our Company Dropdown */}
        <div
          className={styles.navItem}
          onMouseEnter={() => handleMouseEnter("ourCompany")}
          onMouseLeave={handleMouseLeave}
        >
          <span className={styles.navLabel}>Our Company</span>
          <span className={styles.dropdownCaret}>
            <svg
              width="14"
              height="8"
              viewBox="0 0 16 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.8567 0.96042L15.0779 2.18283L8.42207 8.84102C8.31542 8.94834 8.18859 9.03352 8.0489 9.09164C7.9092 9.14977 7.75939 9.17969 7.60808 9.17969C7.45678 9.17969 7.30697 9.14977 7.16727 9.09164C7.02757 9.03352 6.90075 8.94834 6.7941 8.84102L0.134766 2.18283L1.35603 0.961572L7.60636 7.21075L13.8567 0.96042Z"
                fill="#8AA823"
              />
            </svg>
          </span>
          {visibleDropdown === "ourCompany" && (
            <div className={styles.dropdownMenu}>
              <div className={styles.dropdownLeft}>
                <h2 className={styles.dropdownTitle}>Who we are</h2>
                <p className={styles.dropdownDescription}>
                  ICG Specialty Chemicals FZCO is a leading provider of
                  specialty chemicals, recognized for our commitment to quality
                  and innovation. With our globally trusted brand, Omnistab®,
                  and our own registered trademark, Omniquan®, we serve a wide
                  range of industries, including Masterbatch, Plastics, Resins,
                  Compounding, Inks, and Coatings across the Middle East and
                  Asia.
                </p>
              </div>
              <div className={styles.dropdownRight}>
                <Link to="/AboutPage" className={styles.dropdownLink}>
                  About ICG Chemicals
                </Link>
                <Link to="/CeoMessage" className={styles.dropdownLink}>
                  Management
                </Link>
                <Link to="/TimeLine" className={styles.dropdownLink}>
                  Our History
                </Link>
              </div>
            </div>
          )}
        </div>

        {/* Products And Solutions Dropdown */}
        <div
          className={styles.navItem}
          onMouseEnter={() => handleMouseEnter("productsSolutions")}
          onMouseLeave={handleMouseLeave}
        >
          <span className={styles.navLabel}>Products And Solutions</span>
          <span className={styles.dropdownCaret}>
            <svg
              width="14"
              height="8"
              viewBox="0 0 16 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.8567 0.96042L15.0779 2.18283L8.42207 8.84102C8.31542 8.94834 8.18859 9.03352 8.0489 9.09164C7.9092 9.14977 7.75939 9.17969 7.60808 9.17969C7.45678 9.17969 7.30697 9.14977 7.16727 9.09164C7.02757 9.03352 6.90075 8.94834 6.7941 8.84102L0.134766 2.18283L1.35603 0.961572L7.60636 7.21075L13.8567 0.96042Z"
                fill="#8AA823"
              />
            </svg>
          </span>
          {visibleDropdown === "productsSolutions" && (
            <div className={styles.dropdownMenu}>
              <div className={styles.dropdownLeft}>
                <h2 className={styles.dropdownTitle}>Our Solutions</h2>
                <p className={styles.dropdownDescription}>
                  Our extensive product range includes antioxidants, HALS, UV
                  absorbers, optical brighteners, and more, catering to diverse
                  industry needs.
                </p>
              </div>
              <div className={styles.dropdownRight}>
                <div
                  className={styles.dropdownLink}
                  onMouseEnter={() => handleSubmenuEnter("icgMarket")}
                  onMouseLeave={() => setVisibleSubmenu(null)}
                >
                  ICG Market
                  {visibleSubmenu === "icgMarket" && (
                    <div className={styles.submenu}>
                      <Link to="/Automotive" className={styles.dropdownLink}>
                        Automotive
                      </Link>
                      <Link to="/Electronics" className={styles.dropdownLink}>
                        Electronics
                      </Link>
                      <Link to="/Printing" className={styles.dropdownLink}>
                        Printing
                      </Link>
                      <Link
                        to="/AgriculturePage"
                        className={styles.dropdownLink}
                      >
                        Agriculture
                      </Link>
                      <Link
                        to="/HealthcarePage"
                        className={styles.dropdownLink}
                      >
                        Healthcare
                      </Link>
                    </div>
                  )}
                </div>
                <Link to="/ProductsFinder" className={styles.dropdownLink}>
                  Product Finder
                </Link>
                <Link to="/ChemicalCategories" className={styles.dropdownLink}>
                  Chemical Categories
                </Link>
                <Link to="/brouchers" className={styles.dropdownLink}>
                  Brouchers
                </Link>
              </div>
            </div>
          )}
        </div>

        {/* Media Dropdown */}
        <div
          className={styles.navItem}
          onMouseEnter={() => handleMouseEnter("media")}
          onMouseLeave={handleMouseLeave}
        >
          <span className={styles.navLabel}>Media</span>
          <span className={styles.dropdownCaret}>
            <svg
              width="14"
              height="8"
              viewBox="0 0 16 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.8567 0.96042L15.0779 2.18283L8.42207 8.84102C8.31542 8.94834 8.18859 9.03352 8.0489 9.09164C7.9092 9.14977 7.75939 9.17969 7.60808 9.17969C7.45678 9.17969 7.30697 9.14977 7.16727 9.09164C7.02757 9.03352 6.90075 8.94834 6.7941 8.84102L0.134766 2.18283L1.35603 0.961572L7.60636 7.21075L13.8567 0.96042Z"
                fill="#8AA823"
              />
            </svg>
          </span>
          {visibleDropdown === "media" && (
            <div className={styles.dropdownMenu}>
              <div className={styles.dropdownLeft}>
                <h2 className={styles.dropdownTitle}>Newsroom</h2>
                <p className={styles.dropdownDescription}>
                  What's going on at ICG. Stay connected with our news and
                  events.
                </p>
              </div>
              <div className={styles.dropdownRight}>
                <Link to="/MediaRelease" className={styles.dropdownLink}>
                  Media and News
                </Link>
                <Link to="/Gallery" className={styles.dropdownLink}>
                  Events
                </Link>
              </div>
            </div>
          )}
        </div>

        {/* Career Dropdown */}
        <div
          className={styles.navItem}
          onMouseEnter={() => handleMouseEnter("career")}
          onMouseLeave={handleMouseLeave}
        >
          <span className={styles.navLabel}>Career</span>
          <span className={styles.dropdownCaret}>
            <svg
              width="14"
              height="8"
              viewBox="0 0 16 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.8567 0.96042L15.0779 2.18283L8.42207 8.84102C8.31542 8.94834 8.18859 9.03352 8.0489 9.09164C7.9092 9.14977 7.75939 9.17969 7.60808 9.17969C7.45678 9.17969 7.30697 9.14977 7.16727 9.09164C7.02757 9.03352 6.90075 8.94834 6.7941 8.84102L0.134766 2.18283L1.35603 0.961572L7.60636 7.21075L13.8567 0.96042Z"
                fill="#8AA823"
              />
            </svg>
          </span>
          {visibleDropdown === "career" && (
            <div className={styles.dropdownMenu}>
              <div className={styles.dropdownLeft}>
                <h2 className={styles.dropdownTitle}>Join Our Team</h2>
                <p className={styles.dropdownDescription}>
                  Explore opportunities to grow your career with ICG Chemicals.
                </p>
              </div>
              <div className={styles.dropdownRight}>
                <Link to="/CareerPage" className={styles.dropdownLink}>
                  ICG Career
                </Link>
                <Link to="/GalleryThumbnail" className={styles.dropdownLink}>
                  Gallery
                </Link>
              </div>
            </div>
          )}
        </div>

        {/* Contact */}
        <div className={styles.navItem}>
          <Link to="/contact" className={styles.navLabel}>
            Contact
          </Link>
        </div>
      </div>

      {/* Navigation Actions */}
      <div className={styles.navActions}>
        <div className={styles.iconGroup}>
          <button className={styles.iconButton} aria-label="Search">
            <img
              src="./assets/Vector (1).svg"
              alt="Search"
              className={styles.icon}
            />
          </button>
        </div>
        <button className={styles.stocksButton} onClick={handleNavigate}>
          Available Stocks
        </button>
      </div>
    </nav>
  );
};

export default NavigationBar;
