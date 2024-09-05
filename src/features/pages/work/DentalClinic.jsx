import React from "react";
import Paragraph from "../../../components/Paragraph";
import Subtitle from "../../../components/Subtitle";
import Meta from "../../../components/Meta";
import Image from "../../../components/Image";
import SmallTitle from "../../../components/SmallTitle";

export default function DentalClinic() {
  return (
    <div title="elipson" className="works">
      <div className="container">
        <div className="header">
          <Subtitle subtitle="DentalClinic" />
          <Paragraph paragraph="Required permision" />
          <Paragraph
            paragraph="
            This dental application manages various aspects of a clinic, including costs 
            and payments, data management in SQL Server, patient monitoring and disease 
            management, diagnostics, soft tissue testing and imaging, offering a comprehensive 
            and efficient solution.
          "
          />
        </div>
        <section className="info-list">
          <ul>
            <li>
              <Meta meta="Repository" />
              <a href="https://github.com/anderj14/DentalClinicManagement">
                https://github.com/anderj14/DentalClinicManagement
              </a>
            </li>
            <li>
              <Meta meta="Platform" />
              <Paragraph paragraph="Windows" />
            </li>
            <li>
              <Meta meta="Stack" />
              <Paragraph paragraph="C# / Windows Forms / SQLServer" />
            </li>
          </ul>
        </section>
        <div className="images">
          <SmallTitle smallTitle="Images" />
          <Image src="dental/dental-1.png" alt="Dental clinic 1" />
          <Image src="dental/dental-2.png" alt="Dental clinic 2" />
          <Image src="dental/dental-3.png" alt="Dental clinic 3" />
          <Image src="dental/dental-4.png" alt="Dental clinic 4" />
          <Image src="dental/dental-5.png" alt="Dental clinic 5" />
          <Image src="dental/dental-6.png" alt="Dental clinic 6" />
        </div>
      </div>
    </div>
  );
}
