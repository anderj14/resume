import React from "react";
import Title from "../../components/Title";
import Paragraph from "../../components/Paragraph";

export default function HeroSection() {
  return (
    <div className="heroSection">
      <div className="hero">
        <Title title={"Hello!"} />
        <Paragraph
          paragraph={
            "My name's Andder Frias, Software \
            Engineer specializing in modern, clean, \
            and elegant web applications. I excel in \
            creating robust REST APIs."
          }
        />
      </div>
    </div>
  );
}
