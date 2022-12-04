import React from "react";

import Ellipse from "../../../assets/images/Ellipse.svg";

import PropTypes from "prop-types";
import "./Security.scss";
export const Security = () => {
  return (
    <div className="Security">
    <div className="image-section">
          <img src={Ellipse} alt="/" className="img-1" />
          <button className="btns-1" onClick={() => window.location.reload()}>Upload</button>
          <button className="btns-2" onClick={() => window.location.reload()}>Remove</button>
        </div>

        <div className="passwords">
            <label>Old password <br />
                <input type="password" placeholder="********" className="inputs4"/>
            </label>
            <label>New password <br />
                <input type="password" placeholder="********" className="inputs4"/>
            </label>
        </div>

        <button className="btns-5">Save Changes</button>
    </div>
  )
}

// These are the types of the props that are passed to the component

Security.propTypes = {};

// These are their default values

Security.defaultProps = {};

export default Security;