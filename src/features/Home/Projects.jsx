import React from "react";
import Card from "../../components/Card";

import cardio from "/cardio/cardio-1.jpg";
import dental from "/dental/dental-10.jpg";
import rentcar from "/rentcar/dealer-5.jpg";
import wiki from "/invents/wiki/wiki-1.png";
import game from "/invents/game/game-1.png";
import inventory from "/inventory/inventory-2.webp";
import news from "/blognews/diagram-3.webp";
import recipe from "/recipejournay/recipe_2.webp";
import Subtitle from "../../components/Subtitle";
import Paragraph from "../../components/Paragraph";
import { Link } from "react-router-dom";

export default function Projects() {
  return (
    <section className="projects-container">
      <div className="content">
        <div className="projects">
          <div className="invents-header">
            <Subtitle subtitle="Projects" />
            <Paragraph paragraph="These are some web projects created in multiple technologies." />
          </div>
          <Link to="works/datacardio">
            <Card
              image={cardio}
              title="DataCardio"
              description="Web application"
            />
          </Link>
          <Link to="works/elipson">
            <Card
              image={rentcar}
              title="Elipson"
              description="Web application that offers a detailed catalog of video game consoles."
            />
          </Link>
          <Link to="works/dentalclinic">
            <Card
              image={dental}
              title="Clinical Dental - Old Project"
              description="A robust desktop application designed to streamline dental practice operations."
            />
          </Link>
        </div>
        <div className="invents">
          <div className="invents-header">
            <Subtitle subtitle="API invents" />
            <Paragraph paragraph="These are some API inventions created in .NET, Sqlite, SQLServer, Docker" />
          </div>
          <Link to="works/inventory">
            <Card
              image={inventory}
              title="Inventory"
              description="A demo API showcasing multi-tenant inventory management with tenant isolation and CRUD operations for inventory entities."
            />
          </Link>
          <Link to="works/blognews">
            <Card
              image={news}
              title="BlogNews"
              description="This base API manages a publishing system, allowing different types of users to interact with articles, comments, categories and statuses."
            />
          </Link>
          <Link to="works/recipe">
            <Card
              image={recipe}
              title="Recipe Journey"
              description="An API for cooking recipes where the user can view recipes and select favorite recipes and administrative management."
            />
          </Link>
        </div>
        <div className="invents">
          <div className="invents-header">
            <Subtitle subtitle="Some invents" />
            <Paragraph paragraph="These are some web inventions created in .NET, Angular, Sqlite" />
          </div>
          <Link to="works/encyclopedia">
            <Card
              image={wiki}
              title="Encyclopedia"
              description="A web application that works as an online encyclopedia."
            />
          </Link>
          <Link to="works/gameroom">
            <Card
              image={game}
              title="GameRoom"
              description="Web application that offers a detailed catalog of video game consoles."
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
