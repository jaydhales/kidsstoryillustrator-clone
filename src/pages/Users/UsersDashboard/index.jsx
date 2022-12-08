import React, { useContext, useEffect, useState } from "react";

import Navbar from "../../../components/molecules/Navbar";
import SideBar from "../../../components/molecules/SideBar";
import vector from "../../../assets/images/Vector-orange.png";
import vector1 from "../../../assets/images/Vector-blue.png";
import vector2 from "../../../assets/images/Vector-green.png";
import ViewStoryCard from "../../../components/atoms/ViewStoryCard";
import "./UsersDashboard.scss";
import PropTypes from "prop-types";
import { UserContext } from "../../../contexts/UserContext";
export const UsersDashboard = () => {
  const { userStories, fetchStories } = useContext(UserContext);

  useEffect(() => {
    fetchStories();
  }, []);
  if (!userStories && userStories.length === 0) return null;

  return (
    <div className="UsersDashboard">
      <div className="nav3">
        <Navbar />
      </div>
      <div className="UsersDashboard1">
        <div className="side-bar3">
          <SideBar />
        </div>
        <div className="wrap-content1">
          <h1 className="head">Dashboard</h1>
          <div className="header-boxes1">
            <div className="cover1">
              <p>No of stories </p>
              <div className="fig-1">
                <b>100</b>
                <img src={vector} alt="" className="fig3" />
              </div>
              <p>created</p>
            </div>
            <div className="cover2">
              <p>No of stories </p>
              <div className="fig-1">
                <b>50</b>
                <img src={vector1} alt="" className="fig3" />
              </div>
              <p>created</p>
            </div>
            <div className="cover3">
              <p>No of stories </p>
              <div className="fig-1">
                <b>20</b>
                <img src={vector2} alt="" className="fig3" />
              </div>
              <p>created</p>
            </div>
          </div>

          <div className="footer-boxes">
            <div className="recent-heading">
              <h3>Recently Created</h3>
            </div>
            <ViewStoryCard data={userStories} />
          </div>
        </div>
      </div>
    </div>
  );
};

// These are the types of the props that are passed to the component

UsersDashboard.propTypes = {};

// These are their default values

UsersDashboard.defaultProps = {};

export default UsersDashboard;
