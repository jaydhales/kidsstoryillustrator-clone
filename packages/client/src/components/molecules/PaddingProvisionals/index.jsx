import React from 'react';

import PropTypes from 'prop-types';

import './PaddingProvisionals.scss';

export const PaddingProvisionals = ({ children }) => {
	return <div className="PaddingProvisionals">{children}</div>;
};

// These are the types of the props that are passed to the component

PaddingProvisionals.propTypes = {
	children: PropTypes.node.isRequired,
};

// These are their default values

PaddingProvisionals.defaultProps = {
	children: null,
};

export default PaddingProvisionals;
