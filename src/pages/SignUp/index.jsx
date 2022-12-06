import { useRef, useState, useEffect, useContext } from "react";
import React from "react";
import "./SignUp.scss";
import logo from "../../assets/img/logo.png";
import googleLogo from "../../assets/img/google.png";
import facebookLogo from "../../assets/img/facebook-icon.png";
import appleLogo from "../../assets/img/apple_logo.png";
import logoWhite from "../../assets/img/logo_white.svg";
import leftArrow from "../../assets/img/left-arrow.png";


import { useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../../contexts/AuthContext";

const SignUp = () => {
  const userRef = useRef();
  const errRef = useRef();
  const { handleSignUp, apiUrl } = useContext(AuthContext);
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [errors, setErrors] = React.useState([]);
  const [username, setUsername] = React.useState("");
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);
  const navigate = useNavigate();
  // const dispatch = useDispatch();

  const endpoint = apiUrl + "auth/signup";

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    if (!email || !password || !username || !lastName || !firstName) {
      setIsLoading(false);
      setErrors([...errors, "Fields cannot be empty"]);
      return;
    }

    const body = JSON.stringify({
      email,
      firstName,
      lastName,
      password,
      username,
    });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    axios
      .post(endpoint, body, config)
      .then((res) => {
        setIsLoading(false);
        handleSignUp(res.data.data);
        navigate("/userdashboard");
      })
      .catch((err) => {
        setIsLoading(false);
        setErrors([...errors, err.message]);
      });
  };

  return (
    <div className="Signup">
      <div className="two-column">
      
        <div className="branding">
        <img
     onClick={() => navigate('/')}
                  src={leftArrow}
                  alt="Facebook logo"
                  className="back-arrow"
                />
          <div className="content">
         
            <img src={logoWhite} alt="logo" id="logo" />
            <div className="text">
              <h2>The easiest way to write kids story books </h2>
              <p>
                Write your stories and generate amazing pictures with the help
                of our ai technologies.
              </p>
            </div>
          </div>
        </div>

        <div>
          <div id="auth">
            <header className="center-align">
              <img src={logo} alt="logo" id="logo2" />
              <nav className="auth-nav">
                <a href="/login" className="link tab-link">
                  Login
                </a>
                <a href="/signup" className="link tab-link active">
                  Create Account
                </a>
              </nav>
            </header>

            <form onSubmit={handleFormSubmit} className="form">
              <label htmlFor="email" className="label">
                Email
              </label>
              <br />
              <input
                type="email"
                placeholder="Enter Email Address"
                className="input"
                name="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />

              <label htmlFor="firstName" className="label">
                First Name
              </label>
              <br />
              <input
                type="text"
                placeholder="Enter first name"
                className="input"
                name="firstName"
                id="firstName"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />

              <label htmlFor="lastName" className="label">
                Last Name
              </label>
              <br />
              <input
                type="text"
                placeholder="Enter last name"
                className="input"
                name="lastName"
                id="lastName"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
              />

              <label htmlFor="username" className="label">
                Username
              </label>
              <br />
              <input
                type="text"
                placeholder="Enter Username"
                className="input"
                name="username"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />

              <label htmlFor="password" className="label">
                Password
              </label>
              <br />
              <input
                type="password"
                placeholder="Enter Password"
                className="input input-password"
                name="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />

              {errors.map((error, index) => (
                <p key={index} className="error">
                  {error}
                </p>
              ))}
              <button className="btn btn-primary">
                {isLoading ? "Signing Up..." : "Sign Up"}
              </button>
              <p className="disclaimer">
                {" "}
                By creating an account, you agree to our Terms of Service and
                Privacy & Cookie Statement.
              </p>
            </form>

            <div className="flex or">
              <div className="hLine"></div>
              <p>Or</p>
              <div className="hLine"></div>
            </div>

            <p className="continue-with">Continue with</p>

            {/* <div className="auth-links">
              <button className="btn-round" aria-label="login with google" id="google-login">
                <img
                  src={googleLogo}
                  alt="Google logo"
                  className="btn-round-img"
                />
                                <p>Continue with Google</p>

              </button>

              <button className="btn-round" aria-label="login with google" id="facebook-login">
                <img
                  src={facebookLogo}
                  alt="Facebook logo"
                  className="btn-round-img"
                />
                                <p>Continue with Facebook</p>

              </button>

              <button className="btn-round" aria-label="login with google" id="apple-login">
                <img
                  src={appleLogo}
                  alt="Apple logo"
                  className="btn-round-img"
                />
                                <p>Continue with Apple</p>

              </button>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
