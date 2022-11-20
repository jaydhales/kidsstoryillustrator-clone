import React from 'react';

import PropTypes from 'prop-types';

import './Layout.css';
import { Navbar, Footer } from '..';

export const Layout = ({ children }) => {
	return (
		<div>
			<Navbar />
			{children}
			<Footer />
		</div>
	);
};

// These are the types of the props that are passed to the component

Layout.propTypes = {
	children: PropTypes.node.isRequired,
};

// These are their default values

Layout.defaultProps = {
	children: null,
};

export default Layout;
