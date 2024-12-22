import React from "react";
import { LocationImage } from "./LocationImage";
import styles from "./LocationMap.module.css";

export const LocationMap = () => {
  const locations = [
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/5b7572a66cb246d79e0c407d9ccc5b29/78a76af47e7721d032b42a3ca63ef83f27ef6f57f2746c70f438d400e6d1075e?apiKey=5b7572a66cb246d79e0c407d9ccc5b29&",
      iconAlt: "Location marker icon",
      officeIcon:
        "https://cdn.builder.io/api/v1/image/assets/5b7572a66cb246d79e0c407d9ccc5b29/9a83598d51b42a620efaf3db8804bab28ce8e43bea23838fe1903356dcda69ae?apiKey=5b7572a66cb246d79e0c407d9ccc5b29&",
      officeIconAlt: "Office building icon",
      officeImage:
        "https://cdn.builder.io/api/v1/image/assets/5b7572a66cb246d79e0c407d9ccc5b29/8d6ce246e1db1078a45acaaa59d89fbffb651bcdcad9d4471cf37509936ee71b?apiKey=5b7572a66cb246d79e0c407d9ccc5b29&",
      officeImageAlt: "Office location photo",
      title: "Main Office",
    },
  ];

  return (
    <section className={styles.worldMap} aria-labelledby="locations-heading">
      <h1 id="locations-heading" className={styles.heading}>
        Our Locations
      </h1>
      <div className={styles.mapContainer} role="presentation">
        <LocationImage
          src="https://cdn.builder.io/api/v1/image/assets/5b7572a66cb246d79e0c407d9ccc5b29/5aeabdad2cfc77b64ef0dd8198f4df6f93e8c399662e6a86f76fbc0f5adf2a6b?apiKey=5b7572a66cb246d79e0c407d9ccc5b29&"
          alt="World map with location markers"
          className={styles.mapImage}
        />
        <div className={styles.locationContainer}>
          {locations.map((location, index) => (
            <div key={index} className={styles.locationWrapper}>
              <LocationImage
                src={location.icon}
                alt={location.iconAlt}
                className={styles.locationIcon}
              />
              <div className={styles.officeContainer}>
                <LocationImage
                  src={location.officeIcon}
                  alt={location.officeIconAlt}
                  className={styles.officeIcon}
                />
                <div className={styles.officeDetails}>
                  <LocationImage
                    src={location.officeImage}
                    alt={location.officeImageAlt}
                    className={styles.officeImage}
                  />
                  <div className={styles.officeTitle}>{location.title}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
