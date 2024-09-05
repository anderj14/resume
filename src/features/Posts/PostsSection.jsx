import React from "react";
import Card from "../../components/Card";
import api from "../../assets/posts/api.png";
import error from "../../assets/posts/error.png";

export default function PostsSection() {
  var apiPost =
    "https://medium.com/@andersonfrias001/building-a-api-net-sqlite-a-comprehensive-guide-086b230439fa";
  var errorPost =
    "https://medium.com/@andersonfrias001/how-to-implement-error-handling-in-your-net-api-b1ab865b3b5f";

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
        </div>
      </div>
    </div>
  );
}
