import React from "react";

import PropTypes from "prop-types";

import "./SideBar.scss";
import logo from '../../../assets/SideBar/story.ai.png'
import dashboard from '../../../assets/SideBar/Profile_Icon_UIA.png'
import userTag from '../../../assets/SideBar/user-tag.png'
import archieve from '../../../assets/SideBar/Vector.png'
import avatar from  '../../../assets/SideBar/asia.png'
import logout from '../../../assets/SideBar/logout.png'
import {Link} from 'react-router-dom'

export const SideBar = () => {
  return <div className="sideBar">
        
        <div className="sideBar__top">
        <div className="sideBar__logo">
            <img src={logo} alt='/' />
        </div>
        <div className="sideBar__link">
        <Link to='/'>
          <div className="sideBar__icon">
              <img src={dashboard} alt='/' />
             <h3>Dashboard</h3>
          </div>
        </Link>
        <Link to='/'>
          <div className="sideBar__icon">
            <img src={userTag} alt='/' />
            <h3>Users</h3>
          </div>
        </Link>
        
        <Link to='/'>
         <div className="sideBar__icon">
            <img src={archieve} alt='/' />
            <h3>Archived Users</h3>
         </div>
        </Link>
        </div>
        </div>
    
     <div className="sideBar__Bottom">
     <div className="sideBar__adminSignature">
        <img src={avatar} alt='/' />
        <h3>Mark Essien</h3>
        <p>Admin</p>
     </div>
    
     <Link to='/'>
     <div className="sideBar__signOut">
        <img src={logout} alt='/' />
        <h3>Sign Out</h3>
     </div>
     </Link>
        </div>

  </div>;
};

// These are the types of the props that are passed to the component

SideBar.propTypes = {};

// These are their default values

SideBar.defaultProps = {};

export default SideBar;
