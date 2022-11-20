import React from 'react';

import PropTypes from 'prop-types';

import started from '../../../assets/Image/FAQ-asset/getting-started.png';
import pricing from '../../../assets/Image/FAQ-asset/pricing.png';
import features from '../../../assets/Image/FAQ-asset/features.png';
import './FAQCategories.css';

export const FAQCategories = () => {
	return (
		<div className="helpCategories-container">
			<div className="helpContainer-text">
				<h2>Search For Help By Category</h2>
				<p>Choose a category to quickly find the help you need</p>
			</div>
			<div className="sub-helpCategories-container">
				<div className="gettingStarted-container">
					<img className="categories-img" src={started} alt="/" />
					<h3>Getting started</h3>
				</div>
				<div className="pricing-container">
					<img className="categories-img" src={pricing} alt="/" />
					<h3>Pricing</h3>
				</div>
				<div className="features-container">
					<img className="categories-img" src={features} alt="/" />
					<h3>Features</h3>
				</div>
			</div>
		</div>
	);
};

// These are the types of the props that are passed to the component

FAQCategories.propTypes = {};

// These are their default values

FAQCategories.defaultProps = {};

export default FAQCategories;
