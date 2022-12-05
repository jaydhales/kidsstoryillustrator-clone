import React, { useState } from "react";


import SideBar from "../../../components/molecules/SideBar"
import "./UsersDashboard.scss";
import PropTypes from "prop-types";
export const AccountInfo = () => {
 
  return (
    <div className="UsersDashboard">
      <div className="side-bar3">
          <SideBar />
        </div>
        <div className="wrap-content1">
            <h1>Dashboard</h1>
            <div className="header-boxes1">
              <div className="cover1">
                <p>No of stories </p>
                <div className="fig-1">
                  <b>100</b>
                  <img src="" alt="" />
                </div>
                <p>created</p>
              </div>
              <div className="cover2">
                <p>No of stories </p>
                <div className="fig-1">
                  <b>50</b>
                  <img src="" alt="" />
                </div>
                <p>created</p>
              </div>
              <div className="cover3">
                <p>No of stories </p>
                <div className="fig-1">
                  <b>20</b>
                  <img src="" alt="" />
                </div>
                <p>created</p>
              </div>
            </div>

            <div className="footer-boxes">
              <div className="rig1">
                <h1>Top stories</h1>
                <button>see all</button>
              </div>
              <div className="header-boxes2">
                <div className="vix1">
                  <div>
                    <div>
                      <img src="" alt="" />
                      <div>
                        <b>Anonymous</b>
                        <p>today</p>
                      </div>
                    </div>
                    <img src="" alt="" />
                  </div>
                  <b>a wise old owl</b>
                  <p>Black and white</p>
                  <p>There was an old owl who lived in an oak tree. everyday, he observes incident that occurs around him.</p>
                  <button className="btn-vix">View</button> 
                </div>
                <div className="vix1">
                  <div>
                    <div>
                      <img src="" alt="" />
                      <div>
                        <b>Anonymous</b>
                        <p>today</p>
                      </div>
                    </div>
                    <img src="" alt="" />
                  </div>
                  <b>a wise old owl</b>
                  <p>Black and white</p>
                  <p>There was an old owl who lived in an oak tree. everyday, he observes incident that occurs around him.</p>
                  <button className="btn-vix">View</button> 
                </div>
                <div className="vix1">
                  <div>
                    <div>
                      <img src="" alt="" />
                      <div>
                        <b>Anonymous</b>
                        <p>today</p>
                      </div>
                    </div>
                    <img src="" alt="" />
                  </div>
                  <b>a wise old owl</b>
                  <p>Black and white</p>
                  <p>There was an old owl who lived in an oak tree. everyday, he observes incident that occurs around him.</p>
                  <button className="btn-vix">View</button> 
                </div>
              </div>
            </div>
        </div>
    </div>
  );
};

// These are the types of the props that are passed to the component

AccountInfo.propTypes = {};

// These are their default values

AccountInfo.defaultProps = {};

export default AccountInfo;
