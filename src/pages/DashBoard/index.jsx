import React from "react";

import PropTypes from "prop-types";

import "./DashBoard.scss";

// React Circular Progressbar
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";

// Images
import logo from "../../assets/images/dashboard/logo.svg";
import user from "../../assets/images/dashboard/profile.svg";
import group from "../../assets/images/dashboard/group.svg";
import edit from "../../assets/images/dashboard/edit.svg";
import profile from "../../assets/images/dashboard/profile-circle.svg";
import blog from "../../assets/images/dashboard/blogger.svg";
import setting from "../../assets/images/dashboard/setting-2.svg";
import avatar from "../../assets/images/dashboard/avatar.svg";
import asia from "../../assets/images/dashboard/asia.svg";
import logout from "../../assets/images/dashboard/logout.svg";
import contact from "../../assets/images/dashboard/contact.svg";
import nav from "../../assets/images/dashboard/nav.svg";
import more from "../../assets/images/dashboard/more.svg";
import image1 from "../../assets/images/dashboard/image1.svg";
import image2 from "../../assets/images/dashboard/image2.svg";
import image3 from "../../assets/images/dashboard/image3.svg";

export const DashBoard = () => {
  const noOfStories = 48;
  const timeSpent = 20;
  return (
    <div className="dashboard">
      <div className="sidebar">
        <div className="sidebar-logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="sidebar-menu">
          <div className="user side">
            <img src={user} alt="user" />
            <p>Dashboard</p>
          </div>
          <div className="group side">
            <img src={group} alt="group" />
            <p>All Users</p>
          </div>
          <div className="edit side">
            <img src={edit} alt="edit" />
            <p>All stories</p>
          </div>
          <div className="profile side">
            <img src={profile} alt="profile" />
            <p>Profile</p>
          </div>
          <div className="blog side">
            <img src={blog} alt="blog" />
            <p>Blog</p>
          </div>
          <div className="setting side">
            <img src={setting} alt="setting" />
            <p>Dashboard</p>
          </div>
        </div>
        <div className="avatar-zone">
          <div className="avatar">
            <img src={avatar} alt="avatar" />
          </div>
          <h4>Mark Essien</h4>
          <p>Admin</p>
        </div>
        <div className="log-out">
          <img src={logout} alt="logout" />
          <p>Sign Out</p>
        </div>
      </div>
      <div className="main-board">
        <div className="user-header">
          <h1>User Details</h1>
          <div className="user-track">
            <p className="admin">Admin Dashboard</p>
            <img src={nav} alt="nav" />
            <p>User</p>
            <img src={nav} alt="nav" />
            <p>User Details</p>
          </div>
        </div>
        {/* User Information */}
        <div className="user-info">
          <div className="user-image">
            <img src={asia} alt="asia" />
          </div>
          <div className="user-cred">
            <div className="status">
              <h3>Cythnia Nduka</h3>
              <span>Active</span>
            </div>
            <p>Teacher/Illustrator</p>
          </div>
        </div>
        {/* About User */}
        <div className="about-user">
          <h1>About User</h1>
          <p>
            Cynthia Nduka is an illustrator and passionate teacher. Illustrating
            stories since she was a child, Ibinola uses her art to bring people
            together and make them feel connected. She believes that one of the
            best ways to teach is by telling stories, and she uses her
            illustrations to help others learn about the world around them. She
            has been teaching for over a decade, including at universities such
            as Harvard University, MIT and Stanford. She has also taught at
            schools from kindergarten through high school levels, including
            public schools in the United States as well as international schools
            around the world.
          </p>

          <p>
            She believes that it&apos;s important to create art that not only
            entertains, but also teaches people a new perspective on life. Her
            work has been featured in publications such as The New York Times
            and The Huffington Post, as well as several local magazines.
          </p>
        </div>
        {/* Personal Information */}
        <div className="personal-info">
          <h1>All Personal Informations</h1>
          <div className="personal-card">
            <div className="inner-card">
              <img src={contact} alt="contact" />
              <div className="card-info">
                <h4>Cynka</h4>
                <p>Username</p>
              </div>
            </div>
            <div className="inner-card">
              <img src={contact} alt="contact" />
              <div className="card-info">
                <h4>cynthianduka@gmail.com</h4>
                <p>Email Address</p>
              </div>
            </div>
            <div className="inner-card">
              <img src={contact} alt="contact" />
              <div className="card-info">
                <h4>+234 705 594 2315</h4>
                <p>Phone Number</p>
              </div>
            </div>
            <div className="inner-card">
              <img src={contact} alt="contact" />
              <div className="card-info">
                <h4>www.kidstrator.com</h4>
                <p>Website</p>
              </div>
            </div>
            <div className="inner-card">
              <img src={contact} alt="contact" />
              <div className="card-info">
                <h4>Gender</h4>
                <p>Female</p>
              </div>
            </div>
            <div className="inner-card">
              <img src={contact} alt="contact" />
              <div className="card-info">
                <h4>1st November 2022</h4>
                <p>Date joined</p>
              </div>
            </div>
            <div className="inner-card">
              <img src={contact} alt="contact" />
              <div className="card-info">
                <h4>2972 Westheimer Rd. Santa Ana, Illinois 85486</h4>
                <p>Address</p>
              </div>
            </div>
          </div>
        </div>
        {/* User Analytics */}
        <div className="user-analytics">
          <h1>User Analytics</h1>
          <div className="analytics-board">
            <div className="inner-board">
              <CircularProgressbar
                value={noOfStories}
                text={`${noOfStories}`}
                styles={buildStyles({
                  strokeLinecap: "butt",
                  textColor: "#aa0136",
                  trailColor: "#aa0136",
                })}
              />
              <div className="board-text">
                <p>Number of Stories</p>
              </div>
            </div>
            <div className="inner-board">
              <CircularProgressbar
                value={timeSpent}
                text="2hrs"
                styles={buildStyles({
                  textColor: "#aa0136",
                  pathColor: "#aa0136",
                  trailColor: "#ffffff",
                })}
              />
              <div className="board-text">
                <p>Number of Hours Spent</p>
              </div>
            </div>
            <div className="inner-board">
              <CircularProgressbar
                value={noOfStories}
                text="20"
                styles={buildStyles({
                  strokeLinecap: "butt",
                  textColor: "#aa0136",
                  trailColor: "#aa0136",
                })}
              />
              <div className="board-text">
                <p>Number of Visit</p>
              </div>
            </div>
            <div className="inner-board">
              <CircularProgressbar
                value={noOfStories}
                text="20"
                styles={buildStyles({
                  strokeLinecap: "butt",
                  textColor: "#aa0136",
                  trailColor: "#aa0136",
                })}
              />
              <div className="board-text">
                <p>Number of Visit</p>
              </div>
            </div>
          </div>
        </div>
        {/* Stories Users */}
        <div className="stories-users">
          <div className="stories-header">
            <h1>Stories Users Have Written</h1>
            <p>View All</p>
          </div>
          <div className="stories-container">
            <div className="stories-card">
              <img src={image1} alt="image1" />
              <div className="stories-card-text">
                <div className="inner-card-text">
                  <h4>Mermaid and Pacific</h4>
                  <p>5th November, 2022</p>
                </div>
                <div className="more-icon">
                  <img src={more} alt="more" />
                </div>
              </div>
            </div>
            <div className="stories-card">
              <img src={image2} alt="image2" />
              <div className="stories-card-text">
                <div className="inner-card-text">
                  <h4>Mermaid and Pacific</h4>
                  <p>5th November, 2022</p>
                </div>
                <div className="more-icon">
                  <img src={more} alt="more" />
                </div>
              </div>
            </div>
            <div className="stories-card">
              <img src={image3} alt="image3" />
              <div className="stories-card-text">
                <div className="inner-card-text">
                  <h4>Mermaid and Pacific</h4>
                  <p>5th November, 2022</p>
                </div>
                <div className="more-icon">
                  <img src={more} alt="more" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// These are the types of the props that are passed to the component

DashBoard.propTypes = {};

// These are their default values

DashBoard.defaultProps = {};

export default DashBoard;
