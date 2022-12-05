import React, { useState } from "react";

import PropTypes from "prop-types";
import Mastercard from "../../../assets/images/Mastercard logo.svg";
import "./BillingPage.scss";
export const Settings = () => {
  const [viewCard, setViewCard] = useState(false);
  const [viewForm, setViewForm] = useState(true);
  const [formData, setFormData] = useState({
    cardName: "",
    cardNumber: "",
    date: "",
    cvc: "",
    billingAddress: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [valid, setValid] = useState(false);

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
      setValid(true);
    }
    setSubmitted((prevState) => !prevState);
  }

  const saveCard = () => {
    setViewCard((prevState) => !prevState);
    setViewForm((prevState) => !prevState);
  };
  return (
    <div className="BillingPage">
      <div className="head-content">
        <b>Payment method</b>
        <p>Update your billing details and address</p>
      </div>
      {viewForm ? (
        <form>
          <div className="grid-section2">
            <label>
              Cardholder name <br />
              <input
                type="text"
                className="input3"
                placeholder="jamilbalogun"
                name="cardName"
                value={formData.cardName}
                onChange={handleChange}
              />
              <br />
              {submitted && !formData.cardName ? (
                <span className="span2">enter your card name.</span>
              ) : null}
            </label>
            <label>
              Card number <br />
              <input
                type="number"
                className="input3"
                placeholder="12056839400985"
                name="cardNumber"
                value={formData.cardNumber}
                onChange={handleChange}
              />
              <br />
              {submitted && !formData.cardNumber ? (
                <span className="span2">enter your card Number.</span>
              ) : null}
            </label>
            <label>
              Expiration month and year <br />
              <input
                type="number"
                className="input3"
                placeholder="05/27"
                name="date"
                value={formData.date}
                onChange={handleChange}
              />
              <br />
              {submitted && !formData.date ? (
                <span className="span2">enter a valid date.</span>
              ) : null}
            </label>
            <label>
              CVC <br />
              <input
                type="number"
                className="input3"
                placeholder="265"
                name="CVC"
                value={formData.cvc}
                onChange={handleChange}
              />
              <br />
              {submitted && !formData.cvc ? (
                <span className="span2">enter your CVC.</span>
              ) : null}
            </label>
          </div>
          <button className="card-btn" onClick={saveCard}>
            Save Card
          </button>
        </form>
      ) : null}
      {viewCard ? (
        <div className="card-section1">
          <div className="card-section2">
            <img src={Mastercard} alt="/" className="card-logo" />
            <div>
              <b>Visa ending in 1234</b>
              <p>Expiry 06/2024</p>

              <div className="card-section3">
                <p>Set as default</p>
                <button className="card-btn">Edit</button>
              </div>
            </div>
          </div>
          <label className="container">
            <input type="checkbox" />
            <span className="checkmark"></span>
          </label>
        </div>
      ) : null}
      <div className="bill-add">
        <b>Billing address</b>
        <p>Where should invoices be sent</p>
      </div>
      <div className="footer-content">
        <input
          type="email"
          className="input3"
          placeholder="Example@gmail.com"
          name="billingAdress"
          value={formData.billingAddress}
          onChange={handleChange}
        />
        <br />
        {submitted && !formData.billingAddress ? (
          <span className="span2">enter your card name.</span>
        ) : null}

        <button className="btns-6" onClick={submitForm}>
          Save Changes
        </button>
      </div>
    </div>
  );
};

// These are the types of the props that are passed to the component

Settings.propTypes = {};

// These are their default values

Settings.defaultProps = {};

export default Settings;
