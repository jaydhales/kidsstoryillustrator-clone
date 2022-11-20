import React from 'react';

import PropTypes from 'prop-types';

import FAQHero from '../../components/molecules/FAQHero';

import './FAQ.css';
import FAQCategories from '../../components/molecules/FAQCategories';
import FAQQuestions from '../../components/molecules/FAQQuestions';
import FAQCta from '../../components/molecules/FAQCta';
import { Layout, PaddingProvisionals } from '../../components/molecules';

export const FAQ = () => {
	return (
		<Layout>
			<FAQHero />

			<PaddingProvisionals>
				<FAQCategories />
				<br />
				<br />
				<FAQQuestions />
			</PaddingProvisionals>

			<FAQCta />
		</Layout>
	);
};

// These are the types of the props that are passed to the component

FAQ.propTypes = {};

// These are their default values

FAQ.defaultProps = {};

export default FAQ;
