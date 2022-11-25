import React, {useState} from "react";

import PropTypes from "prop-types";

import started from '../../../assets/Image/FAQ-asset/getting-started.png'
import pricing from '../../../assets/Image/FAQ-asset/pricing.png'
import features from '../../../assets/Image/FAQ-asset/features.png'
import "./FAQCategories.scss";
import GettingStartedQuestions from "../FAQ-FrequentlyAskedQuestions/GettingStartedQuestions";
import PricingQuestions from "../FAQ-FrequentlyAskedQuestions/PricingQuestions";
import FeaturesQuestions from "../FAQ-FrequentlyAskedQuestions/FeaturesQuestions";

export const FAQCategories = () => {
    
  
    const [startingQuestion, setStartingQuestion] = useState(false)
    const [pricingQuestion, setPricingQuestion] = useState(false)
    const [featuresQuestion, setFeaturesQuestion] = useState(false)

    const handleStartingQuestion = () => {
      setStartingQuestion(true)
      setPricingQuestion(false)
      setFeaturesQuestion(false)
      
    }
  
    const handlePricingQuestion = () => {
      setPricingQuestion(true)
      setStartingQuestion(false)
      setFeaturesQuestion(false)
      
    }

    const handleFeaturesQuestion = () => {
      setFeaturesQuestion(true)
      setPricingQuestion(false)
      setStartingQuestion(false)
    }

  return <div className="FAQCategories"> 
    <div className="helpContainer-text">
     <h2>Search For Help By Category</h2>
     <p>Choose a category to quickly find the help you need</p>
     </div>
     <div className="sub-helpCategories-container">
      <div className="gettingStarted-container" onClick={handleStartingQuestion}>
        <img className='categories-img' src={started} alt='/'/>
        <h3>Getting started</h3>
      </div>
      <div className="pricing-container" onClick={handlePricingQuestion }>
      <img className='categories-img' src={pricing} alt='/'/>
      <h3>Pricing</h3>
      </div>
      <div className="features-container" onClick={handleFeaturesQuestion}>
      <img className='categories-img' src={features} alt='/'/>
      <h3>Features</h3>
      </div>
     </div>
        <br/>
        <br/>
        <br/>
     <h3>Freqently asked questions</h3>
     <br/>
     <br/>
     {startingQuestion && <GettingStartedQuestions/>}
     {pricingQuestion && <PricingQuestions />}
     {featuresQuestion && <FeaturesQuestions />}
  </div>;
};

// These are the types of the props that are passed to the component

FAQCategories.propTypes = {};


// These are their default values

FAQCategories.defaultProps = {};

export default FAQCategories;
