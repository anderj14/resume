import React from "react";
import Paragraph from "../../components/Paragraph";
import Subtitle from "../../components/Subtitle";

export default function ContactSection() {
  return (
    <section className="contact-section">
      <div className="contact-title">
        <Subtitle subtitle="Interesting in contact me ?" />
      </div>
      <div className="contact-text">
        <Paragraph paragraph="Let's talk projects, collaborations, or anything design!" />
      </div>
      <button className="contact-button">Get in touch</button>
    </section>
  );
}
