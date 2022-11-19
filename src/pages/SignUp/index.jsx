import React from "react";
import "./SignUp.css";
import logo from "../../assets/img/logo.png";

export const SignUp = () => {
  return (
    <div id="auth">
      <header className="center-align">
        <img src={logo} alt="logo" id="logo" />
        <nav className="auth-nav">
          <a href="/login" className="link tab-link">Login</a>
          <a href="/signup" className="link tab-link active">Sign Up</a>
        </nav>
      </header>

      <form action="" className="form">

          <label htmlFor="email" className="label">Email</label><br />
          <input type="text" placeholder="Enter Email Address" className="input" name="email" />

          <label htmlFor="username" className="label">Username</label><br />
          <input type="text" placeholder="Enter Username" className="input" name="username"/>

          <label htmlFor="pasword" className="label">Password</label><br />
          <input type="password" placeholder="Enter Password" className="input input-password" name="username"/>

          <button className="btn btn-primary">Sign Up</button>
        </form>

    </div>
  );
};

export default SignUp;
