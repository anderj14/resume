import React from "react";

export default function Subtitle(props) {
  const { subtitle } = props;
  return (
    <div className="subtitle">
      <h2>{subtitle}</h2>
    </div>
  );
}
