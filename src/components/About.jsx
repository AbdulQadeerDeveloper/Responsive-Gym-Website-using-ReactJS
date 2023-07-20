import React from "react";
import aboutimage from "../images/about.png";
function About() {
  return (
    <div id="about">
      <div className="about-image">
        <img src={aboutimage} alt="" />
      </div>
      <div className="about-text">
        <h1>LEARN MORE ABOUT US</h1>
        <p>
          A gym description typically refers to a written summary or overview of
          a gym facility, its amenities, services, equipment, classes, and any
          other relevant information. It aims to provide potential members or
          visitors with a clear understanding of what the gym offers.
        </p>
        <button>READ MORE</button>
      </div>
    </div>
  );
}

export default About;
