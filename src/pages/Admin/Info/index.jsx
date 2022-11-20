import React from "react";
import PropTypes from "prop-types";

import "./AccountInfo.css";

export const Info = () => {
  return (
    <div className="App1">
      <div className="side-bar1"></div>
      <div className="wrapper-div">
        <h2 className="header">Account Information</h2>
        <div className="cover-section">
          <b>Edit profile</b>
          <div className="profile">
            <img alt="profile-pic" src="./im" />
            <div>
              <p>Ella James</p>
              <p>EllaJames@gmail.com</p>
            </div>
          </div>
          <form>
            <div className="grid-section">
              <label>
                Full name <br />
                <input type="text" placeholder="" className="inputs" />
              </label>
              <label>
                Email address <br />
                <input
                  type="text"
                  placeholder="enter email address"
                  className="inputs"
                />
              </label>
              <label>
                Phone number <br />
                <input
                  type="text"
                  placeholder="enter phone number"
                  className="inputs"
                />
              </label>
              <label>
                Birthday <br />
                <input type="text" placeholder="dd/mm/yy" className="inputs" />
              </label>
            </div>

            <h2>Chnage Password</h2>
            <div className="pass-section">
              <label>
                Current password <br />
                <input
                  type="text"
                  placeholder="enter current password"
                  className="inputs"
                />
              </label>
              <label>
                New password <br />
                <input
                  type="text"
                  placeholder="enter new password"
                  className="inputs"
                />
              </label>
            </div>

            <h2>Address</h2>
            <div className="address-section">
              <label>
                Address <br />
                <input
                  type="text"
                  placeholder="enter home address"
                  className="inputs"
                />
              </label>
              <label>
                House no <br />
                <input
                  type="text"
                  placeholder="enter house number"
                  className="inputs"
                />
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
