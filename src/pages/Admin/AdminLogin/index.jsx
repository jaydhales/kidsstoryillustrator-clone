import React, { useContext } from "react";
import "./AdminLogin.scss";
import logo from "../../../assets/img/logo.png";
import logoWhite from "../../../assets/img/logo_white.svg";
import reroute from "../../../assets/img/reroute.png";
import facebookLogo from "../../../assets/img/facebook_logo.png";
import appleLogo from "../../../assets/img/apple_logo.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthContext";

export const AdminLogin = () => {
  const { apiUrl, handleLogIn } = useContext(AuthContext);
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [errors, setErrors] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);

  const navigate = useNavigate();

  const endpoint = apiUrl + "auth/admin_signin";

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
        console.log(res);
        handleLogIn(res.data.data);

        if (res.data.data.isAdmin) {
          navigate("/admin");
        } else {
          navigate("/");
        }
      })
      .catch((err) => {
        setIsLoading(false);

        setErrors([...errors, err.message]);
      });
  };

  axios.

  return (
    <div className="AdminLogin">
      <div className="Admin-column">
        <div className="Admin-branding">
          <div className="content">
            <img src={logoWhite} alt="logo" id="logo" />
          </div>
        </div>
        <div>
          <div id="auth" className="admin_signin">
            <header className="center-align">
              <nav className="auth-nav">
                <a href="/admin/adminlogin" className="link tab-link active">
                  Login To Dashboard
                </a>
              </nav>
            </header>

            <form onSubmit={handleFormSubmit} className="form">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
