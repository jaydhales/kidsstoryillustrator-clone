import React from "react";
import "./AdminLogin.scss";
import logo from "../../../assets/img/logo.png";
import logoWhite from "../../../assets/img/logo_white.png";
import googleLogo from "../../../assets/img/google_logo.png";
import facebookLogo from "../../../assets/img/facebook_logo.png";
import appleLogo from "../../../assets/img/apple_logo.png";

export const AdminLogin = () => {
  const [ email, setEmail ] = React.useState("");
  const [ password, setPassword ] = React.useState("");
  const [ errors, setErrors ] = React.useState([]);
  const [ isLoading, setIsLoading ] = React.useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    setIsLoading(true);
    setErrors([]);

    if(!email || !password ){
      setIsLoading(false);
      setErrors([...errors, "Fields cannot be empty"]);
    }

    // const body = JSON.stringify({ email, password });
    // const config = {
    //   headers: {
    //     "Content-Type": "application/json"
    //   }
    // };

    // axios.post(endpoint, body, config)
    // .then((res) => {
    //   setIsLoading(false);
    //   console.log(res.data.data);
    // })
    // .catch(err => {
    //   setIsLoading(false);
    //   setErrors([...errors, err.response.data.message ]);
    // });
  }

  return (
    <div className="AdminLogin">
      <div className="Admin-column">
      <div className="Admin-branding">
        <div className="content">
          <img src={logo} alt="logo" id="logo" />
        </div>
      </div>
      <div>
      <div id="auth">
      <header className="center-align">
        <img src={logo} alt="logo" id="logo2" />
        <nav className="auth-nav">
          <a href="/admin/adminlogin" className="link tab-link active">Login To Dashboard</a>
        </nav>
      </header>

        <form onSubmit={handleFormSubmit} className="form">

          <label htmlFor="email" className="label">Email</label><br />
          <input type="text" placeholder="Enter Email Address" className="input" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />

          <label htmlFor="pasword" className="label">Password</label><br />
          <input type="password" placeholder="Enter Password" className="input input-password" name="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />

          { errors.map((error, index) => <p key={index} className="error">{error}</p>)}
          <button className="btn btn-primary">{isLoading ? 'Logging in...' : 'Log In'}</button>
        </form>

        <a href="/forgotPassword" id="reset-password">Forgot Password</a>

        {/* <div className="flex or">
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
        </div> */}

      </div>
      </div>
    </div>
    </div>
  );
};

export default AdminLogin;
