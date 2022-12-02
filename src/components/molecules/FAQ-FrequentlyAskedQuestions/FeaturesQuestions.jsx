import React, { useState } from "react";

import PropTypes from "prop-types";

import "./FrequentlyAskedQuestions.scss";

import arrow from "../../../assets/Image/FAQ-asset/down-arrow.png";
import bullet from "../../../assets/Image/FAQ-asset/bullet.png";

export const FeaturesQuestions = () => {
  const [featureOne, setFeatureOne] = useState(true);
  const [featureTwo, setFeatureTwo] = useState(true);
  const [featureThree, setFeatureThree] = useState(true);

  const handleQuestionOne = () => {
    setFeatureOne(!featureOne);
    console.log("click");
  };

  const handleQuestionTwo = () => {
    setFeatureTwo(!featureTwo);
    console.log("click");
  };

  const handleQuestionThree = () => {
    setFeatureThree(!featureThree);
  };

  return (
    <div className="FrequentlyAskedQuestions">
      <div className="frqli_h3">
        <h3>Freqently asked questions</h3>
      </div>
      <div className="sub-question">
        <div className="questions-container">
          <div className="main-questions-container">
            <img src={bullet} alt="Bullet" className="bullet-icon" />
            <p>Is there a push notification ?</p>
          </div>

          <img
            src={arrow}
            alt="Arrow"
            className="arrow-icon"
            onClick={handleQuestionOne}
          />
        </div>
        {!featureOne ? (
          <p>
            Yes, simply activate the push notification button to sift
            information and updates on the app
          </p>
        ) : (
          ""
        )}
      </div>

      <div className="sub-question">
        <div className="questions-container">
          <div className="main-questions-container">
            <img src={bullet} alt="Bullet ICon" className="bullet-icon" />
            <p>Is my email address safe ?</p>
          </div>

          <img
            src={arrow}
            alt="Arrow"
            className="arrow-icon"
            onClick={handleQuestionTwo}
          />
        </div>
        {!featureTwo ? (
          <p>
            Yes, your email are 100% safe with us, dont worry your details
            won&#39;t be shared with anyone.{" "}
          </p>
        ) : (
          ""
        )}
      </div>

      <div className="sub-question">
        <div className="questions-container">
          <div className="main-questions-container">
            <img src={bullet} alt="Bullet ICon" className="bullet-icon" />
            <p>Can i save my stories ?</p>
          </div>

          <img
            src={arrow}
            alt="Arrow"
            className="arrow-icon"
            onClick={handleQuestionThree}
          />
        </div>
        {!featureThree ? (
          <p>
            You can only get to save your stories after paying for a preferred
            pricing package
          </p>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

// These are the types of the props that are passed to the component

FeaturesQuestions.propTypes = {};

// These are their default values

FeaturesQuestions.defaultProps = {};

export default FeaturesQuestions;
