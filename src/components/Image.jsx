import React from "react";

export default function Image({ src, alt }) {
  return (
    <div className="work-image">
      <img src={src} alt={alt} />
    </div>
  );
}
