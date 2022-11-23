import React from "react";

import PropTypes from "prop-types";

import "./AboutUsHero.scss";

export const AboutUsHero = () => {
  return (
    <div className="AboutHero">
      <div className="AboutUsHero">
        <div className="hero-header">
          <p>About Us</p>
        </div>
        <div className="hero-text">
          <p>
            We are a team with a passion for creativity and excellence reforming
            storytelling
          </p>
        </div>
      </div>
    </div>
  );
};

// These are the types of the props that are passed to the component

AboutUsHero.propTypes = {};

// These are their default values

AboutUsHero.defaultProps = {};

export default AboutUsHero;
