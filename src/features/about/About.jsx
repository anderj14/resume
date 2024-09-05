import React, { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import SmallTitle from "../../components/SmallTitle";
import Paragraph from "../../components/Paragraph";

export default function About() {
  const form = useRef();
  const [successMessage, setSuccessMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_bar3ihm", "template_obvl6ek", form.current, {
        publicKey: "FEzCvr4FMSuNfeXTF",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          setSuccessMessage("Your message has been sent successfully!!");
          form.current.reset();

          setTimeout(() => {
            setSuccessMessage("");
          }, 5000);
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div className="about">
      <div className="about-section">
        <section className="about-me">
          <SmallTitle smallTitle="Hello! Im Andder Frias." />
          <Paragraph
            paragraph="
            I am Anderson Frias, a passionate Dominican software developer 
            with a keen interest in creating innovative digital solutions. 
            My experience is based on methodologies such as RUP and SCRUM, 
            where I excel at seamlessly guiding projects through system analysis, 
            design, and implementation. Whether it's gathering meticulous requirements 
            or strategically planning and designing systems, I love turning complex challenges 
            into user-friendly solutions.
        "
          />
        </section>
        <section className="contact">
          <form ref={form} onSubmit={sendEmail}>
            <div className="form-field">
              <label>Name *</label>
              <input type="text" name="user_name" />
            </div>
            <div className="form-field">
              <label>Email *</label>
              <input type="email" name="user_email" />
            </div>
            <div className="form-field">
              <label>Message *</label>
              <textarea name="message" />
            </div>
            <input className="submit" type="submit" value="Submit" />

            {successMessage && (
              <div className="message">
                <p className="success-message">{successMessage}</p>
              </div>
            )}
          </form>
        </section>
      </div>
    </div>
  );
}
