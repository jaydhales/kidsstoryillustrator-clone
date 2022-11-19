import React from "react";
import PropTypes from "prop-types";

import "./AccountInfo.css";

export const Info = () => {
  return (
    <div className="container">
      <div className="side-bar"></div>
      <div className="wrapper">
        <h2 className="header">Account Information</h2>
        <div className="cover">
          <b>Edit profile</b>
          <div className="profile">
            <img alt="profile-pic" />
            <div>
              <p>Ella James</p>
              <p>EllaJames@gmail.com</p>
            </div>
          </div>
          <form>
            <div className="name-section">
              <label>
                Full name <br />
                <input type="text" placeholder="" />
              </label>
              <label>
                Email address <br />
                <input type="text" placeholder="enter email address" />
              </label>
              <label>
                Phone number <br />
                <input type="text" placeholder="enter phone number" />
              </label>
              <label>
                Birthday <br />
                <input type="text" placeholder="dd/mm/yy" />
              </label>
            </div>

            <h2>Chnage Password</h2>
            <div className="pass-section">
              <label>
                Current password <br />
                <input type="text" placeholder="enter current password" />
              </label>
              <label>
                New password <br />
                <input type="text" placeholder="enter new password" />
              </label>
            </div>

            <h2>Address</h2>
            <div className="address-section">
              <label>
                Address <br />
                <input type="text" placeholder="enter home address" />
              </label>
              <label>
                House no <br />
                <input type="text" placeholder="enter house number" />
              </label>
            </div>
          </form>

          <div className="btns">
            <button className="btn1">Cancel</button>
            <button className="btn2">Save</button>
          </div>
        </div>
      </div>
    </div>
  );
};

// These are the types of the props that are passed to the component

Info.propTypes = {};

// These are their default values

Info.defaultProps = {};

export default Info;
