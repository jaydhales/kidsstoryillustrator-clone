import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom"
import PropTypes from "prop-types";

import "./AcctSetup.scss";
// Images
import logo from "../../../assets/images/logo.svg";
import user from "../../../assets/images/profile.svg";
import group from "../../../assets/images/group.svg";
import edit from "../../../assets/images/edit.svg";
import profile from "../../../assets/images/profile-circle.svg";
import blog from "../../../assets/images/blogger.svg";
import setting from "../../../assets/images/setting-2.svg";
import avatar from "../../../assets/images/avatar.svg";
import logout from "../../../assets/images/logout.svg";

export const Settings = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    city: "",
    state: "",
    country: "",
    currentEmail: "",
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
    <div className="container">
      <div className="dashboard">
        <div className="sidebar">
          <div className="sidebar-menu">
            <div className="user side">
              <img src={user} alt="user" />
              <Link to="/dashboard">Dashboard</Link>
            </div>
            <div className="group side">
              <img src={group} alt="group" />
              <Link to="/users">All Users</Link>
            </div>
            <div className="edit side">
              <img src={edit} alt="edit" />
              <Link to="/myStories">All stories</Link>
            </div>
            <div className="profile side">
              <img src={profile} alt="profile" />
              <Link to="/profile">Profile</Link>
            </div>
            <div className="blog side">
              <img src={blog} alt="blog" />
              <Link to="/blog">Blog</Link>
            </div>
            <div className="setting side">
              <img src={setting} alt="setting" />
              <Link to="/account-settings">Settings</Link>
            </div>
          </div>
          <div className="avatar-zone">
            <div className="avatar">
              <img src={avatar} alt="avatar" />
            </div>
            <h4>Mark Essien</h4>
            <p>Admin</p>
          </div>
          <div className="log-out">
            <img src={logout} alt="logout" />
            <p>Sign Out</p>
          </div>
        </div>
      </div>
      <div className="wrapper">
        <div className="nav-tab">
          <div>
            <img src={logo} alt="logo" sizes={30} />
          </div>
          <div>
            <GiHamburgerMenu size={30} />
          </div>
        </div>
        <b className="header-text">Settings</b>
        <div className="nav-section">
          <div className="nav-admin">
            <div className="nav-head">
              <h2>Account Settings</h2>
              <div className="admin-2btn">
                <button>Add Admin</button>
              </div>
            </div>

            <div className="nav-btns">
              <Link to="/account-info">Edit Account</Link>
              <Link to="users">Users(21)</Link>
              <Link to="/myStories">All Stories</Link> 
              <Link to="/pricing">Subscriptions</Link>
            </div>
          </div>
          <div className="admin-btn">
            <button>Add Admin</button>
          </div>
        </div>

        <form className="form-section">
          <div className="form-name">
            <label>
              First Name <br />
              <input
                type="text"
                placeholder="Mark"
                className="inputs2"
                value={formData.firstName}
                name="firstName"
                onChange={handleChange}
              />
              {submitted && !formData.firstName ? (
                <span>Enter your first name.</span>
              ) : null}
            </label>
            <label>
              Last Name <br />
              <input
                type="text"
                placeholder="Essien"
                className="inputs2"
                value={formData.lastName}
                name="lastName"
                onChange={handleChange}
              />
              {submitted && !formData.lastName ? (
                <span className="rig">Enter your last name.</span>
              ) : null}
            </label>
          </div>

          <label>
            City <br />
            <input
              type="text"
              placeholder="San Francisco"
              className="city"
              value={formData.city}
              name="city"
              onChange={handleChange}
            />
            {submitted && !formData.city ? (
              <span className="rig">Enter your City.</span>
            ) : null}
          </label>

          <div className="region-section">
            <label>
              State <br />
              <input
                type="text"
                placeholder="california"
                className="inputs2"
                value={formData.state}
                name="state"
                onChange={handleChange}
              />
              {submitted && !formData.state ? (
                <span className="rig">Enter your state.</span>
              ) : null}
            </label>
            <label>
              Country <br />
              <input
                type="text"
                placeholder="America"
                className="inputs2"
                value={formData.country}
                name="country"
              />
              {submitted && !formData.country ? (
                <span className="rig">Enter your Country.</span>
              ) : null}
            </label>
          </div>
        </form>

        <div className="email-cover">
          <div>
            <p>Email Address</p>
            <p>Your email address is marke@storyai.com</p>
          </div>
          <a href="#" className="a">
            Hide
          </a>
        </div>

        <div className="email-details">
          <div className="mail-inputs">
            <label>
              New Email Address <br />
              <input
                type="text"
                placeholder="America"
                className="inputs2"
                value={formData.newEmail}
                name="newEmail"
                onChange={handleChange}
              />
              {submitted && !formData.newEmail ? (
                <span className="rig">Enter your new email.</span>
              ) : null}
            </label>
            <label>
              Current Password <br />
              <input
                type="text"
                placeholder="America"
                className="inputs2"
                value={formData.currentEmail}
                name="currentEmail"
                onChange={handleChange}
              />
              {submitted && !formData.currentEmail ? (
                <span>Enter your current email.</span>
              ) : null}
            </label>
          </div>

          <div className="mail-btns">
            <button className="btn-1">Cancel</button>
            <button className="btn-2" onClick={submitForm}>
              Save
            </button>
          </div>
        </div>

        <div className="footer">
          <input type="checkbox" />
          <div>
            <b>Email</b> <br />
            <p>Only approved emails can function as admin.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

// These are the types of the props that are passed to the component

Settings.propTypes = {};

// These are their default values

Settings.defaultProps = {};

export default Settings;
