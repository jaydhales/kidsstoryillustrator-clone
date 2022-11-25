import React from "react";

import PropTypes from "prop-types";

import "./UserDashboardHeader.scss";
import dpdbtn from "./dpdbtn.svg"

export const UserDashboardHeader = () => {
  return (
    <>
      <div className="UserDashboardHeader">
        <div className="dashHead">
          <a href="#home">My Story</a>

          <div className="dropdown">
            <button className="dropbtn">
              Dropdown
            </button>
            <div className="dropdown-content">
              <a href="#">Link 1</a>
              <a href="#">Link 2</a>
              <a href="#">Link 3</a>
            </div>
          </div>
        </div>
        <div className="hrCol">
          <hr className="hr" />
        </div>
      </div>
    </>
  );
};

// These are the types of the props that are passed to the component

UserDashboardHeader.propTypes = {};

// These are their default values

UserDashboardHeader.defaultProps = {};

export default UserDashboardHeader;
