import React from 'react';

import PropTypes from 'prop-types';

import './Button.scss';

export const Button = ({ children, secondary }) => {
  return (
    <button className={`Button ${secondary ? 'Secondary' : 'Primary'}`}>
      {children}
    </button>
  );
};

// These are the types of the props that are passed to the component

Button.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  secondary: PropTypes.bool,
};

// These are their default values

Button.defaultProps = {};

export default Button;
