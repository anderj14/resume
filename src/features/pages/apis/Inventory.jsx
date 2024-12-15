import React from "react";
import Paragraph from "../../../components/Paragraph";
import Meta from "../../../components/Meta";
import Subtitle from "../../../components/Subtitle";
import Image from "../../../components/Image";
import SmallTitle from "../../../components/SmallTitle";

export default function Inventory() {
  return (
    <div title="Inventory" className="works">
      <div className="container">
        <div className="header">
          <Subtitle subtitle="Inventory" />
          <Paragraph
            paragraph="
          This API is a demo designed to showcase multi-tenant inventory management operations. 
          It includes functionalities for tenant management, user authentication, and basic inventory 
          operations such as creating, updating, and deleting products, brands, categories, and other 
          related entities. The API is built using ASP.NET Core and Entity Framework Core with SQL Server 
          running as an instance in Docker, demonstrating a scalable and flexible architecture suitable 
          for multi-tenant scenarios.
        "
          />
        </div>
        <section className="info-list">
          <ul>
            <li>
              <Meta meta="Repository" />
              <a href="https://github.com/anderj14/inventory-multitenant">
                https://github.com/anderj14/inventory-multitenant
              </a>
            </li>
            <li>
              <Meta meta="Platform" />
              <Paragraph paragraph="Web" />
            </li>
            <li>
              <Meta meta="Stack" />
              <Paragraph paragraph=".NET / SQLServer / Docker" />
            </li>
          </ul>
        </section>
        <div className="images">
          <SmallTitle smallTitle="Images" />
          <Image src="/inventory/inventory-1.webp" alt="Inventory 1" />
          <Image src="/inventory/inventory-2.webp" alt="Inventory 2" />
          <Image src="/inventory/inventory-1.jpg" alt="Inventory 1" />
          <Image src="/inventory/inventory-2.jpg" alt="Inventory 2" />
          <Image src="/inventory/inventory-3.jpg" alt="Inventory 3" />
          <Image src="/inventory/inventory-4.jpg" alt="Inventory 4" />
          <Image src="/inventory/inventory-5.jpg" alt="Inventory 5" />
          <Image src="/inventory/inventory-6.jpg" alt="Inventory 6" />
          <Image src="/inventory/inventory-7.jpg" alt="Inventory 7" />
          <Image src="/inventory/inventory-8.jpg" alt="Inventory 8" />
          <Image src="/inventory/inventory-9.jpg" alt="Inventory 9" />
          <Image src="/inventory/inventory-10.jpg" alt="Inventory 10" />
          <Image src="/inventory/inventory-11.jpg" alt="Inventory 11" />
          <Image src="/inventory/inventory-12.jpg" alt="Inventory 12" />
          <Image src="/inventory/inventory-13.jpg" alt="Inventory 13" />
          <Image src="/inventory/inventory-14.jpg" alt="Inventory 14" />
          <Image src="/inventory/inventory-15.jpg" alt="Inventory 15" />
        </div>
      </div>
    </div>
  );
}
