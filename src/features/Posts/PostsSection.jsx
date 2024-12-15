import React from "react";
import Card from "../../components/Card";
import api from "/posts/post-1.jpg";
import error from "/posts/post-2.jpg";
import learn from "/posts/post-3.jpg";

export default function PostsSection() {
  var apiPost =
    "https://medium.com/@andersonfrias001/building-a-api-net-sqlite-a-comprehensive-guide-086b230439fa";
  var errorPost =
    "https://medium.com/@andersonfrias001/how-to-implement-error-handling-in-your-net-api-b1ab865b3b5f";
  var learnPost = "https://medium.com/p/bbf85812d5ba";

  return (
    <div className="posts-container">
      <div className="content">
        <div className="posts">
          <a href={apiPost} target="_blank">
            <Card
              image={api}
              title="Building a API .NET & SQLite"
              description="This is a guide to building an API using different design patterns."
            />
          </a>
          <a href={errorPost} target="_blank">
            <Card
              image={error}
              title="How to implement error handling in your .NET API"
              description="Implement error handling in your .NET API by using global exception middleware, custom exception filters, and appropriate HTTP status codes."
            />
          </a>
          <a href={learnPost} target="_blank">
            <Card
              image={learn}
              title="Why Do Programming Exercises You’ll “Never Use” at Work?"
              description="
Programming exercises are vital because they train you to think logically, solve problems systematically, and build the mindset needed to tackle real-world challenges effectively."
            />
          </a>
        </div>
      </div>
    </div>
  );
}
