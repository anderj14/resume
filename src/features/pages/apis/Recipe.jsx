import React from "react";
import Paragraph from "../../../components/Paragraph";
import Subtitle from "../../../components/Subtitle";
import Meta from "../../../components/Meta";
import Image from "../../../components/Image";
import SmallTitle from "../../../components/SmallTitle";

export default function Recipe() {
  return (
    <div title="elipson" className="works">
      <div className="container">
        <div className="header">
          <Subtitle subtitle="Recipe Journey" />
          <Paragraph
            paragraph="
            The Recipe Journey API is a system for managing and browsing recipes. This API allows users 
            to search, view, and manage recipes, as well as select and manage favorite recipes. 
            The system also includes administration functionalities so that users with permissions 
            can add, edit, and delete recipes, making it an ideal tool for both cooking enthusiasts and 
            culinary content managers.
          "
          />
        </div>
        <section className="info-list">
          <ul>
            <li>
              <Meta meta="Repository" />
              <a href="https://github.com/anderj14/RecipeJourney">
                https://github.com/anderj14/RecipeJourney
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
          <Image src="recipejournay/recipe_1.png" alt="Recipe 1" />
          <Image src="recipejournay/recipe_2.png" alt="Recipe 2" />
          <Image src="recipejournay/recipe_3.png" alt="Recipe 3" />
          <Image src="recipejournay/recipe_4.png" alt="Recipe 4" />
          <Image src="recipejournay/recipe_5.png" alt="Recipe 5" />
          <Image src="recipejournay/recipe_6.png" alt="Recipe 6" />
          <Image src="recipejournay/recipe_7.png" alt="Recipe 7" />
          <Image src="recipejournay/recipe_8.png" alt="Recipe 8" />
          <Image src="recipejournay/recipe_9.png" alt="Recipe 9" />
          <Image src="recipejournay/recipe_10.png" alt="Recipe 10" />
        </div>
      </div>
    </div>
  );
}
