import React from "react";

import PropTypes from "prop-types";
import Button from '../../atoms/Button'
import arrow from '../../../assets/Image/FAQ-asset/down-arrow.png'
import bullet from '../../../assets/Image/FAQ-asset/bullet.png'
import chatImage from '../../../assets/Image/FAQ-asset/question-image.png'
import "./FAQQuestions.scss";

export const FAQQuestions = () => {
  return <div className="FAQQuestions">
    <h3>Frequently asked questions</h3>
    <br/>
    <br/>
    <div className="questions-container">
    <div className="main-questions-container">
      <img src={bullet} alt='Bullet' className="bullet-icon"/>
      <p>What is storyai ?</p>
    </div>
    
      <img src={arrow} alt='Arrow' className="arrow-icon"/>
      </div>

      <div className="questions-container">
    <div className="main-questions-container">
      <img src={bullet} alt='Bullet Icon' className="bullet-icon"/>
      <p>What is the cancellation policy ?</p>
    </div>
    
      <img src={arrow} alt='Arrow' className="arrow-icon" />
      </div>

      <div className="questions-container">
    <div className="main-questions-container">
      <img src={bullet} alt='Bullet ICon' className="bullet-icon"/>
      <p>Are there any free trials available ?</p>
    </div>
    
      <img src={arrow} alt='Arrow' className="arrow-icon" />
      </div>

      <br/>
      <br/>
      {/* for further questions container */}
      <div className="further-questions-container">
        <div className="further-questions-subcontainer">
          <img src={chatImage} alt='Chat Image' className="chat-image"/>
          <h4>Still have questions ?</h4>
          <p>Send us an email & we&#39;ll respond within 48 hours</p>
          <Button />
        </div>
      </div>
  </div>;
};

// These are the types of the props that are passed to the component

FAQQuestions.propTypes = {};

// These are their default values

FAQQuestions.defaultProps = {};

export default FAQQuestions;
