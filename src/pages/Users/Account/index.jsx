import React, { useState } from "react";

import Ellipse from "../../../assets/images/Ellipse.svg";
import "./Account.scss";
import PropTypes from "prop-types";
export const Account = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    userName: "",
    email: "",
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
    <div className="Account">
      <div className="cover-2">
        <div className="image-section">
          <img src={Ellipse} alt="/" className="img-1" />
          <button className="btns-1">Upload</button>
          <button className="btns-2">Remove</button>
        </div>
        <form>
          <div className="grid-section1">
            <label>
              Full Name <br />
              <input
                type="text"
                className="input2"
                placeholder="John Devenmson "
                name="firstname"
                value={formData.firstName}
                onChange={handleChange}
              />
              <br />
              {submitted && !formData.firstName ? (
                <span className="span1">enter your first name.</span>
              ) : null}
            </label>
            <label>
              Last Name <br />
              <input
                type="text"
                className="input2"
                placeholder="Ighadolo"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
              />
              <br />
              {submitted && !formData.lastName ? (
                <span className="span1">enter your last name.</span>
              ) : null}
            </label>
            <label>
              Username <br />
              <input
                type="text"
                className="input2"
                placeholder="John"
                name="userName"
                value={formData.userName}
                onChange={handleChange}
              />
              <br />
              {submitted && !formData.userName ? (
                <span className="span1">enter a username.</span>
              ) : null}
            </label>
            <label>
              Email address <br />
              <input
                type="email"
                className="input2"
                placeholder="JohnDevenmson@gmail.com"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
              <br />
              {submitted && !formData.email ? (
                <span className="span1">enter your email.</span>
              ) : null}
            </label>
          </div>
        </form>
        <div className="footer-section">
          <div>
            <button className="btns-3">Delete account</button>
            <p className="text-1">
              By deleting your account, you’ll lose all your data
            </p>
          </div>
          <div>
            <button className="btns-4" onClick={submitForm}>
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// These are the types of the props that are passed to the component

Account.propTypes = {};

// These are their default values

Account.defaultProps = {};

export default Account;
