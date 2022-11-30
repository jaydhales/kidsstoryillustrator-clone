import { Component, React } from "react";

import PropTypes from "prop-types";

import "./UserDashboardSide.scss";
import Logo from "../../../assets/img/logo.png";
import UserDashboardHeader from "../UserDashboardHeader";
import UserDashboardMain from "../UserDashboardMain";
import stories from "./edit.svg";
import acctimg from "./account.svg";
import newstory from "./newstory.svg";
import mystory from "./mystories.svg";
import lgout from "./logout.svg";
import { render } from "@testing-library/react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

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
            <Link id="linktext" to="/" className="logo">
              <img src={Logo} alt="logo" />
            </Link>
            <Link id="linktext" to="/createstory" className="newstory">
              <img src={newstory} className="sidebarIcon" /> Create New Story
            </Link>
            <Link id="linktext" to="/userdashboard" className="active">
              <img src={mystory} className="sidebarIcon" /> My Stories
            </Link>
            <Link id="linktext" to="/mystories" className="stories">
              <img src={stories} className="sidebarIcon" /> Stories
            </Link>
            <Link id="linktext" to="/profile" className="account">
              {" "}
              <img src={acctimg} className="sidebarIcon" />
              Account
            </Link>
            <Link id="linktext" to="/pricing" className="upgrade">
              Upgrade to Premium
            </Link>

            <Link id="linktext" to="/logout" className="logout">
              <img src={lgout} className="sidebarIcon" />
              Log Out
            </Link>
            <Link id="linktext" className="icon" onClick={this.handleClick}>
              <GiHamburgerMenu />
            </Link>
          </div>
          <div
            id="myNav"
            className={this.state.clicked ? "overlay" : "overlayClose"}
          >
            <div className="overlay-content">
              <Link id="linktext" to="/createstory" className="active">
                Create New Story
              </Link>
              <Link id="linktext" to="/userdashboard">
                My Stories
              </Link>
              <Link id="linktext" to="/mystories">
                Stories
              </Link>
              <Link id="linktext" to="/profile">
                Account
              </Link>
              <Link id="linktext" to="/pricing">
                Upgrade to Premium
              </Link>
              <Link id="linktext" to="/logout">
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
