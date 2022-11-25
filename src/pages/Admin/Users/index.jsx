import React from "react";
import { CiSearch } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

import PropTypes from "prop-types";
import "./Users.css";

import dashboard from "../../../assets/images/Group 1.svg";
import messages from "../../../assets/images/Group 2.svg"
import settings from "../../../assets/images/setting-side.svg";
import profile from "../../../assets/images/profile-circle.svg";
import favBook from "../../../assets/images/book-square.svg";
import savedBook from "../../../assets/images/book-saved.svg";
import login from "../../../assets/images/login.svg";

export const User = () => {
  return (
    <div className="user-container">
          <div className="dashboard1">
        <div className="sidebar1">
          <div className="sidebar-menu1">
            <h4>Menu</h4>
            <div className="user side1">
              <img src={dashboard} alt="user" />
              <p>Dashboard</p> <IoIosArrowForward />
            </div>
            <div className="group side1">
              <img src={messages} alt="group" />
              <p>messages</p> <IoIosArrowForward />
            </div>
            <div className="edit side1">
              <img src={settings} alt="edit" />
              <p>settings</p> <IoIosArrowForward />
            </div>
            <div className="profile side1">
              <img src={profile} alt="profile" />
              <p>Profile</p> <IoIosArrowForward />
            </div>
            <div className="push">
              <h4>Story books</h4>
              <div className="blog side1">
                <img src={favBook} alt="blog" />
                <p>favorite books</p> <IoIosArrowForward />
              </div>
              <div className="book2 side1">
                <img src={favBook} alt="current-book" />
                <p>current read</p> <IoIosArrowForward />
              </div>
              <div className="book3 side1">
                <img src={savedBook} alt="setting" />
                <p>saved books</p> <IoIosArrowForward />
              </div>
              <div className="book4 side1">
                <img src={favBook} alt="setting" />
                <p>other books</p> <IoIosArrowForward />
              </div>
            </div> 

            <div className="push2">
              <div className="book5 side1">
                <img src={login} alt="setting" />
                <p>other books</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="user-wrapper">
        <h2 className="head">Account Information </h2>
        <div className="fit">
          <div className="user-access">
            <h3>Manage who can access your account</h3>
            <p>X</p>
          </div>
          <p className="text">Choose users who can access your kids A.I</p>
          <div className="user-input">
            <CiSearch size={20} className="icon" />
            <input type="text" placeholder="Search for users" />
            <button>Save</button>
          </div>
          <div className="user-checkname">
            <div>
              <p> Name</p>
              <span className="name-icon">
                <IoIosArrowDown />
              </span>
            </div>
            <button>Grant access</button>
          </div>

          <div className="user-names">
            <div>
              <p>Manuel Ademola</p>
              <input type="checkbox" />
            </div>
            <div>
              <p>Manuel Ademola</p>
              <input type="checkbox" />
            </div>
            <div>
              <p>Manuel Ademola</p>
              <input type="checkbox" />
            </div>
            <div>
              <p>Manuel Ademola</p>
              <input type="checkbox" />
            </div>
          </div>

          <div className="user-btns">
            <button className="user-btn1">Cancel</button>
            <button className="user-btn2">Save Changes</button>
          </div>
        </div>
      </div>
    </div>
  );
};

// These are the types of the props that are passed to the component

User.propTypes = {};

// These are their default values

User.defaultProps = {};

export default User;
