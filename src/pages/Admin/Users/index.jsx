import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
import Navbar from "../../../components/molecules/Navbar";

import PropTypes from "prop-types";
import "./Users.scss";

import dashboard from "../../../assets/images/Group 1.svg";
import messages from "../../../assets/images/Group 2.svg";
import settings from "../../../assets/images/setting-side.svg";
import profile from "../../../assets/images/profile-circle.svg";
import favBook from "../../../assets/images/book-square.svg";
import savedBook from "../../../assets/images/book-saved.svg";
import login from "../../../assets/images/login.svg";

export const User = () => {
  const [formData, setFormData] = useState({
    users: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [valid, setValid] = useState(false);

  function handleChange(event) {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value,
      };
    });
  }

  function submitForm(e) {
    e.preventDefault();
    if (formData.firstName && formData.lastName && formData.email) {
      setValid(true);
    }
    setSubmitted((prevState) => !prevState);
  }
  return (
    <div className="main-container">
      <Navbar />
      <div className="user-container">
        <div className="dashboard1">
          <div className="sidebar1">
            <div className="sidebar-menu1">
              <h4>Menu</h4>
              <div className="user side1">
                <img src={dashboard} alt="user" />
                <Link to="/dashboard">Dashboard</Link> <IoIosArrowForward />
              </div>
              <div className="group side1">
                <img src={messages} alt="group" />
                <p>messages</p> <IoIosArrowForward />
              </div>
              <div className="edit side1">
                <img src={settings} alt="edit" />
                <Link to="/account-settings">settings</Link>{" "}
                <IoIosArrowForward />
              </div>
              <div className="dropdown side1">
                <img src={profile} alt="profile" />
                <button className="dropbtn">Profile</button>{" "}
                <IoIosArrowForward />
                <div className="dropdown-content">
                  <Link to="/account-info">Edit</Link>
                  <Link to="/users">Account access</Link>
                </div>
              </div>
              <div className="push">
                <h4>Story books</h4>
                <div className="blog side1">
                  <img src={favBook} alt="blog" />
                  <Link to="/myStories">favorite books</Link>{" "}
                  <IoIosArrowForward />
                </div>
                <div className="book2 side1">
                  <img src={favBook} alt="current-book" />
                  <Link to="/myStories">current read</Link>{" "}
                  <IoIosArrowForward />
                </div>
                <div className="book3 side1">
                  <img src={savedBook} alt="setting" />
                  <Link to="/myStories">saved books</Link> <IoIosArrowForward />
                </div>
                <div className="book4 side1">
                  <img src={favBook} alt="setting" />
                  <Link to="/myStories">other books</Link> <IoIosArrowForward />
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
              <h3 className="text-1">Manage who can access your account</h3>
              <p>X</p>
            </div>
            <p className="text">Choose users who can access your kids A.I</p>
            <div className="user-input">
              <CiSearch size={20} className="icon" />
              <input
                type="text"
                placeholder="Search for users"
                value={formData.users}
                name="users"
                onChange={handleChange}
              />{" "}
              <br />
              <button onClick={submitForm}>Save</button>
            </div>
            {submitted && !formData.users ? (
              <span className="span">Please insert a name</span>
            ) : null}
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
                <p className="text-2">Manuel Ademola</p>
                <input type="checkbox" />
              </div>
              <div>
                <p className="text-2">Manuel Ademola</p>
                <input type="checkbox" />
              </div>
              <div>
                <p className="text-2">Manuel Ademola</p>
                <input type="checkbox" />
              </div>
              <div>
                <p className="text-2">Manuel Ademola</p>
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
    </div>
  );
};

// These are the types of the props that are passed to the component

User.PropTypes = {};

// These are their default values

User.defaultProps = {};

export default User;
