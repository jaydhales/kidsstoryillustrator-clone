import React from "react";

import "./ForgotPassword.css";
import logoWhite from "../../assets/img/logo_white.png";
import arrowLeft from "../../assets/img/arrow-left.png"

export const ForgotPassword = () => {

  const goBack = () => {
    window.location.href="/login"
  }

  return (
    <div className="two-column">
    <div className="branding">
      <div className="content">
        <img src={logoWhite} alt="logo" id="logo" />
        <div className="text">
          <h2>The easiest way to write kids story books </h2>
          <p>Write your stories and generate amazing pictures with the help of our ai technologies.</p>
        </div>
      </div>
    </div>

    <div>
      <div id="auth" className="form-center">
        <header className="header">

          <button className="btn-round back-button" aria-label="login with google" onClick={goBack}>
            <img src={arrowLeft} alt="Apple logo" className="btn-round-img"/>
          </button>

          <h2>Reset Password</h2>
          <p>A confirmation link will be sent to your email to change your password</p>
        </header>

        <form action="" className="form">
          <label htmlFor="email" className="label">Email</label><br />
          <input type="text" placeholder="Enter Email Address" className="input" name="email" />

          <button className="btn btn-primary">Reset Password</button>
        </form>

      </div>
    </div>
  </div>
  );
};

export default ForgotPassword;
