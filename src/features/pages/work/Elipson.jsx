import React from "react";
import Paragraph from "../../../components/Paragraph";
import Subtitle from "../../../components/Subtitle";
import Meta from "../../../components/Meta";
import Image from "../../../components/Image";
import SmallTitle from "../../../components/SmallTitle";


export default function Elipson() {
  return (
    <div title="elipson" className="works">
      <div className="container">
        <div className="header">
          <Subtitle subtitle="Elipson" />
          <Paragraph
            paragraph="
            It is a web platform designed to simplify the car rental process for customers 
            and fleet management for rental companies. Provides an easy-to-use interface 
            for customers to search for available vehicles and make reservations. 
            For administrators, it offers robust tools to manage car inventory, reservations 
            and customer information.
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
              <Paragraph paragraph=".NET / Sqlite / MySQL / JWT / Angular / Bootstrap / Material Design" />
            </li>
          </ul>
        </section>
        <div className="images">
          <SmallTitle smallTitle="Images"/>
          <Image src="/rentcar/rentcar-1.png" alt="Rentar Car 1" />
          <Image src="/rentcar/rentcar-2.png" alt="Rentar Car 2" />
          <Image src="/rentcar/rentcar-3.png" alt="Rentar Car 3" />
          <Image src="/rentcar/rentcar-4.png" alt="Rentar Car 4" />
          <Image src="/rentcar/rentcar-5.png" alt="Rentar Car 5" />
          <Image src="/rentcar/rentcar-6.png" alt="Rentar Car 6" />
        </div>
      </div>
    </div>
  );
}
