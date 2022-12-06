import React from 'react';

import { Link } from 'react-router-dom';
import { FaFacebook } from 'react-icons/fa';
import { AiFillInstagram, AiOutlineTwitter } from 'react-icons/ai';



// import { Facebook, Instagram, Twitter } from '../../../assets';
import logo_red from '../../../assets/img/logo_red.svg';
import Facebook from '../../../assets/img/ri-facebook-circle-fill.svg';
import Twitter from '../../../assets/img/ri-twitter-fill.svg';
import Instagram from '../../../assets/img/ri-instagram-fill.svg';
import './Footer.scss';

const Footer = () => {
  return (
    <div className='Footer_wrapper'>
    <section className="Footer">
      <div className="Footer__left">
        <img src={logo_red} className="footer__Logo" />
        <p>follow us on</p>
        <div className="Footer__left__socials">
          <img src={Twitter} />
          <img src={Facebook} />
          <img src={Instagram} />
        </div> 
      </div>

      <div className="Footer_company">
        <h3 className='Footer_heading'>Company</h3>
        <Link to="/about" className='Footer_link'>About Us</Link>
        <Link to="/contact" className='Footer_link'>Contact Us</Link>
        <Link to="/pricing" className='Footer_link'>Pricing</Link>
        <Link to="/createstory" className='Footer_link'>Create Story</Link>
      </div>

      <div className="Footer_help">
        <h3 className='Footer_heading'>Help</h3>
        <Link to="/faq'" className='Footer_link'>FAQs</Link>
        <Link to="/privacy" className='Footer_link'>Privacy Policy </Link>
      </div>

      <div className="Footer_resources">
        <h3 className='Footer_heading'>Resources</h3>
        <Link to="/blog" className='Footer_link'>Blog</Link>
      </div>
    </section>



    <div className="copyright">
      <div className='social_link_display_mobile'>
      <p>follow us on</p>
        <div className="Footer__left__socials">
          <div className="social_icons_wrapper">
            <AiOutlineTwitter className='social_icons'/>
          </div>
          <div className="social_icons_wrapper">
            <FaFacebook className='social_icons'/>
          </div>
          <div className="social_icons_wrapper">
            <AiFillInstagram className='social_icons'/>
          </div>
        </div> 
      </div>
      <div className="copy-p">
      <p>© 2022 Copyright. All rights reserved</p>
      </div>
     </div>
    </div>
  )
}

export default Footer