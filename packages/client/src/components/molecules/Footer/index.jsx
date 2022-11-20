import React from 'react';

import { Link } from 'react-router-dom';

// import { Facebook, Instagram, Twitter } from '../../../assets';
import Logo from '../../../assets/img/logo.png';
import Facebook from '../../../assets/img/ri-facebook-circle-fill.svg';
import Twitter from '../../../assets/img/ri-twitter-fill.svg';
import Instagram from '../../../assets/img/ri-instagram-fill.svg';


import style from './Footer.scss';
const links = [
  {
    heading: 'Company',
    links: [
      {
        text: 'About Us',
        to: '/about',
      },
      {
        text: 'Contact Us',
        to: '/contact',
      },
      {
        text: 'Pricing',
        to: '/pricing',
      },
      {
        text: 'Create Story',
        to: '/craeteStory',
      },
    ],
  },
  {
    heading: 'Help',
    links: [
      {
        text: 'FAQs',
        to: '/faq',
      },
      {
        text: 'Privacy Policy',
        to: '/privacy',
      },
      
    ],
  },
  {
    heading: 'Resources',
    links: [
      {
        text: 'Blog',
        to: '/blog',
      },
    ],
  },
];
const Footer = () => {
  return (
    <section className="Footer">
      <div className="Footer__left">
        <img src={Logo} className="Navbar__Logo" />
        <div className="Footer__left__socials">
          <img src={Twitter} />
          <img src={Facebook} />
          <img src={Instagram} />
        </div>
        <p>&copy; 2022 storyai</p>
      </div>
      <div className="Footer__right">
        {links.map(({ heading, links: link }) => (
          <div key={heading}>
            <h3>{heading}</h3>
            <div className="Footer__right__links">
              {link.map(({ text, to }) => (
                <Link to={to} key={text} className="Footer__right__links__link">
                  <small>{text}</small>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Footer;