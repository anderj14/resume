import React from "react";
import Title from "../../components/Title";
import Paragraph from "../../components/Paragraph";

export default function HeroPost() {
  return (
    <div>
      <div className="heroSection">
        <div className="hero">
          <Title title={"Hey!"} />
          <Paragraph
            paragraph={
              "Here you can see some contributions about \
              interesting things about programming, technologies \
              and more."
            }
          />
        </div>
      </div>
    </div>
  );
}
