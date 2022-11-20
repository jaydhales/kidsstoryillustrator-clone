import React from "react";

import PropTypes from "prop-types";

import "./AboutUsVision.scss";
import visionImg from './visionImg.svg';

export const AboutUsVision = () => {
  return (
    <div className="AboutUsVision">
      <div className="missionLeft">
        <div className="missionLeftTop">
          <p><span>Our </span>Mission & Vision</p>
        </div>
        {/* <div className="missionLine">
          <hr />
        </div> */}
        <div className="missionLeftBottom">
          <p>
            We aim to offer our users a means of generating images from text for
            children’s use to bring about active imagination and visualization.
            <br />
            <br />
            To build a standard software that offer a rich set of features
            widely used for illustrations to help kids visualize knowledge.
          </p>
        </div>
      </div>
      <div className="missionRight">
        <img src={visionImg} alt="Vision" />
      </div>
    </div>
  );
};

// These are the types of the props that are passed to the component

AboutUsVision.propTypes = {};

// These are their default values

AboutUsVision.defaultProps = {};

export default AboutUsVision;
