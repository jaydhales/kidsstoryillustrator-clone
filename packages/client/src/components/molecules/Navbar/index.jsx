import React from 'react';

import PropTypes from 'prop-types';

import './Navbar.scss';

export const Navbar = ({ children }) => {
  return (
    <nav className="Navbar">
      <img src="/Assets/Icons/" alt="logo" />
      {children}
    </nav>
  );
};

// These are the types of the props that are passed to the component

Navbar.propTypes = {
  children: PropTypes.element.isRequired,
};

// These are their default values

Navbar.defaultProps = {};

export default Navbar;
