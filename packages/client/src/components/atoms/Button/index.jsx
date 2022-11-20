import React from 'react';

import PropTypes from 'prop-types';

import './Button.css';

export const Button = () => {
  return <div>
    <button className='FAQ-button'>Send an email</button>
  </div>;
};

// These are the types of the props that are passed to the component

Button.propTypes = {};

// These are their default values

Button.defaultProps = {};

export default Button;
