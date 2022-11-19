import React from "react";
import "./Login.scss";
import logo from "../../assets/img/logo.png";
import logoWhite from "../../assets/img/logo_white.png";
import googleLogo from "../../assets/img/google_logo.png";
import facebookLogo from "../../assets/img/facebook_logo.png";
import appleLogo from "../../assets/img/apple_logo.png";


export const Login = () => {
  return (
    <div className="Login">
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
      <header className="center-align">
        <img src={logo} alt="logo" id="logo2" />
        <nav className="auth-nav">
          <a href="/login" className="link tab-link active">Login</a>
          <a href="/signup" className="link tab-link">Create Account</a>
        </nav>
      </header>

        <form action="" className="form">

          <label htmlFor="email" className="label">Email</label><br />
          <input type="text" placeholder="Enter Email Address" className="input" name="email" />

          <label htmlFor="pasword" className="label">Password</label><br />
          <input type="password" placeholder="Enter Password" className="input input-password" name="username"/>

          <button className="btn btn-primary">Log In</button>
        </form>

        <a href="/reset-password" id="reset-password">Forgot Password</a>

        <div className="flex or">
          <div className="hLine"></div>
          <p>Or</p>
          <div className="hLine"></div>
        </div>

        <p className="continue-with">Continue with</p>

        <div className="auth-links">
          <button className="btn-round" aria-label="login with google">
            <img src={googleLogo} alt="Google logo" className="btn-round-img"/>
          </button>

          <button className="btn-round" aria-label="login with google">
            <img src={facebookLogo} alt="Facebook logo" className="btn-round-img"/>
          </button>

          <button className="btn-round" aria-label="login with google">
            <img src={appleLogo} alt="Apple logo" className="btn-round-img"/>
          </button>
        </div>

      </div>
      </div>
    </div>
    </div>
  );
};

export default Login;
