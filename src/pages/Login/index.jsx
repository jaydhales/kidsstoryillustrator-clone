import React, { useEffect, useRef, useState } from "react";
import "./Login.scss";
// Assets
import logo from "../../assets/img/logo.png";
import logoWhite from "../../assets/img/logo_white.png";
import googleLogo from "../../assets/img/google_logo.png";
import facebookLogo from "../../assets/img/facebook_logo.png";
import appleLogo from "../../assets/img/apple_logo.png";
// Post Req
import { useNavigate } from "react-router-dom";
import { useLoginMutation } from "../../features/auth/authApiSlice";
import { useDispatch } from "react-redux";
import { setCredentials } from "../../features/auth/authSlice";

export const Login = () => {
  const userRef = useRef();
  const errRef = useRef();
  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const navigate = useNavigate();

  const [login, { isLoading }] = useLoginMutation();
  const dispatch = useDispatch();

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [user, pwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const userData = await login({ user, pwd }).unwrap();
      console.log(userData);
      dispatch(setCredentials({ ...userData, user }));
      setUser("");
      setPwd("");
      navigate("/");
    } catch (err) {
      if (!err?.response) {
        setErrMsg("No server Response");
      } else if (err.response?.status === 400) {
        setErrMsg("Missing Username or Password");
      } else if (err.response?.status === 401) {
        setErrMsg("Unauthorized");
      } else {
        setErrMsg("Login Failed");
      }
      errRef.current.focus();
    }
  };

  return (
    <div className="Login">
      <div className="two-column">
        <div className="branding">
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
            {isLoading ? (
              <h1>Loading</h1>
            ) : (
              <form onSubmit={handleSubmit} className="form">
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
                  ref={userRef}
                  value={user}
                  onChange={(e) => setUser(e.target.value)}
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
                  value={pwd}
                  onChange={(e) => setPwd(e.target.value)}
                />

                <p ref={errRef} className={errMsg ? "errMsg": "offscreen"} aria-live="assertive">{errMsg}</p>
                <button className="btn btn-primary">
                  {isLoading ? "Logging in..." : "Log In"}
                </button>
              </form>
            )}
            <a href="/forgotPassword" id="reset-password">
              Forgot Password
            </a>

            <div className="flex or">
              <div className="hLine"></div>
              <p>Or</p>
              <div className="hLine"></div>
            </div>

            <p className="continue-with">Continue with</p>

            <div className="auth-links">
              <button className="btn-round" aria-label="login with google">
                <img
                  src={googleLogo}
                  alt="Google logo"
                  className="btn-round-img"
                />
              </button>

              <button className="btn-round" aria-label="login with google">
                <img
                  src={facebookLogo}
                  alt="Facebook logo"
                  className="btn-round-img"
                />
              </button>

              <button className="btn-round" aria-label="login with google">
                <img
                  src={appleLogo}
                  alt="Apple logo"
                  className="btn-round-img"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
