import React, { useEffect } from "react";
import Paragraph from "../../../components/Paragraph";
import Subtitle from "../../../components/Subtitle";
import Meta from "../../../components/Meta";
import Image from "../../../components/Image";
import SmallTitle from "../../../components/SmallTitle";

export default function Elipson() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div title="elipson" className="works">
      <div className="container">
        <div className="header">
          <Subtitle subtitle="Elipson" />
          <Paragraph
            paragraph="
            Elipson is a web application developed to automate vehicle rental management, 
            making it easy for users to book, consult and manage available cars. The platform 
            optimizes the entire rental process with intuitive features and a modern design, 
            providing an efficient and fluid user experience. Elipson integrates automated 
            processes to simplify vehicle management and improve operational efficiency.
          "
          />
        </div>
        <section className="info-list">
          <ul>
            <li>
              <Meta meta="Repository" />
              <a href="https://github.com/anderj14/rental-car/tree/RentcarV2">
                https://github.com/anderj14/rental-car/tree/RentcarV2
              </a>
            </li>
            <li>
              <Meta meta="Platform" />
              <Paragraph paragraph="Web" />
            </li>
            <li>
              <Meta meta="Stack" />
              <Paragraph paragraph=".NET / Sqlite / SQLServer / JWT / Angular / Bootstrap / Material Design" />
            </li>
          </ul>
        </section>
        <div className="images">
          <SmallTitle smallTitle="Images" />
          <Image src="/rentcar/dealer-4.jpg" alt="Rentar Car 4" />
          <Image src="/rentcar/dealer-5.jpg" alt="Rentar Car 5" />
          <Image src="/rentcar/dealer-6.jpg" alt="Rentar Car 6" />
          <Image src="/rentcar/dealer-7.jpg" alt="Rentar Car 7" />
          <Image src="/rentcar/dealer-8.jpg" alt="Rentar Car 8" />
          <Image src="/rentcar/dealer-9.jpg" alt="Rentar Car 9" />
          <Image src="/rentcar/dealer-10.jpg" alt="Rentar Car 10" />
          <Image src="/rentcar/dealer-11.jpg" alt="Rentar Car 11" />
          <Image src="/rentcar/dealer-12.jpg" alt="Rentar Car 12" />
          <Image src="/rentcar/dealer-13.jpg" alt="Rentar Car 13" />
          <Image src="/rentcar/dealer-14.jpg" alt="Rentar Car 14" />
          <Image src="/rentcar/dealer-16.jpg" alt="Rentar Car 16" />
          <Image src="/rentcar/dealer-17.jpg" alt="Rentar Car 17" />
        </div>
      </div>
    </div>
  );
}
