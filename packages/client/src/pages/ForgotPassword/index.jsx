import React, { useState } from 'react';

import PropTypes from 'prop-types';

import Button from '../../components/atoms/Button';
import { Navbar } from '../../components/molecules';
import './ForgotPassword.scss';

export const ForgotPassword = () => {
  //  const [emailError , setEmailError] = useState(false);
  //  const [email , setEmail] = useState(false);
  //  const [showMessage, setShowMessage] = useState(false);

  return (
    <div className="ForgotPassword">
      <Navbar></Navbar>

      <div className="Form__container">
        <form action="" className="Form">
          <p className="Form__title1">Forgot Password</p>
          <hr />
          <p className="Form__title2">
            Enter your email and we ll send you a link to rest your password
          </p>
          <div>
            <label htmlFor="email"></label>
            <input
              type="email"
              // value={email}
              // onChange={handleInputChange}
              id="email"
              name="email"
              placeholder="name@gmail.com"
              required
            />
            {/* {showMessage && (
              <p style={{ color: '#1570ef' }}>
                Your message was sent succesfully
              </p>
            )} */}
          </div>
          <Button></Button>
        </form>
      </div>
    </div>
  );
};

// These are the types of the props that are passed to the component

ForgotPassword.propTypes = {};

// These are their default values

ForgotPassword.defaultProps = {};

export default ForgotPassword;
