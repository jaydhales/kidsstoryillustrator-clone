import React from "react";

import PropTypes from "prop-types";

import "./AboutUsVision.scss";
<<<<<<< HEAD
import visionImg from "../../../assets/About-asset/visionImg.svg";
=======
import visionImg from "./visionImg.svg";
>>>>>>> FE-main

export const AboutUsVision = () => {
  return (
    <div className="AboutVision">
      <div className="AboutUsVision">
        <div className="missionLeft">
          <div className="missionLeftTop">
            <p>Our Mission & Vision</p>
          </div>
          <div className="missionLine">
            <hr />
          </div>
          <div className="missionLeftBottom">
            <p>
              We aim to offer our users a means of generating images from text
              for children’s use to bring about active imagination and
              visualization.
              <br />
              <br />
              To build a standard software that offer a rich set of features
              widely used for illustrations to help kids visualize knowledge.
            </p>
          </div>
        </div>
        <div className="missionRight">
          <img src={visionImg} alt="Vision" className="mission" />
        </div>
      </div>
    </div>
  );
};

// These are the types of the props that are passed to the component

AboutUsVision.propTypes = {};

// These are their default values

AboutUsVision.defaultProps = {};

export default AboutUsVision;
