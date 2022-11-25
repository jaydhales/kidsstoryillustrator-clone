import { Component, React } from "react";

import PropTypes from "prop-types";

import "./UserDashboardSide.scss";
import Logo from "../../../assets/img/logo.png";
import UserDashboardHeader from "../UserDashboardHeader";
import UserDashboardMain from "../UserDashboardMain";
import hamburger from "./hamburger.svg";
import { render } from "@testing-library/react";

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
            <a>
              <img src={Logo} alt="logo" className="logo" />
            </a>
            <a className="active" href="#">
              Create New Story
            </a>
            <a href="#">My Stories</a>
            <a href="#">Stries</a>
            <a
              href="javascript:void(0);"
              className="icon"
              onClick={this.handleClick}
            >
              <img
                src={hamburger}
                className={this.state.clicked ? "&times;" : "&#9776;"}
              />
            </a>
          </div>
          <div
            id="myNav"
            className={this.state.clicked ? "overlay" : "overlayClose"}
          >
            <div className="overlay-content">
              <a className="active" href="#">
                Create New Story
              </a>
              <a href="#">My Stories</a>
              <a href="#">Stries</a>
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
