import React from "react";
import "./ChangePassword.css";
import logoWhite from "../../assets/img/logo_white.png";
import arrowLeft from "../../assets/img/arrow-left.png"

export const ChangePassword = () => {

  const goBack = () => {
    window.location.href="/forgotPassword"
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
      <div id="auth">
        <header className="header">

          <button className="btn-round back-button" aria-label="login with google" onClick={goBack}>
            <img src={arrowLeft} alt="Apple logo" className="btn-round-img"/>
          </button>

          <h2>Reset Password</h2>
          <p>A confirmation link will be sent to your email to change your password</p>
        </header>

        <form action="" className="form">

          <label htmlFor="pasword1" className="label" id="password1">Old Password</label><br />
          <input type="password" placeholder="Enter Password" className="input input-password" name="password1"/>

          <label htmlFor="pasword2" className="label" id="password2">New Password</label><br />
          <input type="password" placeholder="Enter Password" className="input input-password" name="password" />

          <button className="btn btn-primary">Reset Password</button>
        </form>

      </div>
    </div>
  </div>
  )
};

export default ChangePassword;
