import React from "react";

import PropTypes from "prop-types";

import searchIcon from '../../../assets/Image/FAQ-asset/search-icon.png'

import "./FAQHero.scss";

export const FAQHero = () => {
  return <div className="FAQHero">
    <h1>Hello, Need help?</h1>
    <p>We are glad you are looking for an answer, our team has come up with
      the best answers for you
    </p>
    <div className="search-container">
      <div id="search-icon">
        <img src={searchIcon} alt='search icon' />
      </div>
      <input type='text' placeholder="Search for a question" />
    </div>
  </div>;
};

// These are the types of the props that are passed to the component

FAQHero.propTypes = {};

// These are their default values

FAQHero.defaultProps = {};

export default FAQHero;
