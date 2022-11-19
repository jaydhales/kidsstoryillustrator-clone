import React from "react";

import PropTypes from "prop-types";

import "./FAQCta.css";
import smsTracking from '../../../assets/Image/FAQ-asset/sms-tracking.png'

export const FAQCta = () => {
  return <div className="cta-container">
    <div className="subscribe-container">
      <img src={smsTracking} alt='/' />
      <div className="subscribe-subcontainer">
        <h4>Subscribe to our newsletter</h4>
        <p>Stay in loop with everything you need to know about us</p>
      </div>
    </div>
    <div className="action-container">
      <div className="action-subcontainer">
        <input type='text' placeholder="Enter your email"/>
        <button>Subscribe</button>
      </div>
      <p>Sign up for our weekly update & be the first to know about our 
        latest updates & blog posts</p>
    </div>
  </div>;
};

// These are the types of the props that are passed to the component

FAQCta.propTypes = {};

// These are their default values

FAQCta.defaultProps = {};

export default FAQCta;
