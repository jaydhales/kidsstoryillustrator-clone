import React from "react";

import PropTypes from "prop-types";
import Button from '../../atoms/Button'
import arrow from '../../../assets/Image/FAQ-asset/down-arrow.png'
import bullet from '../../../assets/Image/FAQ-asset/bullet.png'
import chatImage from '../../../assets/Image/FAQ-asset/question-image.png'
import "./FAQQuestions.scss";

export const FAQQuestions = () => {
  return <div className="FAQQuestions">
      
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
