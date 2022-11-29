import React, { useState } from 'react';

import propTypes from 'prop-types';
import { useParams, useNavigate } from 'react-router-dom';
import './UserStory.scss';
import { stories } from '../../../components/atoms/AdminUserStoriesList/StoriesData';
import arrow from '../../../assets/adminuserdetails/arrow-left.svg'


export const UserStory = () => {
  const navigate = useNavigate();
   let { id } = useParams(); 

   const story = stories.find((story) => {
            return story.id == id; 
    
    });
          console.log(story);
           console.log({ id });

           
  return(
  <div key={id} className='UserStory'>
    <div className='arrow-back'>
       <img src={arrow} alt="arrow-back" onClick={() => navigate('/admin/user-stories')} className='arrow'/>
    </div>
    {story && (
        <div className='stories'>
      
            <div className='title' >{ story.title} </div>
            <img src={story.image} alt="image"  className='storyimg'/>
            <div className='story'>{story.story} </div>   
       
      </div>  
       )}                    

  </div>
  );
};

// These are the types of the props that are passed to the component

UserStory.propTypes = {};

// These are their default values

UserStory.defaultProps = {};

export default UserStory;
