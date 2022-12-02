import React, { useState } from "react";

import PropTypes from "prop-types";

import "./FrequentlyAskedQuestions.scss";
import arrow from "../../../assets/Image/FAQ-asset/down-arrow.png";
import bullet from "../../../assets/Image/FAQ-asset/bullet.png";
import smallchatbot from "../../../assets/images/smallchatbot.png"
export const PricingQuestions = (props) => {
  const [pricingOne, setPricingOne] = useState(true);
  const [pricingTwo, setPricingTwo] = useState(true);
  const [pricingThree, setPricingThree] = useState(true);

  const handleQuestionOne = () => {
    setPricingOne(!pricingOne);
  };

  const handleQuestionTwo = () => {
    setPricingTwo(!pricingTwo);
  };

  const handleQuestionThree = () => {
    setPricingThree(!pricingThree);
  };

  return (
    <div className="FrequentlyAskedQuestions">
      <div className="smallchatbot">
        <img src={smallchatbot} alt="" />
      </div>
      <div className="frqli_h3">
        <h3>Freqently asked questions</h3>
      </div>
      <div className="sub-question">
        <div className="questions-container">
          <div className="main-questions-container">
            <img src={bullet} alt="Bullet" className="bullet-icon" />
            <p>How can i subscribe to storyai ?</p>
          </div>

          <img
            src={arrow}
            alt="Arrow"
            className="arrow-icon"
            onClick={handleQuestionOne}
          />
        </div>
        {!pricingOne ? (
          <p>
            Simply click on the subscription button to start a monthly package
            for as low as $2 for easy access to key features such as downloading
            stories, creating multiple stories and saving stories
          </p>
        ) : (
          ""
        )}
      </div>

      <div className="sub-question">
        <div className="questions-container">
          <div className="main-questions-container">
            <img src={bullet} alt="Bullet Icon" className="bullet-icon" />
            <p>What is the cancellation policy ?</p>
          </div>

          <img
            src={arrow}
            alt="Arrow"
            className="arrow-icon"
            onClick={handleQuestionTwo}
          />
        </div>
        {!pricingTwo ? (
          <p>
            We understand that things can change. You can cancel your plan at
            any time and we will refund you the difference already paid
          </p>
        ) : (
          ""
        )}
      </div>

      <div className="sub-question">
        <div className="questions-container">
          <div className="main-questions-container">
            <img src={bullet} alt="Bullet ICon" className="bullet-icon" />
            <p>Are there any free trials available ?</p>
          </div>

          <img
            src={arrow}
            alt="Arrow"
            className="arrow-icon"
            onClick={handleQuestionThree}
          />
        </div>
        {!pricingThree ? (
          <p>
            {" "}
            Yes, you can try us for free for 14days, although the features
            available to you will be limited and you will have a limited number
            of stories to make per day
          </p>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

// These are the types of the props that are passed to the component

PricingQuestions.propTypes = {};

// These are their default values

PricingQuestions.defaultProps = {};

export default PricingQuestions;
