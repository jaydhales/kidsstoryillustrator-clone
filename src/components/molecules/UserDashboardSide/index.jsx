import { Component, React } from "react";

import PropTypes from "prop-types";

import "./UserDashboardSide.scss";
import Logo from "../../../assets/img/logo.png";
import UserDashboardHeader from "../UserDashboardHeader";
import UserDashboardMain from "../UserDashboardMain";
import hamburger from "./hamburger.svg";
import stories from "./edit.svg";
import acctimg from "./account.svg";
import newstory from "./newstory.svg";
import mystory from "./mystories.svg";
import lgout from "./logout.svg";
import { render } from "@testing-library/react";
import { Link } from "react-router-dom";
import 'https://kit.fontawesome.com/0f3801f26c.js'

class UserDashboardSide extends Component {
  state = { clicked: false };
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };
  render() {
    return (
      <>
        <div className="UserDashboardSide">
          <div className="sidebar" id="mySidenav">
            <Link id="linktext" to="/home" className="logo">
              <img src={Logo} alt="logo" />
            </Link>
            <Link id="linktext" to="/home" className="active">
              <img src={newstory} className="sidebarIcon" /> Create New Story
            </Link>
            <Link id="linktext" to="/home" className="mystory">
              <img src={mystory} className="sidebarIcon" /> My Stories
            </Link>
            <Link id="linktext" to="/home" className="stories">
              <img src={stories} className="sidebarIcon" /> Stories
            </Link>
            <Link id="linktext" to="/home" className="account">
              {" "}
              <img src={acctimg} className="sidebarIcon" />
              Account
            </Link>
            <Link id="linktext" to="/home" className="upgrade">
              Upgrade to Premium
            </Link>

            <Link id="linktext" to="/home" className="logout">
              <img src={lgout} className="sidebarIcon" />
              Log Out
            </Link>
            <Link id="linktext" className="icon" onClick={this.handleClick}>
              <i
                className={
                  this.state.clicked ? "fa-solid fa-xmark" : "fa-solid fa-bars"
                }
              ></i>
            </Link>
          </div>
          <div
            id="myNav"
            className={this.state.clicked ? "overlay" : "overlayClose"}
          >
            <div className="overlay-content">
              <Link id="linktext" to="/home" className="active">
                Create New Story
              </Link>
              <Link id="linktext" to="/home">
                My Stories
              </Link>
              <Link id="linktext" to="/home">
                Stories
              </Link>
              <Link id="linktext" to="/home">
                Account
              </Link>
              <Link id="linktext" to="/home">
                Upgrade to Premium
              </Link>
              <Link id="linktext" to="/home">
                My Stories
              </Link>
              <Link id="linktext" to="/home">
                Log Out
              </Link>
            </div>
          </div>

          <div className="content">
            <UserDashboardHeader />
            <UserDashboardMain />
          </div>
        </div>
      </>
    );
  }
}
// These are the types of the props that are passed to the component

UserDashboardSide.propTypes = {};

// These are their default values

UserDashboardSide.defaultProps = {};

export default UserDashboardSide;
