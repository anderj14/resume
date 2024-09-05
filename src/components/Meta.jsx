import React from "react";
import Paragraph from "./Paragraph";

export default function Meta({ meta }) {
  return (
    <div className="meta">
        <Paragraph paragraph={meta}/>
    </div>
  );
}
