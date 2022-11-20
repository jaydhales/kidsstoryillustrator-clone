import React from 'react';

import { Link } from 'react-router-dom';

// import { Facebook, Instagram, Twitter } from '../../../assets';
import Logo from '../../../assets/img/logo.png';
import Facebook from '../../../assets/img/facebook_logo.png';

import style from './Footer.scss';
const links = [
  {
    heading: 'Community',
    links: [
      {
        text: 'NFT',
        to: '/nfts',
      },
      {
        text: 'Tokens',
        to: '/tokens',
      },
      {
        text: 'Landlords',
        to: '/landlords',
      },
      {
        text: 'Discord',
        to: '/discord',
      },
    ],
  },
  {
    heading: 'Places',
    links: [
      {
        text: 'Castle',
        to: '/castle',
      },
      {
        text: 'Farms',
        to: '/farms',
      },
      {
        text: 'Villa',
        to: '/beach',
      },
      {
        text: 'Learn more',
        to: '/learn-more',
      },
    ],
  },
  {
    heading: 'About us',
    links: [
      {
        text: 'Road map',
        to: '/road-map',
      },
      {
        text: 'Creators',
        to: '/creators',
      },
      {
        text: 'Career',
        to: '/career',
      },
      {
        text: 'Contact us',
        to: '/contact-us',
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
          <img src={Facebook} />
        </div>
        <p>&copy; 2022 Metabnb</p>
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