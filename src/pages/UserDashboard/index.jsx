import React from "react";

import PropTypes from "prop-types";

import "./UserDashboard.scss";
import UserDashboardSide from "../../components/molecules/UserDashboardSide";

export const UserDashboard = () => {
  return (
    <div className="UserDashboard">
      <UserDashboardSide />
    </div>
  );
};

// These are the types of the props that are passed to the component

UserDashboard.propTypes = {};

// These are their default values

UserDashboard.defaultProps = {};

export default UserDashboard;
