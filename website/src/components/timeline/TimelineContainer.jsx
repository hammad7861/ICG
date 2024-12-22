import React from "react";
import "./TimelineContainer.css";

const TimelineContainer = () => {
  return (
    <div className="Automotive-page">
      <div className="header-section-auto">
        <div className="header-text">
          <h1>ICG History</h1>
        </div>
      </div>

      <div className="content-section">
        <div className="text-section">
          <h2>
            ICG Chemical Milestones:{" "}
            <div>
              <h2>A Journey of Innovation and Sustainability</h2>
            </div>
          </h2>
        </div>
      </div>

      <div className="image-section">
        <img src="./assets/Story.png" alt="Printer with vivid colors" />
      </div>
    </div>
  );
};

export default TimelineContainer;
