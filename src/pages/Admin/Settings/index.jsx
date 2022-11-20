import React from 'react';

import PropTypes from "prop-types";

import "./AcctSetup.css";

export const Settings = () => {
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

        <form className='form-section'>
          <div className="form-name">
            <label>
              First Name <br />
              <input type="text" placeholder="Mark"  className="inputs2"/>
            </label>
            <label>
              Last Name <br />
              <input type="text" placeholder="Essien" className="inputs2" />
            </label>
          </div>

          <label>
            City <br />
            <input type="text" placeholder="San Francisco" className="city"  />
          </label>

          <div className="region-section">
            <label>
              State <br />
              <input type="text" placeholder="california" className="inputs2"/>
            </label>
            <label>
              Country <br />
              <input type="text" placeholder="America" className="inputs2"/>
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
              <input type="text" placeholder="America" className="inputs2"/>
            </label>
            <label>
              Current Password <br />
              <input type="text" placeholder="America" className="inputs2"/>
            </label>
          </div>

          <div className="mail-btns">
            <button className="btn-1">Cancel</button>
            <button className="btn-2">Save</button>
          </div>
        </div>

        <div className="footer">
            <input type="checkbox"/> 
          <div>
            <b>Email</b> <br/>
            <p>Only approved emails can function as admin.</p>
          </div>
        </div>
      </div>
    </div>
  )
}


// These are the types of the props that are passed to the component

Settings.propTypes = {};

// These are their default values

Settings.defaultProps = {};

export default Settings;