import React, { useContext, useEffect, useState } from "react";

import PropTypes from "prop-types";

import "./SideBar.scss";
import logo from "../../../assets/img/logo.png";
import dashboard from "../../../assets/SideBar/category-2.png";
import book from "../../../assets/SideBar/book.png";
import settings from "../../../assets/SideBar/setting-2.png";
import myStory from "../../../assets/SideBar/user-octagon.png";
import logout from "../../../assets/SideBar/logout.png";
import { AuthContext } from "../../../contexts/AuthContext";
import { AiOutlinePlus } from "react-icons/ai";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { UserContext } from "../../../contexts/UserContext";

export const SideBar = () => {
  const { handleLogout } = useContext(AuthContext);
  const { userData, fetchProfile } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    fetchProfile();
  }, []);
  const logOutPath = (e) => {
    e.preventDefault();
    // console.log(e.target)
    handleLogout();
    navigate ("/");
  };

  const toSentenceCase = (str) => {
    var splitStr = str.toLowerCase().split(" ");
    for (var i = 0; i < splitStr.length; i++) {
      // You do not need to check if i is larger than splitStr length, as your for does that for you
      // Assign it back to the array
      splitStr[i] =
        splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
    }
    // Directly return the joined string
    return splitStr.join(" ");
  };

  if (!userData) return null;
  return (
    <div className="sideBar">
      <div className="sideBar__top">
        <a href="/" className="sideBar__logo">
          <img src={logo} alt="/" />
        </a>
        <Link to="/createStory">
          <div className="story">
            <div className="icon1">
              <AiOutlinePlus />
              <h3 className="text_1">New Story</h3>
            </div>
          </div>
        </Link>
        <div className="sideBar__link">
          {[
            ["/users/dashboard", dashboard, "Dashboard"],
            ["/myStories", myStory, "My Stories"],
            ["/account-settings", settings, "Settings"],
          ].map(([path, src, title]) => (
            <NavLink to={path} key={src} className="sideBar__icon">
              <img src={src} alt="/" />
              <h3>{title}</h3>
            </NavLink>
          ))}
        </div>
      </div>

      <div className="sideBar__Bottom">
        <div className="sideBar__adminSignature">
          <img src={userData.avatar} alt="/" />
          <h3>
            {toSentenceCase(`${userData.firstName} ${userData.lastName}`)}
          </h3>
        </div>

        <button onClick={logOutPath} className="btn-submit">
          <div className="sideBar__signOut">
            <img src={logout} alt="/" className="img-sign" />
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
