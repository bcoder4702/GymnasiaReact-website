import React from "react";
import Featurebox from "./featuresbox";
import image1 from '../images/1.svg';
import image2 from '../images/2.svg';
import image3 from '../images/3.svg';
import image4 from '../images/4.svg';
function Feature(){

    return(
        <div id="features">
            <h1>FEATURES</h1>
            <div className="a-container">
              <Featurebox image={image1} title="Weightlifting"/>
              <Featurebox image={image2} title="Specific Muscle"/>
              <Featurebox image={image3} title="Flex Your Muscle"/>
              <Featurebox image={image4} title="Cardio Exercise"/>
            </div>
        </div>
    )
}
export default Feature;