import React, { useContext, useState } from "react";

import Navbar from "../../../components/molecules/Navbar";
import SideBar from "../../../components/molecules/SideBar";
import vector from "../../../assets/images/Vector-orange.png";
import vector1 from "../../../assets/images/Vector-blue.png";
import vector2 from "../../../assets/images/Vector-green.png";
import circle from "../../../assets/images/Ellipse 4.png";
import options from "../../../assets/images/more.png";
import axios from "axios"
import ViewStoryCard from "../../../components/atoms/ViewStoryCard";
import "./UsersDashboard.scss";
import PropTypes from "prop-types";
import { AuthContext } from "../../../contexts/AuthContext";
import { UserContext } from "../../../contexts/UserContext";
export const UsersDashboard = () => {
  const {userStories} = useContext(UserContext)
   
  return (
    <div className="UsersDashboard">
      <div className="nav3">
        <Navbar />
      </div>
      <div className="UsersDashboard1">
        <div className="side-bar3">
          <SideBar/>
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
            <div className="rig1">
              <h1 className="head">Recent stories</h1>
              <button className="btnz" onClick={() => window.location.reload()}>
                see all
              </button>
            </div>
            <div className="header-boxes2">
              <div className="vix1">
                <div className="vix3">
                  <div className="vix2">
                    <img src={circle} alt="" className="footer-img" />
                    <div>
                      <b>Anonymous</b>
                      <p>today</p>
                    </div>
                  </div>
                  <img src={options} alt="" className="opt" />
                </div>
                <div className="vix4">
                  <b>A wise old owl</b>
                  <p>Black and white</p>
                </div>
                <p>
                  There was an old owl who lived in an oak tree. everyday, he
                  observes incident that occurs around him.
                </p>
                <button
                  className="btn-vix"
                  onClick={() => window.location.reload()}
                >
                  View
                </button>
              </div>
              <div className="vix1">
                <div className="vix3">
                  <div className="vix2">
                    <img src={circle} alt="" className="footer-img" />
                    <div>
                      <b>Anonymous</b>
                      <p>today</p>
                    </div>
                  </div>
                  <img src={options} alt="" className="opt" />
                </div>
                <div className="vix4">
                  <b>a wise old owl</b>
                  <p>Black and white</p>
                </div>
                <p>
                  There was an old owl who lived in an oak tree. everyday, he
                  observes incident that occurs around him.
                </p>
                <button
                  className="btn-vix"
                  onClick={() => window.location.reload()}
                >
                  View
                </button>
              </div>
              <div className="vix1">
                <div className="vix3">
                  <div className="vix2">
                    <img src={circle} alt="" className="footer-img" />
                    <div>
                      <b>Anonymous</b>
                      <p>today</p>
                    </div>
                  </div>
                  <img src={options} alt="" className="opt" />
                </div>
                <div className="vix4">
                  <b>a wise old owl</b>
                  <p>Black and white</p>
                </div>
                <p>
                  There was an old owl who lived in an oak tree. everyday, he
                  observes incident that occurs around him.
                </p>
                <button
                  className="btn-vix"
                  onClick={() => window.location.reload()}
                >
                  View
                </button>
              </div>
            </div>
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
