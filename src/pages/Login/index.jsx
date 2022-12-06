import React, { useContext } from "react";
import "./Login.scss";
import logo from "../../assets/img/logo.png";
import logoWhite from "../../assets/img/logo_white.svg";
import googleLogo from "../../assets/img/google.png";
import facebookLogo from "../../assets/img/facebook-icon.png";
import appleLogo from "../../assets/img/apple-icon.png";
import leftArrow from "../../assets/img/left-arrow.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";

export const Login = () => {
  const { handleLogIn, apiUrl } = useContext(AuthContext);
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [errors, setErrors] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const navigate = useNavigate();

  const endpoint = apiUrl + "auth/signin";

  const handleFormSubmit = (e) => {
    e.preventDefault();

    setIsLoading(true);
    setErrors([]);

    if (!email || !password) {
      setIsLoading(false);
      setErrors([...errors, "Fields cannot be empty"]);
    }

    const body = JSON.stringify({ email, password });
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    axios
      .post(endpoint, body, config)
      .then((res) => {
        setIsLoading(false);
        handleLogIn(res.data.data);
        navigate("/users/dashboard");
      })
      .catch((err) => {
        setIsLoading(false);

        console.log(err);

        setErrors([...errors, err.message]);
      });
  };

  return (
    <div className="Login">
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
                <a href="/login" className="link tab-link active">
                  Login
                </a>
                <a href="/signup" className="link tab-link">
                  Create Account
                </a>
              </nav>
            </header>

            <form onSubmit={handleFormSubmit} className="form" id="login-form">
              <label htmlFor="email" className="label">
                Email
              </label>
              <br />
              <input
                type="text"
                placeholder="Enter Email Address"
                className="input"
                name="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)} required
              />

              <label htmlFor="pasword" className="label">
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
                onChange={(e) => setPassword(e.target.value)} required
              />

              {errors.map((error, index) => (
                <p key={index} className="error">
                  {error}
                </p>
              ))}
              <button className="btn btn-primary">
                {isLoading ? "Logging in..." : "Log In"}
              </button>
            </form>

            <a href="/forgotPassword" id="reset-password">
              Forgot Password
            </a>

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

export default Login;
