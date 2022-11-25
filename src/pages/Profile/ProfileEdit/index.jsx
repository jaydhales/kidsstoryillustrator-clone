import React from "react";
import { Layout } from "../../../components/molecules";

import PropTypes from "prop-types";
import avatar from "../../../assets/images/avatar.svg";
import shuffle from "../../../assets/icons/shuffle.svg";
import { Button } from "../../../components/atoms";

import "./ProfileEdit.scss";

const ProfileEdit = () => {
  return (
    <Layout>
      <div className="ProfileEdit">
        <h2 className="heading">Edit Profile</h2>

        <div className="main">
          <div className="profile-avatar">
            <div>
              <img src={avatar} alt="" />
            </div>

            <Button>
              <span>
                <img src={shuffle} alt="" />
              </span>{" "}
              Use random avatar
            </Button>
          </div>

          <form action="">
            <div className="form-group">
              <label htmlFor="firstName">
                Edit First Name
                <input
                  type="text"
                  id="firstName"
                  placeholder="Enter First name "
                />
              </label>
              <label htmlFor="lastName">
                Edit Last Name
                <input
                  type="text"
                  id="lastName"
                  placeholder="Enter Last name "
                />
              </label>
            </div>

            <div className="form-group">
              <label htmlFor="userName">
                Edit Username
                <input type="text" id="userName" placeholder="Edit Username" />
              </label>
              <label htmlFor="email">
                Edit Email
                <input
                  type="text"
                  id="email"
                  placeholder="powerdrill@story.ai "
                />
              </label>
            </div>

            <div className="form-group">
              <label htmlFor="password">
                New Password
                <input type="password" id="password" placeholder="*********" />
              </label>

              <label htmlFor="confirmPass">
                Confirm new Password
                <input
                  type="password"
                  id="confirmPass"
                  placeholder="*********"
                />
              </label>
            </div>

            <div className="form-action">
              <a href="">Cancel</a>

              <Button>Save Changes</Button>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};

// These are the types of the props that are passed to the component

ProfileEdit.propTypes = {};

// These are their default values

ProfileEdit.defaultProps = {};
export default ProfileEdit;
