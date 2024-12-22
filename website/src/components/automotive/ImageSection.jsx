import * as React from "react";

export function ImageSection({ src, alt, className }) {
  return (
    <img
      loading="lazy"
      src={src}
      alt={alt}
      className={`object-contain ${className}`}
    />
  );
}
