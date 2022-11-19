import React from 'react';

import PropTypes from 'prop-types';

import './Button.scss';

export const Button = ({ children }) => {
  return <button className="button">{children}</button>;
};

// These are the types of the props that are passed to the component

Button.propTypes = {
  children: PropTypes.string,
};

// These are their default values

Button.defaultProps = {};

export default Button;
