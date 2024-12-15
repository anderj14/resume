import React, { useEffect } from "react";
import Paragraph from "../../../components/Paragraph";
import Subtitle from "../../../components/Subtitle";
import Meta from "../../../components/Meta";
import Image from "../../../components/Image";
import SmallTitle from "../../../components/SmallTitle";

export default function DentalClinic() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div title="elipson" className="works">
      <div className="container">
        <div className="header">
          <Subtitle subtitle="DentalClinic" />
          <Paragraph paragraph="Required permision" />
          <Paragraph
            paragraph="
            DentalCare is a desktop application developed for the comprehensive management of 
            dental offices, optimizing administrative and clinical processes through features 
            such as registration and consultation of patient information and medical history, 
            efficient appointment control, detailed treatment monitoring, integration with medical 
            images and automated generation of invoices to facilitate financial administration.
          "
          />
        </div>
        <section className="info-list">
          <ul>
            <li>
              <Meta meta="Repository" />
              <Paragraph paragraph="Required permision" />
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
          <Image src="/dental/dental-1.png" alt="Dental clinic 1" />
          <Image src="/dental/dental-2.png" alt="Dental clinic 2" />
          <Image src="/dental/dental-3.png" alt="Dental clinic 3" />
          <Image src="/dental/dental-4.png" alt="Dental clinic 4" />
          <Image src="/dental/dental-5.png" alt="Dental clinic 5" />
          <Image src="/dental/dental-6.png" alt="Dental clinic 6" />
        </div>
      </div>
    </div>
  );
}
