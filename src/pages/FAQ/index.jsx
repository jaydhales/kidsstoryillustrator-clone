import React from "react";

import PropTypes from "prop-types";

import FAQHero from "../../components/molecules/FAQHero";

import "./FAQ.scss";
import FAQCategories from "../../components/molecules/FAQCategories";
import FAQQuestions from "../../components/molecules/FAQQuestions";
import FAQCta from "../../components/molecules/FAQCta";

export const FAQ = () => {
  return <div>
    <FAQHero />
    <br/>
    <br/>
    <FAQCategories />
    <br/>
    <br/>
    <FAQQuestions />
    <br/>
    <FAQCta />
  </div>;
};

// These are the types of the props that are passed to the component

FAQ.propTypes = {};

// These are their default values

FAQ.defaultProps = {};

export default FAQ;
