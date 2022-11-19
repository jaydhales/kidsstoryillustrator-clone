import React, { useState } from 'react';

import PropTypes from 'prop-types';

import Button from '../../components/atoms/Button';
import { Navbar } from '../../components/molecules';
import './ForgotPassword.scss';

export const ForgotPassword = () => {
  //  const [emailError , setEmailError] = useState(false);
  //  const [showError , setShowError] = useState(false);
  //  const [email , setEmail] = useState(false);
  //  const [showMessage, setShowMessage] = useState(false);
  function onHandleSubmit(event) {
    event.preventDefault();
  }
  return (
    <>
      <Navbar>
        <Button secondary className="Margin-right">
          <div className="Button__inner__container">
            <p>En</p>
            <img src="/Assets/Icons/arrow-down.svg" alt="" />
          </div>
        </Button>
      </Navbar>

      <div className="Form__main__container">
        <div className="Form__container">
          <form action="" className="Form" onSubmit={onHandleSubmit}>
            <p className="Form__title1">Forgot Password?</p>
            <hr />
            <p className="Form__title2">
              Enter your email and we ll send you a link to reset your password
            </p>
            <div>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                // value={email}
                // onChange={handleInputChange}
                id="email"
                name="email"
                placeholder="name@gmail.com"
                required
              />
              {/* {showError && (
              <p style={{ color: 'Error__text' }}>
                
              </p>
            )} */}
            </div>
            <Button>Submit</Button>
          </form>
        </div>
      </div>
    </>
  );
};

// These are the types of the props that are passed to the component

ForgotPassword.propTypes = {};

// These are their default values

ForgotPassword.defaultProps = {};

export default ForgotPassword;
