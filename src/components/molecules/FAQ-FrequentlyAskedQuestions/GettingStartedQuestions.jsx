import React, { useState } from "react";

import PropTypes from "prop-types";

import arrow from "../../../assets/Image/FAQ-asset/down-arrow.png";
import bullet from "../../../assets/Image/FAQ-asset/bullet.png";
import smallchatbot from "../../../assets/images/smallchatbot.png"

import "./FrequentlyAskedQuestions.scss";

export const GettingStartedQuestions = () => {
  const [questionOne, setQuestionOne] = useState(true);
  const [questionTwo, setQuestionTwo] = useState(true);
  const [questionThree, setQuestionThree] = useState(true);

  const handleQuestionOne = () => {
    setQuestionOne(!questionOne);
  };

  const handleQuestionTwo = () => {
    setQuestionTwo(!questionTwo);
    console.log("click");
  };

  const handleQuestionThree = () => {
    setQuestionThree(!questionThree);
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
            <p>What is storyai ?</p>
          </div>

          <img
            src={arrow}
            alt="Arrow"
            className="arrow-icon"
            onClick={handleQuestionOne}
          />
        </div>
        {!questionOne ? (
          <p>
            A kid illustrator using AI. It helps to design the scene and
            illustrates the scene for you in a kid storybook style. StoryAI uses
            diffusion or DALL-E. You can write a story for kids, and the drawing
            and imagery are generated for you.
          </p>
        ) : (
          " "
        )}
      </div>
      <div className="sub-question">
        <div className="questions-container">
          <div className="main-questions-container">
            <img src={bullet} alt="Bullet Icon" className="bullet-icon" />
            <p>How do i get started?</p>
          </div>

          <img
            src={arrow}
            alt="Arrow"
            className="arrow-icon"
            onClick={handleQuestionTwo}
          />
        </div>
        {!questionTwo ? (
          <p>
            Visit our home page, read up on the basis inflow it contains and
            click on the create story button.
          </p>
        ) : (
          ""
        )}
      </div>
      <div className="sub-question">
        <div className="questions-container">
          <div className="main-questions-container">
            <img src={bullet} alt="Bullet ICon" className="bullet-icon" />
            <p>Who can use storyai?</p>
          </div>

          <img
            src={arrow}
            alt="Arrow"
            className="arrow-icon"
            onClick={handleQuestionThree}
          />
        </div>
        {!questionThree ? (
          <p>
            Anyone aged 12 years and above is eligible to use our website.
            StoryAi is an interesting website which encourages children and
            adult to write stories.
          </p>
        ) : (
          " "
        )}
      </div>
    </div>
  );
};

// These are the types of the props that are passed to the component

GettingStartedQuestions.propTypes = {};

// These are their default values

GettingStartedQuestions.defaultProps = {};

export default GettingStartedQuestions;
