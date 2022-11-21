import React from "react";

import PropTypes from "prop-types";

import "./AboutUsCard.css";
import goals1 from "./goals1.svg";
import goals2 from "./goals2.svg";

export const AboutUsCard = () => {
  return (
    <>
      <div className="goal-container">
        <div className="goalheader">
          <div className="goalheadertext">
            <p>Our Goals</p>
            <hr className="hr" />
          </div>
        </div>
      </div>

      <div className="goal-container">
        <div className="goalLeft">
          <img src={goals1} alt="goals img" className="goalimgLeft" />
          <div className="goalTop">
            <p>Make Creation Easy</p>
          </div>
          <div className="goalBottom">
            <p>
              Enable parents, teachers, and book writers to create stories for
              kids easily without having to bother about the illustrations
            </p>
          </div>
        </div>
        <div className="goalRight">
          <img src={goals2} alt="goals img" className="goalimgRight" />
          <div className="goalTop">
            <p>Help Maximize Time</p>
          </div>
          <div className="goalBottom">
            <p>
              We want to help reduce the time it takes to create stories so that
              the time can be focused on the story itself
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

// These are the types of the props that are passed to the component

AboutUsCard.propTypes = {};

// These are their default values

AboutUsCard.defaultProps = {};

export default AboutUsCard;