import "./fourstep.scss";
import React from "react";
import mickey from "./images/mickeymouse.png";

const Foursteps = () => {
  return (
    <div className="Fourstep_container">
      <div className="fourstep_header">
        <h3 className="fourstep_header_text">
          Get Illustrations in 4 Simple Steps
        </h3>
        <p className="fourstep_text">
              You do not have to bother about writer’s block. Your keywords will
              generate illustrations in details, while inspiring you to write
              more pages for your stories.
            </p>
      </div>
      <div className="fourstep_wrapper">
        <div className="mickeymouse">
            <img src={mickey} alt="mickey"/>
        </div>
        <div className="mickey_text">
          <div className="fourstep_text_container">
            <p className="number_wrap">01</p>
            <p className="fourstep_text__">Write Your Story</p>
          </div>
           
          <div className="fourstep_text_container">
            <p className="number_wrap">02</p>
            <p className="fourstep_text__">Enter at Least 2 Keywords</p>
          </div>

          <div className="fourstep_text_container">
            <p className="number_wrap">03</p>
            <p className="fourstep_text__">Click on &ldquo;Generate Illustrations&rdquo;</p>
          </div>
          <div className="fourstep_text_container">
            <p className="number_wrap">04</p>
            <p className="fourstep_text__">Select Your Preferred Illustration</p>
          </div>
        </div>
        </div>

       
      </div>
  );
};

export default Foursteps;
