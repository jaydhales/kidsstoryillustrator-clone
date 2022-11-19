import React from 'react';

import PropTypes from 'prop-types';

import './Button.scss';

export const Button = ({ children, secondary, className }) => {
  return (
    <button
      className={`Button ${secondary ? 'Secondary' : 'Primary'} ${className}`}
    >
      {children}
    </button>
  );
};

// These are the types of the props that are passed to the component

Button.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  secondary: PropTypes.bool,
  className: PropTypes.string,
};

// These are their default values

Button.defaultProps = {};

export default Button;
