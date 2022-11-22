import React from "react";

import "./ForgotPassword.scss";
import logoWhite from "../../assets/img/logo_white.png";
import arrowLeft from "../../assets/img/arrow-left.png"

export const ForgotPassword = () => {
  const [ email, setEmail ] = React.useState("");
  const [ errors, setErrors ] = React.useState([]);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if(!email){
      setErrors([...errors, "Fields cannot be empty"])
    }
  }

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

        <form className="form" onSubmit={handleFormSubmit}>
          <label htmlFor="email" className="label">Email</label><br />
          <input type="text" placeholder="Enter Email Address" className="input" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />

          { errors.map((error, index) => <p key={index} className="error">{error}</p>)}

          <button className="btn btn-primary">Reset Password</button>
        </form>

      </div>
    </div>
  </div>
  );
};

export default ForgotPassword;
