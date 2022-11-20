import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

import Logo  from '../../../assets/img/logo.png';
import { NavLink } from '../../atoms';

import style from './Navbar.scss';
import { Login } from '../../../pages';
// eslint-disable-next-line



const navLinks = [
  {
    text: 'Home',
    to: '/',
  },
  {
    text: 'Stories',
    to: '/mystories',
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
    to: '/contact',
  },
];
const Navbar = () => {
  const [dropDown, setDropDown] = useState(false);
  const navigate=useNavigate();
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
       <span onClick={()=> navigate('/login')} className="Navbar__container__getStarted">
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