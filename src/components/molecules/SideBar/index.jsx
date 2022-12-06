import React, { useContext } from "react";

import PropTypes from "prop-types";

import "./SideBar.scss";
import logo from "../../../assets/img/logo.png";
import dashboard from "../../../assets/SideBar/category-2.png";
import book from "../../../assets/SideBar/book.png";
import settings from "../../../assets/SideBar/setting-2.png";
import myStory from "../../../assets/SideBar/user-octagon.png";
import avatar from "../../../assets/SideBar/asia.png";
import archieve from "../../../assets/SideBar/user-octagon.png";
import logout from "../../../assets/SideBar/logout.png";
import {AuthContext} from "../../../contexts/AuthContext"
import { AiOutlinePlus } from "react-icons/ai";
import { Link } from "react-router-dom";

export const SideBar = () => {

   const {handleLogOut} = useContext(AuthContext)
  return (
    <div className="sideBar">
      <div className="sideBar__top">
        <div className="sideBar__logo">
          <img src={logo} alt="/" />
        </div>
            <Link to="/createStory">
              <div className="story">
               <div className="icon1">
                  <AiOutlinePlus />
                <h3>New Story</h3>
               </div>
              </div>
            </Link>
        <div className="sideBar__link">
          <Link to="/users/dashboard">
            <div className="sideBar__icon">
              <img src={dashboard} alt="/" />
              <h3>Dashboard</h3>
            </div>
          </Link>
          <Link to="/myStories">
            <div className="sideBar__icon">
              <img src={book} alt="/myStories" />
              <h3>Stories</h3>
            </div>
          </Link>
          <Link to="/myStories">
            <div className="sideBar__icon">
              <img src={myStory} alt="/myStories" />
              <h3>My Stories</h3>
            </div>
          </Link>
          <Link to="/account-settings">
            <div className="sideBar__icon">
              <img src={settings} alt="/account-settings" />
              <h3>Settings</h3>
            </div>
          </Link>
        </div>
      </div>

      <div className="sideBar__Bottom">
        <div className="sideBar__adminSignature">
          <img src={avatar} alt="/" />
          <h3>Mark Essien</h3>
          <p>Admin</p>
        </div>

        <button onClick={handleLogOut} className="btn-submit">
          <div className="sideBar__signOut">
            <img src={logout} alt="/"  className="img-sign"/>
            <h3>Sign Out</h3>
          </div>
        </button>
      </div>
    </div>
  );
};

// These are the types of the props that are passed to the component

SideBar.propTypes = {};

// These are their default values

SideBar.defaultProps = {};

export default SideBar;
