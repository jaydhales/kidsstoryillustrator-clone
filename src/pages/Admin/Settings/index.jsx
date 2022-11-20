import React, { useState } from "react";

import PropTypes from "prop-types";

import "./AcctSetup.css";

export const Settings = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    city: "",
    state: "",
    country: "",
    newEmail: "",
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
      <div className="side-bar"></div>
      <div className="wrapper">
        <h1>Settings</h1>
        <div className="nav-section">
          <div>
            <h2>Account Settings</h2>

            <div className="nav-btns">
              <button>Edit Account</button>
              <button>Users(21)</button>
              <button>All Stories</button>
              <button>Subscriptions</button>
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
              {submitted && !formData.lastName ? <span>Enter your last name.</span> : null}
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
            {submitted && !formData.city ? <span>Enter your City.</span> : null}
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
                <span>Enter your state.</span>
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
               {submitted &&  !formData.country? <span>Enter your Country.</span> : null}
            </label>
          </div>
        </form>

        <div className="email-cover">
          <div>
            <p>Email Address</p>
            <p>Your email address is marke@storyai.com</p>
          </div>
          <a href="#">Hide</a>
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
                <span>Enter your new email.</span>
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
