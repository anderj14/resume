import React from "react";
import Paragraph from "../../../components/Paragraph";
import Meta from "../../../components/Meta";
import Subtitle from "../../../components/Subtitle";
import SmallTitle from "../../../components/SmallTitle";
import Image from "../../../components/Image";

export default function DataCardio() {
  return (
    <div>
      <div
        title="Data Cardio
      "
        className="works"
      >
        <div className="container">
          <div className="header">
            <Subtitle subtitle="DataCardio" />
            <Paragraph paragraph="Required permision" />
            <Paragraph
              paragraph="
            DataCardio is an advanced web application for cardiovascular data management and analysis, 
            designed to optimize the clinical monitoring of patients with heart disease. 
            Developed with .NET, React and SQL Server running as an instance in Docker, 
            allowing for a more agile, efficient and scalable deployment, the platform allows 
            for recording, visualizing and generating detailed reports of medical data. With 
            the implementation of multitenant architecture, DataCardio supports multiple clients 
            (such as hospitals and clinics) independently, guaranteeing security and customization. 
            Implementing efficient design patterns and a clean architecture, DataCardio ensures high 
            performance and a smooth experience, being an ideal solution for healthcare professionals 
            who need to manage medical data and make informed decisions.
          "
            />
          </div>
          <section className="info-list">
            <ul>
              <li>
                <Meta meta="Repository" />
                <Paragraph paragraph="Required permision" />
                <a href="https://github.com/anderj14/ReHeartCareManagement">
                  https://github.com/anderj14/ReHeartCareManagement{" "}
                </a>
              </li>
              <li>
                <Meta meta="Platform" />
                <Paragraph paragraph="Web" />
              </li>
              <li>
                <Meta meta="Stack" />
                <Paragraph paragraph=".NET 8, RESTful APIs, React, SQLServer, Docker, Azure" />
              </li>
            </ul>
          </section>
          <div className="images">
            <SmallTitle smallTitle="Images" />
            <Image src="/cardio/cardio-1.jpg" alt="Data Cardio 1" />
            <Image src="/cardio/cardio-2.jpg" alt="Data Cardio 2" />
            <Image src="/cardio/cardio-3.jpg" alt="Data Cardio 3" />
            <Image src="/cardio/cardio-4.jpg" alt="Data Cardio 4" />
            <Image src="/cardio/cardio-5.jpg" alt="Data Cardio 5" />
          </div>
        </div>
      </div>
    </div>
  );
}
