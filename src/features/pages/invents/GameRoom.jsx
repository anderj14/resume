import React from "react";
import Paragraph from "../../../components/Paragraph";
import Subtitle from "../../../components/Subtitle";
import Meta from "../../../components/Meta";
import Image from "../../../components/Image";
import SmallTitle from "../../../components/SmallTitle";

export default function GameRoom() {
  return (
    <div title="elipson" className="works">
      <div className="container">
        <div className="header">
          <Subtitle subtitle="GameRoom" />
          <Paragraph
            paragraph="
            Web application that offers a detailed catalog of video game consoles.
            Users can access complete technical information for each console. In addition, 
            the application includes a catalog of games compatible with these consoles, also 
            providing detailed technical information about each game.
          "
          />
        </div>
        <section className="info-list">
          <ul>
            <li>
              <Meta meta="Repository" />
              <a href="https://github.com/anderj14/Games">
                https://github.com/anderj14/Games
              </a>
            </li>
            <li>
              <Meta meta="Platform" />
              <Paragraph paragraph="Web" />
            </li>
            <li>
              <Meta meta="Stack" />
              <Paragraph paragraph=".NET / Sqlite / Angular / Angular Material" />
            </li>
          </ul>
        </section>
        <div className="images">
          <SmallTitle smallTitle="Images" />
          <Image src="/invents/game/game-1.png" alt="game 1" />
          <Image src="/invents/game/game-2.png" alt="game 2" />
          <Image src="/invents/game/game-3.png" alt="game 3" />
          <Image src="/invents/game/game-4.png" alt="game 4" />
        </div>
      </div>
    </div>
  );
}
