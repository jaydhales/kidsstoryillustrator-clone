import React, { Component } from 'react';
import PropTypes from 'prop-types';
import profileIcon from '../assests/profileIconImg.png';
import useRandomAvatarIcon from '../assests/useRandomAvatarIcon.png';
import './ProfileEdit.css';

export class ProfileEdit extends Component {
	render() {
		return (
			<>
				<p className="progress-text"> Work In Pogress...</p>
				{/* <div className="profile-container">
          <div className="profile-header">
            <h2>Profile</h2>
          </div>

          <div className="profile-name-container">
            <div className="prof-icon">
              <img src={profileIcon} alt="" />
            </div>
            <div className="pro-name-details">
              <p className="prof-name-text">Power Drill</p>
              <br />
              <p>@powerdrill</p>
            </div>
          </div>
        </div> */}
			</>
		);
	}
}

// These are the types of the props that are passed to the component

ProfileEdit.propTypes = {};

// These are their default values

ProfileEdit.defaultProps = {};

export default ProfileEdit;
