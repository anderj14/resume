import React, { useEffect } from "react";
import Paragraph from "../../../components/Paragraph";
import Subtitle from "../../../components/Subtitle";
import Meta from "../../../components/Meta";
import Image from "../../../components/Image";
import SmallTitle from "../../../components/SmallTitle";

export default function Encyclopedia() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div title="elipson" className="works">
      <div className="container">
        <div className="header">
          <Subtitle subtitle="Encyclopedia" />
          <Paragraph
            paragraph="
            A web application that works as an online encyclopedia, using the Wikipedia API. 
            Users can search terms and words to get detailed information directly from Wikipedia.
          "
          />
        </div>
        <section className="info-list">
          <ul>
            <li>
              <Meta meta="Repository" />
              <a href="https://github.com/anderj14/Encyclopedia">
                https://github.com/anderj14/Encyclopedia
              </a>
            </li>
            <li>
              <Meta meta="Platform" />
              <Paragraph paragraph="Web" />
            </li>
            <li>
              <Meta meta="Stack" />
              <Paragraph paragraph="Wikipedia API / Angular" />
            </li>
          </ul>
        </section>
        <div className="images">
          <SmallTitle smallTitle="Images" />
          <Image src="/invents/wiki/wiki-1.png" alt="wiki 1" />
          <Image src="/invents/wiki/wiki-2.png" alt="wiki 2" />
        </div>
      </div>
    </div>
  );
}
