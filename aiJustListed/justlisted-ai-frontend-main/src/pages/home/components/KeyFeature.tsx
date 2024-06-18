import React from "react";
import "./keyfeature.scss";
import KeyCard from "./KeyCard";
function KeyFeature() {
  return (
    <div className="keyfeature">
        <h2>
        Key Features
        </h2>
      <div className="container">
        <KeyCard />
        <KeyCard />
        <KeyCard />
        <KeyCard />
      </div>
    </div>
  );
}

export default KeyFeature;
