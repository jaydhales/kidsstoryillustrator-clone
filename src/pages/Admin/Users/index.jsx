import React from "react";
import { CiSearch } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";

import PropTypes from "prop-types";

import "./Users.scss";

export const User = () => {
  return (
    <div className="Users">
      <div className="user-sidebar"></div>
      <div className="user-wrapper">
        <h2>Account Information </h2>
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
