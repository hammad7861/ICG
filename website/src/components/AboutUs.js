import React from "react";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <div className="about-us">
      <div className="about-us-image">
        <img src="https://your-image-url.com" alt="Industrial Background" />
        <div className="about-us-title">
          <h1>
            About <span>ICG</span>
          </h1>
        </div>
      </div>
      <div className="about-us-content">
        <h2>
          Ensuring sustainable growth <br />{" "}
          <span>for our planet and its people.</span>
        </h2>
        <p>
          At ICG Chemicals, we drive progress with innovative, sustainable
          solutions across diverse sectors. With over 160 years of expertise, we
          lead in environmentally friendly chemistry, shaping a future where
          everyone thrives. From pioneering products to mastering innovation,
          we’re committed to advancing essential chemistry for generations to
          come.
        </p>
        <div className="about-us-stats">
          <div className="stat-item">
            <h3>+1k</h3>
            <p>Satisfied Clients</p>
          </div>
          <div className="stat-item">
            <h3>+100</h3>
            <p>Projects Completed</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
