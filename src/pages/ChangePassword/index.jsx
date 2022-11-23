import React from "react";
import "./ChangePassword.scss";
import logoWhite from "../../assets/img/logo_white.png";
import arrowLeft from "../../assets/img/arrow-left.png";

export const ChangePassword = () => {
  const [password1, setPassword1] = React.useState("");
  const [password2, setPassword2] = React.useState("");
  const [errors, setErrors] = React.useState([]);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!password1 || !password2) {
      setErrors([...errors, "Fields cannot be empty"]);
    }
  };

  const goBack = () => {
    window.location.href = "/forgotPassword";
  };

  return (
    <div className="ChangePassword">
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
            <header className="header">
              <button
                className="btn-round back-button"
                aria-label="login with google"
                onClick={goBack}
              >
                <img
                  src={arrowLeft}
                  alt="Apple logo"
                  className="btn-round-img"
                />
              </button>

              <h2>Reset Password</h2>
              <p>
                A confirmation link will be sent to your email to change your
                password
              </p>
            </header>

            <form onSubmit={handleFormSubmit} className="form">
              <label htmlFor="pasword1" className="label" id="password1">
                Old Password
              </label>
              <br />
              <input
                type="password"
                placeholder="Enter Password"
                className="input input-password"
                name="password1"
                id="password1"
                onChange={(e) => setPassword1(e.target.value)}
              />

              <label htmlFor="pasword2" className="label" id="password2">
                New Password
              </label>
              <br />
              <input
                type="password"
                placeholder="Enter Password"
                className="input input-password"
                name="password2"
                id="password2"
                onChange={(e) => setPassword2(e.target.value)}
              />

              <button className="btn btn-primary">Reset Password</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChangePassword;
