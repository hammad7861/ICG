import React from "react";
import "./OurPartners.css";

const OurPartners = () => {
  const exampleString =
    "This is an example string with a Unicode escape sequence: \u0001";

  return (
    <div className="partners-container">
      <div className="partners-heading">Some of our amazing Partners</div>
      <div className="partners-logos-container">
        <div className="partners-logos">
          <div className="partner-logo">
            <img src="./assets/World Map.svg" alt="Partner Logo 1" />
          </div>
          <img
            className="partner-logo"
            src="/public/assets/partners logo\1.png.png"
            alt="Partner Logo 2"
          />
          <img
            className="partner-logo"
            src="/public/assets/World Map.svg"
            alt="Partner Logo 3"
          />
          <img
            className="partner-logo"
            src="./assets/World Map.svg"
            alt="Partner Logo 4"
          />
          <img
            className="partner-logo"
            src="https://via.placeholder.com/154x118"
            alt="Partner Logo 5"
          />
          <img
            className="partner-logo"
            src="https://via.placeholder.com/122x93"
            alt="Partner Logo 6"
          />
          <img
            className="partner-logo"
            src="https://via.placeholder.com/108x82"
            alt="Partner Logo 7"
          />
        </div>
      </div>
      <div className="partners-separator"></div>
    </div>
  );
};

export default OurPartners;
