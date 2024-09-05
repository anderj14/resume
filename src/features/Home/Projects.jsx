import React from "react";
import Card from "../../components/Card";

import dental from "../../assets/dental/dental-5.png";
import rentcar from "../../assets/rentcar/rentcar-1.png";
import wiki from "../../assets/invents/wiki/wiki-1.png";
import game from "../../assets/invents/game/game-1.png";
import news from "../../assets/blognews/diagram-1.png";
import recipe from "../../assets/recipejournay/recipe_1.png";
import Subtitle from "../../components/Subtitle";
import Paragraph from "../../components/Paragraph";
import { Link } from "react-router-dom";

export default function Projects() {
  return (
    <section className="projects-container">
      <div className="content">
        <div className="projects">
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
            <Subtitle subtitle="Some invents" />
            <Paragraph paragraph="These are some API inventions created in .NET" />
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
        <div className="invents">
          <div className="invents-header">
            <Subtitle subtitle="Some API invents" />
            <Paragraph paragraph="These are some API inventions created in .NET" />
          </div>
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
      </div>
    </section>
  );
}
