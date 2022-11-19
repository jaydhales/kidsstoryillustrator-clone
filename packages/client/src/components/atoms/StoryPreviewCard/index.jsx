import React from 'react';

import PropTypes from 'prop-types';
import Button from '../Button';
import './StoryPreviewCard.scss';

export const StoryPreviewCard = () => {
  return (
    
    <div>
      <div className="Header">
        <img src="/Assets/Icons/StoryIcon1.svg" alt=""/>
        <div>
            <h3 className='Header'></h3>
            <p className='SubHeader'></p>
        </div>

        <img src="" alt="" />
      </div>

      <div className="Body">
        <div >
          <h2 className="Title">
            The boy who cried Wolf 
          </h2>
          <p className="SubHeading">
              Modern
          </p>
        </div>

        <p className="BodyText">
           A bored boy Lorem ipsum dolor sit amet.
        </p>
      <Button>View</Button>
      </div>
    </div>
  );
};

// These are the types of the props that are passed to the component

StoryPreviewCard.propTypes = {

};

// These are their default values

StoryPreviewCard.defaultProps = {};

export default StoryPreviewCard;
