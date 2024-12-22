import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container" id="footer-container">
        <div className="logo-container">
          <div className="footer-branding">
            <img
              src="assets\logo.png"
              alt="Brand Logo"
              className="footer-logo"
            />
            <div className="footer-overlay"></div>
          </div>

          <div className="footer-follow">
            <p className="footer-text">Follow Us:</p>
            <div className="footer-social-icons">
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook className="icon facebook-icon" />
              </a>
              <a
                href="https://www.twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter className="icon twitter-icon" />
              </a>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="icon linkedin-icon" />
              </a>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="icon instagram-icon" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-container">
        <div className="footer-sections">
          <div className="footer-section">
            <h4>Who We Are</h4>
            <ul>
              <li>Mission & Values</li>
              <li>Company History</li>
              <li>Environmental, Health, Safety & Security</li>
              <li>Diversity, Equity & Inclusion</li>

              <li>Leadership</li>
              <li>Financials</li>
              <li>Suppliers</li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>What We Do</h4>
            <ul>
              <li>Industries</li>
              <li>Solutions</li>
              <li>Licensing</li>
              <li>Product Finder</li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Sustainability</h4>
            <ul>
              <li>Our Story</li>
              <li>Climate Change</li>
              <li>Product Sustainability & Circularity</li>
              <li>Social Responsibility</li>
              <li>UN SDGs</li>
              <li>Impact & Reporting</li>
              <li>Collaborations and Engagements</li>
              <li>Sustainably Smart</li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Media & Events</h4>
            <ul>
              <li>News</li>
              <li>Videos</li>
              <li>Events</li>
              <li>Social</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-line"></div>
        <div className="footer-bottom-content">
          <p>©2024 Powered By Strings Technologies</p>
          <div className="footer-links">
            <a href="/privacy-policy">Privacy Policy</a>
            <a href="/terms-of-use">Terms of Use</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
