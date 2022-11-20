import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

import PropTypes from 'prop-types';

import './Profile.css';
import profileIcon from './assests/profileIconImg.png';
import useRandomAvatarIcon from './assests/useRandomAvatarIcon.png';
import ProfileEdit from '../../pages/Profile/ProfileEdit';

export const Profile = () => {
	const navigate = useNavigate();

	const handleSubmit = (e) => {
		e.preventDefault();
		navigate('/profile/edit');
	};
	return (
		<>
			<div className="profile-container">
				<div className="profile-header">
					<h2>Complete Profile</h2>
				</div>
				<div className="profile-avatar-container">
					<div className="prof-icon">
						<img src={profileIcon} alt="" />
					</div>
					<div className="random-avatar">
						<img src={useRandomAvatarIcon} alt="" />
					</div>
				</div>
				<div className="form-section">
					<form action="" onSubmit={(event) => handleSubmit(event)}>
						<div className="first-last-name">
							<div className="name-container">
								<label htmlFor="first_name">First name</label>
								<input
									type="text"
									name="first_name"
									id="first_name"
									placeholder="Enter First name"
									required
									className="name-field"
								/>
							</div>
							<div className="name-container">
								<label htmlFor="last_name">Last name</label>
								<input
									type="text"
									name="last_name"
									id="last_name"
									placeholder="Enter Last name"
									required
									className="name-field"
								/>
							</div>
						</div>

						<div className="first-last-name">
							<div className="name-container">
								<label htmlFor="username">Username</label>
								<input
									type="text"
									name="username"
									id="username"
									placeholder="Enter username"
									required
									className="name-field"
								/>
							</div>
							<div className="email">
								<label htmlFor="email">Email</label>
								<input
									type="email"
									id="email"
									name="email"
									placeholder="powerdrill@story.ai"
									required
									className="email-field"
								/>
							</div>
						</div>

						<button type="submit" id="btn__save-profile">
							Save Profile
						</button>
					</form>
				</div>
			</div>
		</>
	);
};

// These are the types of the props that are passed to the component

Profile.propTypes = {};

// These are their default values

Profile.defaultProps = {};

export default Profile;
