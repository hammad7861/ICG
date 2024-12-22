import React from "react";

export const GalleryImage = ({ src, alt, className }) => {
  return <img loading="lazy" src={src} alt={alt} className={className} />;
};
