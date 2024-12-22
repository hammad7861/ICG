import React from "react";
import "./OurCareer.css";

const OurCareer = () => {
  return (
    <div className="career-page">
      <header className="career-header">
        <div className="header-overlay">
          <h1 className="career-title">ICG Career</h1>
        </div>
      </header>
      <main className="career-content">
        <section className="career-intro">
          <h2>Our Career</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </section>
        <section className="job-opening">
          <h3>
            Want to join Team{" "}
            <span className="icg-highlight">ICG Chemicals?</span>
          </h3>
          <p>
            Check out our open form below and fill the application form by
            clicking on it.
          </p>
          <div className="job-card">
            <h4>Lab Technicians</h4>
            <p>
              We're looking for a mid-level Lab Technicians to join our team.
            </p>
            <div className="job-tags">
              <span className="job-tag">Hybrid</span>
              <span className="job-tag">Part Time</span>
            </div>
            <button className="view-button">View</button>
          </div>
        </section>
      </main>
      <footer className="career-footer">
        <div className="footer-section">
          <h5>Our Company</h5>
          <ul>
            <li>
              <a href="/about">About ICG Chemicals</a>
            </li>
            <li>
              <a href="/management">Management</a>
            </li>
            <li>
              <a href="/history">Our History</a>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h5>Most Sold</h5>
          <ul>
            <li>
              <a href="/chemicalcategories/Absorber">UV Absorbers</a>
            </li>
            <li>
              <a href="/light-stabilizers">Light Stabilizers (HALS)</a>
            </li>
            <li>
              <a href="/optical-brighteners">Optical Brighteners</a>
            </li>
            <li>
              <a href="/products">Our Products</a>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h5>Media & Events</h5>
          <ul>
            <li>
              <a href="/news">News</a>
            </li>
            <li>
              <a href="/events">Events</a>
            </li>
            <li>
              <a href="/social">Social</a>
            </li>
          </ul>
        </div>
        <div className="footer-section contact">
          <h5>Contact us</h5>
          <ul>
            <li>
              <a href="/offices">Jebel Ali,Dubai UAE</a>
            </li>
            <li>
              <a href="tel:0097148876111">00971 4887 6111</a>
            </li>
            <li>
              <a href="mailto:info@icgchemicals.com">info@icgchemicals.com</a>
            </li>
          </ul>
        </div>
        <div className="footer-bottom">
          <p>&copy;2024 Powered by Strings Technologies</p>{" "}
          <a href="strings.com.pk">Strings Technologies</a>
          <div className="footer-links">
            <a href="/privacy-policy">Privacy Policy</a> |{" "}
            <a href="/terms-of-use">Terms of Use</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default OurCareer;
