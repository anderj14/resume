import React, { useRef, useState } from "react";
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
            I’m Andder Frias, a passionate software developer from the Dominican Republic, 
            dedicated to delivering innovative digital solutions. With extensive experience 
            across all stages of the software development life cycle, I specialize in guiding 
            projects seamlessly from planning and design to implementation. I excel at transforming 
            complex challenges into intuitive, high-performance systems that not only meet technical 
            requirements but also align with business goals and enhance user experiences.
        "
          />
           <a href="/Resume.pdf" download="Andder_Frias_Resume" className="download-btn">
            Download Resume
          </a>
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
