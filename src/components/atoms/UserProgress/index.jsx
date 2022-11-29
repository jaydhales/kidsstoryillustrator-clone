
import React from 'react';

import PropTypes from 'prop-types';

import './UserProgress.scss';
import progress1 from '../../../assets/adminuserdetails/Group.svg'
import progress2 from '../../../assets/adminuserdetails/Group1.svg'
import progress3 from '../../../assets/adminuserdetails/Group2.svg'

export const UserProgress = () => {
  return (
  <div className='UserProgress'>
    <div className='analytic'>User Analytics</div>

    <div className='progress'>
      <div className='bar'>
        <img src={progress1} alt="progress-bar" />
        <div className='bar-text'>Number of Stories  </div>
      </div>
      <div className='bar'>
        <img src={progress2} alt="progress-bar" />
        <div className='bar-text'>Number of Hours Spent </div>
      </div>
      <div className='bar'>
        <img src={progress3} alt="progress-bar" />
        <div className='bar-text'>Number of Visit</div>
      </div>
      <div className='bar'>
        <img src={progress3} alt="progress-bar" />
        <div className='bar-text'>Number of Visit</div>
      </div>
      
    </div>
  </div>
  );
};

// These are the types of the props that are passed to the component

UserProgress.propTypes = {};

// These are their default values

UserProgress.defaultProps = {};

export default UserProgress;
