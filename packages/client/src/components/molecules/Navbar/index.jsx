import React, { useState } from 'react';

import PropTypes from 'prop-types';

import Logo  from '../../../assets/img/logo.png';
import { NavLink } from '../../atoms';

import style from './Navbar.scss';
// eslint-disable-next-line



const navLinks = [
  {
    text: 'Home',
    to: '/',
  },
  {
    text: 'Stories',
    to: '/stories',
  },
  {
    text: 'About',
    to: '/about',
  },
  {
    text: 'FAQ',
    to: '/faq',
  },{
    text: 'Contact us',
    to: '/howToUse',
  },
];
const Navbar = () => {
  const [dropDown, setDropDown] = useState(false);
  return (
    <nav className="Navbar">
      <img src={Logo} className="Navbar__Logo" />
      <div className={`Navbar__container ${dropDown && `Navbar__container__active`}`}>
        <div className="Navbar__container__links">
        {navLinks.map(({ text, to }) => (
          <NavLink to={to} key={text} className="Navbar__container__links__link">
            {text}
          </NavLink>
        ))}
      </div>
       <span className="Navbar__container__getStarted">
            Get Started
          </span>
      </div>
      <div className={`Navbar__menuIcon ${dropDown && `Navbar__menuIcon__dropped`}`} onClick={() => setDropDown(prop => !prop)}></div>
    </nav>
  );
};

Navbar.propTypes = {
  openPopUp: PropTypes.func,
  account: PropTypes.string,
};

export default Navbar;