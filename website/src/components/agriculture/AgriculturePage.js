import React from "react";
import "./AgriculturePage.js";

const AgriculturePage = () => {
  return (
    <div className="agriculture-page">
      <div className="header-section">
        <div className="header-text">
          <h1>Agriculture, Food, and Feed</h1>
        </div>
      </div>

      <div className="solutions-section">
        <div className="solution">
          <h2>Agriculture</h2>
          <h3>Crop Protection and Pest Management</h3>
          <p>
            <strong>Challenges:</strong> Safeguarding crops from pests and diseases while ensuring sustainability and compliance with regulations.
          </p>
          <p>
            <strong>Solutions:</strong>
            <ul>
              <li>Omniquan FR200: A non-halogenated flame retardant used in agricultural films to provide flame resistance and UV stability, protecting crops from environmental stress and enhancing film longevity.</li>
              <li>Omniquan Dicumene: Used as a stabilizer for agrochemical formulations, improving the performance and shelf life of pest control agents.</li>
            </ul>
          </p>
        </div>

        <div className="solution">
          <h3>Soil Enhancement and Fertilizers</h3>
          <p>
            <strong>Challenges:</strong> Fertilizers must be effective and stable under various environmental conditions, while minimizing their impact on the environment.
          </p>
          <p>
            <strong>Solutions:</strong>
            <ul>
              <li>Omniquan AN 1010: Enhances the stability of fertilizers and additives by preventing moisture absorption and ensuring effective nutrient delivery to the soil.</li>
            </ul>
          </p>
        </div>

        <div className="solution">
          <h3>Agricultural Films and Greenhouse Applications</h3>
          <p>
            <strong>Challenges:</strong> Greenhouse films need UV protection, thermal insulation, and durability in extreme weather conditions.
          </p>
          <p>
            <strong>Solutions:</strong>
            <ul>
              <li>Omniquan FR TCPP: A non-halogenated flame retardant ideal for agricultural films, offering excellent UV resistance and improving the durability of greenhouse covers.</li>
              <li>OMNIQUAN TCPP 1: A halogenated phosphate ester used as a flame retardant and plasticizer, highly effective in reducing the flammability of materials and compatible with a wide range of polymers, including polyurethane and PVC.</li>
            </ul>
          </p>
        </div>
      </div>

      <div className="image-section">
        <img src="./assets/agriculture_image.png" alt="Agriculture" />
      </div>

      <div className="solutions-section">
        <div className="solution">
          <h2>Feed Industry Segments</h2>
          <h3>Animal Feed Additives</h3>
          <p>
            <strong>Challenges:</strong> Feed additives must enhance animal health, promote growth, and improve feed stability while ensuring safety and compliance.
          </p>
          <p>
            <strong>Solutions:</strong>
            <ul>
              <li>Omniquan AN1726: An antioxidant for animal feed products, helping to preserve the nutritional value of fats and oils in feed, extending their shelf life and improving feed quality.</li>
              <li>Omniquan AN 1520: An antioxidant used in feed formulations to prevent the oxidative degradation of nutrients, ensuring optimal quality for animal consumption.</li>
            </ul>
          </p>
        </div>

        <div className="solution">
          <h3>Feed Storage and Packaging</h3>
          <p>
            <strong>Challenges:</strong> Proper storage and packaging are vital to maintaining feed quality and preventing spoilage.
          </p>
          <p>
            <strong>Solutions:</strong>
            <ul>
              <li>Omniquan AN 1035: Used in feed packaging, this product provides anti-static and moisture-resistant properties, keeping the feed fresh and secure during storage.</li>
              <li>Omniquan AN 5057: Enhances the durability and protective qualities of feed packaging materials, preventing contamination and preserving feed integrity.</li>
            </ul>
          </p>
        </div>
      </div>

      <div className="image-section">
        <img src="./assets/feed_image.png" alt="Feed Industry" />
      </div>

      <div className="solutions-section">
        <div className="solution">
          <h2>Food Industry Segments</h2>
          <h3>Food Packaging</h3>
          <p>
            <strong>Challenges:</strong> Food packaging must ensure product freshness, prevent contamination, and comply with stringent food safety standards.
          </p>
          <p>
            <strong>Solutions:</strong>
            <ul>
              <li>Omniquan AN 1330: Used in food packaging films, this antioxidant helps maintain the freshness of food products by preventing oxidative degradation.</li>
              <li>Omniquan BHT (Technical): A powerful antioxidant that prevents the oxidation of fats and oils in packaged food, preserving flavor and nutritional quality.</li>
              <li>OMNIQUAN AN 1024 MD and OMNIQUAN AN 1726: Enhance the stability of polymer formulations, supporting a broad range of applications from packaging to processing aids.</li>
            </ul>
          </p>
        </div>

        <div className="solution">
          <h3>Food Preservation</h3>
          <p>
            <strong>Challenges:</strong> Maintaining the freshness, flavor, and nutritional content of food products while complying with safety standards.
          </p>
          <p>
            <strong>Solutions:</strong>
            <ul>
              <li>Omniquan AN 245: Used in food products to prevent the degradation of flavors and nutrients, ensuring long-term preservation without compromising safety.</li>
              <li>Omniquan AN 626: For processed food packaging, extending the shelf life by preventing oxidation and moisture infiltration.</li>
            </ul>
          </p>
        </div>

        <div className="solution">
          <h3>Food Processing</h3>
          <p>
            <strong>Challenges:</strong> Food additives need to support the processing of ingredients while ensuring that nutritional integrity is preserved.
          </p>
          <p>
            <strong>Solutions:</strong>
            <ul>
              <li>Omniquan AN 800: Protects food oils and fats from oxidation during processing, ensuring that the final product retains its quality and taste.</li>
            </ul>
          </p>
        </div>
      </div>

      <div className="image-section">
        <img src="./assets/food_image.png" alt="Food Industry" />
      </div>

      <div className="footer-section">
        <p>
          At ICG Chemical, we’re dedicated to driving sustainability and efficiency in the agricultural, feed, and food industries with cutting-edge materials and solutions. Our portfolio enables our customers to meet the evolving demands of the market, ensuring a cleaner and more efficient future.
        </p>
      </div>
    </div>
  );
};

export default AgriculturePage;
