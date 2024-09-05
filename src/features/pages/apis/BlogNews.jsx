import React from "react";
import Paragraph from "../../../components/Paragraph";
import Subtitle from "../../../components/Subtitle";
import Meta from "../../../components/Meta";
import Image from "../../../components/Image";
import SmallTitle from "../../../components/SmallTitle";

export default function BlogNews() {
  return (
    <div title="elipson" className="works">
      <div className="container">
        <div className="header">
          <Subtitle subtitle="BlogNews" />
          <Paragraph
            paragraph="
            The BlogNews API is a robust publication management system that allows users to interact 
            with articles, comments, categories, and statuses within a blogging platform. 
            This API provides full functionality for creating, reading, updating, and deleting articles 
            and comments. Additionally, it includes a JWT-based authentication system to manage user 
            roles and permissions, ensuring that only authorized users can perform certain actions.
          "
          />
        </div>
        <section className="info-list">
          <ul>
            <li>
              <Meta meta="Repository" />
              <a href="https://github.com/anderj14/blognews">
                https://github.com/anderj14/blognews
              </a>
            </li>
            <li>
              <Meta meta="Platform" />
              <Paragraph paragraph="Web" />
            </li>
            <li>
              <Meta meta="Stack" />
              <Paragraph paragraph=".NET / Sqlite / JWT" />
            </li>
          </ul>
        </section>
        <div className="images">
          <SmallTitle smallTitle="Images" />
          <Image src="blognews/diagram-1.png" alt="Diagram 1" />
          <Image src="blognews/diagram-2.png" alt="Diagram 2" />
          <Image src="blognews/diagram-3.png" alt="Diagram 3" />
          
          <Image src="blognews/blog-1.png" alt="Blog 1" />
          <Image src="blognews/blog-2.png" alt="Blog 2" />
          <Image src="blognews/blog-3.png" alt="Blog 3" />
          <Image src="blognews/blog-4.png" alt="Blog 4" />
        </div>
      </div>
    </div>
  );
}
