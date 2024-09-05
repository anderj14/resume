import React from "react";
import SmallTitle from "./SmallTitle";
import Paragraph from "./Paragraph";

export default function Card(props) {
  const { image, title, description } = props;

  return (
    <div className="card">
      <div className="image">
        <img src={image} alt={title} className="card-image" />
      </div>
      <div className="details">
        <SmallTitle smallTitle={title} />
        <Paragraph paragraph={description} />
      </div>
    </div>
  );
}
