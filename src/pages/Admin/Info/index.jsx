import React, { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import PropTypes from "prop-types";

import "./AccountInfo.css";
import dashboard from "../../../assets/images/Group 1.svg";
import messages from "../../../assets/images/Group 2.svg";
import settings from "../../../assets/images/setting-side.svg";
import profile from "../../../assets/images/profile-circle.svg";
import favBook from "../../../assets/images/book-square.svg";
import savedBook from "../../../assets/images/book-saved.svg";
import login from "../../../assets/images/login.svg";

export const Info = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    birthday: "",
    currentPassword: "",
    newPassword: "",
    address: "",
    houseNo: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [valid, setValid] = useState(false);

  function handleChange(event) {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value,
      };
    });
  }

  function submitForm(e) {
    e.preventDefault();
    if (formData.firstName && formData.lastName && formData.email) {
      setValid(true);
    }
    setSubmitted((prevState) => !prevState);
  }

  return (
    <div className="App1">
      <div className="dashboard1">
        <div className="sidebar1">
          <div className="sidebar-menu1">
            <h4>Menu</h4>
            <div className="user side1">
              <img src={dashboard} alt="user" />
              <p>Dashboard</p> <IoIosArrowForward />
            </div>
            <div className="group side1">
              <img src={messages} alt="group" />
              <p>messages</p> <IoIosArrowForward />
            </div>
            <div className="edit side1">
              <img src={settings} alt="edit" />
              <p>settings</p> <IoIosArrowForward />
            </div>
            <div className="profile side1">
              <img src={profile} alt="profile" />
              <p>Profile</p> <IoIosArrowForward />
            </div>
            <div className="push">
              <h4>Story books</h4>
              <div className="blog side1">
                <img src={favBook} alt="blog" />
                <p>favorite books</p> <IoIosArrowForward />
              </div>
              <div className="book2 side1">
                <img src={favBook} alt="current-book" />
                <p>current read</p> <IoIosArrowForward />
              </div>
              <div className="book3 side1">
                <img src={savedBook} alt="setting" />
                <p>saved books</p> <IoIosArrowForward />
              </div>
              <div className="book4 side1">
                <img src={favBook} alt="setting" />
                <p>other books</p> <IoIosArrowForward />
              </div>
            </div>

            <div className="push2">
              <div className="book5 side1">
                <img src={login} alt="setting" />
                <p>other books</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="wrapper-div">
        <h2 className="header">Account Information</h2>
        <div className="cover-section">
          <b>Edit profile</b>
          <div className="profile">
            <img className="img" alt="" src="./assets/images/brazil.svg" />
            <div>
              <p>Ella James</p>
              <p>EllaJames@gmail.com</p>
            </div>
          </div>

          <form className="form-sec">
            <div className="grid-section">
              <label>
                Full name <br />
                <input
                  type="text"
                  placeholder=""
                  className="inputs"
                  value={formData.fullName}
                  name="fullName"
                  onChange={handleChange}
                />{" "}
                <br />
                {submitted && !formData.fullName ? (
                  <span className="span">enter your full name.</span>
                ) : null}
                <br />
              </label>
              <label>
                Email address <br />
                <input
                  type="text"
                  placeholder="enter email address"
                  className="inputs"
                  value={formData.email}
                  name="email"
                  onChange={handleChange}
                />
                {submitted && !formData.email ? (
                  <span className="span">enter an email.</span>
                ) : null}
                <br />
              </label>
              <label>
                Phone number <br />
                <input
                  type="text"
                  placeholder="enter phone number"
                  className="inputs"
                  value={formData.phoneNumber}
                  name="phoneNumber"
                  onChange={handleChange}
                />
                {submitted && !formData.phoneNumber ? (
                  <span className="span">enter a vaild number</span>
                ) : null}
                <br />
              </label>
              <label>
                Birthday <br />
                <input
                  type="text"
                  placeholder="dd/mm/yy"
                  className="inputs"
                  value={formData.birthday}
                  name="birthday"
                  onChange={handleChange}
                />
                {submitted && !formData.birthday ? (
                  <span className="span">Please enter an age.</span>
                ) : null}
                <br />
              </label>
            </div>

            <h2 className="pass-head">Change Password</h2>
            <div className="pass-section">
              <label>
                Current password <br />
                <input
                  type="text"
                  placeholder="enter current password"
                  className="inputs"
                  value={formData.currentPassword}
                  name="createPassword"
                  onChange={handleChange}
                />
                {submitted && !formData.currentPassword ? (
                  <span className="span">Enter your current password.</span>
                ) : null}
                <br />
              </label>
              <label>
                New password <br />
                <input
                  type="text"
                  placeholder="enter new password"
                  className="inputs"
                  value={formData.newPassword}
                  name="newPassword"
                  onChange={handleChange}
                />
                {submitted && !formData.newPassword ? (
                  <span className="span">Please enter your new password.</span>
                ) : null}{" "}
                <br />
              </label>
            </div>

            <h2>Address</h2>
            <div className="address-section">
              <label>
                Address <br />
                <input
                  type="text"
                  placeholder="enter home address"
                  className="inputs"
                  value={formData.address}
                  name="address"
                  onChange={handleChange}
                />
                {submitted && !formData.address ? (
                  <span className="span">Enter a valid address.</span>
                ) : null}{" "}
                <br />
              </label>
              <label>
                House no <br />
                <input
                  type="text"
                  placeholder="enter house number"
                  className="inputs"
                  value={formData.houseNo}
                  name="houseNo"
                  onChange={handleChange}
                />
                {submitted && !formData.houseNo ? (
                  <span className="span">Enter your house number.</span>
                ) : null}
                <br />
              </label>
            </div>
          </form>

          <div className="btns">
            <button className="btn1">Cancel</button>
            <button className="btn2" onClick={submitForm}>
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// These are the types of the props that are passed to the component

Info.propTypes = {};

// These are their default values

Info.defaultProps = {};

export default Info;
