import React from "react";
import "./about.scss";
import OurStory from "./components/OurStory";
import Connection from "./components/Connection";
import Deatails from "./components/Deatails";
import Mission from "./components/Mission";
import Values from "./components/Values";
function About() {
  return (
    <div className="about">
      <OurStory />
      <Deatails />
      <Mission />
      <Values />
      <Connection />
    </div>
  );
}

export default About;
