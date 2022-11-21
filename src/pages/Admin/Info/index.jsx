import React, {useState} from "react";
import PropTypes from "prop-types";

import "./AccountInfo.css";

export const Info = () => {
  const [formData, setFormData] = useState ({
    fullName: "",
    email: "",
    phoneNumber: "",
    birthday: "",
    currentPassword: "",
    newPassword: "",
    address: "",
    houseNo: "",
  })

  const [submitted, setSubmitted] = useState(false);
  const [valid, setValid] = useState(false)

  function handleChange(event) {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value,
      };
    });
  }

  function submitForm(e) {
    e.preventDefault();
    if (formData.firstName && formData.lastName && formData.email) {
      setValid(true)
    }
    setSubmitted((prevState) => !prevState);
  }

  return (
    <div className="App1">
      <div className="side-bar1"></div>
      <div className="wrapper-div">
        <h2 className="acct_info_h2__ header">Account Information</h2>
        <div className="cover-section">
          <b>Edit profile</b>
          <div className="profile">
            <img alt="profile-pic" src="./im" />
            <div>
              <p>Ella James</p>
              <p>EllaJames@gmail.com</p>
            </div>
          </div>
          
          <form className="acct_info_form_01">
            <div className="grid-section">
              <label>
                Full name <br />
                <input type="text" 
                placeholder="" 
                className="inputs" 
                value={formData.fullName}
                name="fullName"
                onChange={handleChange}
                />
                 {submitted &&  !formData.fullName? <span className="acct_info_span__">enter your full name.</span> : null}
              </label>
              <label>
                Email address <br />
                <input
                  type="text"
                  placeholder="enter email address"
                  className="inputs"
                  value={formData.email}
                name="email"
                onChange={handleChange}
                />
                 {submitted &&  !formData.email? <span className="acct_info_span__">enter an email.</span> : null}
              </label>
              <label>
                Phone number <br />
                <input
                  type="text"
                  placeholder="enter phone number"
                  className="inputs"
                  value={formData.phoneNumber}
                name="phoneNumber"
                onChange={handleChange}
                />
                {submitted &&  !formData.phoneNumber? <span className="acct_info_span__">enter a vaild number</span> : null}
                
              </label>
              <label>
                Birthday <br />
                <input type="text" 
                placeholder="dd/mm/yy" 
                className="inputs" 
                value={formData.birthday}
                name="birthday"
                onChange={handleChange} 
                />
                {submitted &&  !formData.birthday? <span className="acct_info_span__">Please enter an age.</span> : null}
               
              </label>
            </div>

            <h2 className="acct_info_h2__">Chnage Password</h2>
            <div className="pass-section">
              <label>
                Current password <br />
                <input
                  type="text"
                  placeholder="enter current password"
                  className="inputs"
                  value={formData.currentPassword}
                name="createPassword"
                onChange={handleChange} 
                />
                {submitted &&  !formData.currentPassword? <span className="acct_info_span__">Enter your current password.</span> : null}
              </label>
              <label>
                New password <br />
                <input
                  type="text"
                  placeholder="enter new password"
                  className="inputs"
                  value={formData.newPassword}
                name="newPassword" 
                onChange={handleChange}
                />
                {submitted &&  !formData.newPassword? <span className="acct_info_span__">Please enter your new password.</span> : null}    
              </label>
            </div>

            <h2 className="acct_info_h2__">Address</h2>
            <div className="address-section">
              <label>
                Address <br />
                <input
                  type="text"
                  placeholder="enter home address"
                  className="inputs"
                  value={formData.address}
                name="address"
                onChange={handleChange}
                />
                 {submitted &&  !formData.address? <span className="acct_info_span__">Enter a valid address.</span> : null}
              </label>
              <label>
                House no <br />
                <input
                  type="text"
                  placeholder="enter house number"
                  className="inputs"
                  value={formData.houseNo}
                name="houseNo"
                onChange={handleChange}
                />
                 {submitted &&  !formData.houseNo? <span className="acct_info_span__">Enter your house number.</span> : null}
              </label>
            </div>
          </form>

          <div className="btns">
            <button className="btn1">Cancel</button>
            <button className="btn2" onClick={submitForm}>Save</button>
          </div>
        </div>
      </div>
    </div>
  );
};

// These are the types of the props that are passed to the component

Info.propTypes = {};

// These are their default values

Info.defaultProps = {};

export default Info;
