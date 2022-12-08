import React, { useContext } from "react";
import "./Login.scss";
import logo from "../../assets/img/logo.png";
import logoWhite from "../../assets/img/logo_white.svg";
import googleLogo from "../../assets/img/google.png";
import facebookLogo from "../../assets/img/facebook-icon.png";
import appleLogo from "../../assets/img/apple-icon.png";
import leftArrow from "../../assets/img/left-arrow.png";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";

export const Login = () => {
  const { handleLogIn, apiUrl, locationHistory, setLocationHistory } =
    useContext(AuthContext);
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
        if (locationHistory.length === 0) {
          navigate("/users/dashboard");
        } else {
          navigate(locationHistory);
          setLocationHistory("");
        }
      })
      .catch((err) => {
        setIsLoading(false);

        console.log(err);

        setErrors([...errors, err.message]);
      });
  };

  return (
    <div className="User_Login">
        <div className="branding">
          <div className="user_content">
            <img
              onClick={() => navigate("/")}
              src={logoWhite}
              alt="logo"
              id="logo"
            />
            <div className="user_text">
              <h4 className="user_text_header">The easiest way to write kids story books </h4>
              <p className="user_text_paragraph">
                Write your stories and generate amazing pictures with the help
                of our ai technologies.
              </p>
            </div>
          </div>
        </div>
        <div>
          <div id="user_auth">
            <header className="user_center-align">
              <nav className="user_auth-nav">
                <a href="/login" className="user_link tab-link active">
                  Login
                </a>
                <a href="/signup" className="user_link tab-link">
                  Create Account
                </a>
              </nav>
            </header>

            <p>Welcome back! Please enter your details</p>

            <form onSubmit={handleFormSubmit} className="user_form" id="login-form">


              <label htmlFor="email" className="user_login_label">
                Email
              
              <br />
              <input
                type="text"
                placeholder="Enter Email Address"
                className="user_input"
                name="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              </label>
              
              <label htmlFor="pasword" className="user_login_label">
                Password
              <br />
              <input
                type="password"
                placeholder="Enter Password"
                className="user_input"
                name="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
               </label>


              {errors.map((error, index) => (
                <p key={index} className="error">
                  {error}
                </p>
              ))}
              <button className="user_login_btn btn-primary">
                {isLoading ? "Logging in..." : "Log In"}
              </button>
            </form>

            <a href="/forgotPassword" id="reset-password">
              Forgot Password
            </a>
            <p className="usersignup_option">
              Don&apos;t have an account?{" "}
              <span className="usersignup_span" onClick={() => navigate("/signup")}>Sign up</span>
            </p>
          </div>
        </div>
      </div>
  );
};

export default Login;
