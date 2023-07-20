import React from "react";
import FeaturesBox from "./FeaturesBox";
import fiimage1 from "../images/1.svg";
import fiimage2 from "../images/2.svg";
import fiimage3 from "../images/3.svg";
import fiimage4 from "../images/4.svg";
function Feature() {
  return (
    <div id="features">
      <h1>FEARURES</h1>
      <div className="a-container">
        <FeaturesBox
          image={fiimage1}
          title="WeightLifting"
          para="Gyms give members access to a wide range of features like exercise."
        />
        <FeaturesBox
          image={fiimage2}
          title="Specific Muscle"
          para="gyms often describe places with indoor or outdoor courts "
        />
        <FeaturesBox
          image={fiimage3}
          title="Flex Your Muscle"
          para="A gym is a club, building, or large room, usually containing"
        />
        <FeaturesBox
          image={fiimage4}
          title="Cardio Exercise"
          para="The main floor area will be equipped with state-of-the-art machines"
        />
      </div>
    </div>
  );
}

export default Feature;
