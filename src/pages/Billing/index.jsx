import React from "react";

import PropTypes from "prop-types";

import "./Billing.scss";
import { Layout } from "../../components/molecules";

import verve from "../../assets/debit-card/verve.png";
import visa from "../../assets/debit-card/visa.png";
import mastercard from "../../assets/debit-card/mastercard.png";
import { Button } from "../../components/atoms";

export const Billing = () => {
  return (
    <Layout>
      <div className="Billing">
        <section className="heading">
          <h1>Billing Info</h1>
          <p>Input card details and fill out the appropriate information</p>
        </section>

        <section className="details">
          <div className="debit-cards">
            <div className="icons">
              <img src={mastercard} alt="MasterCard Logo" />
            </div>
            <div className="icons">
              <img src={visa} alt="Visa Logo" />
            </div>
            <div className="icons">
              <img src={verve} alt="Verve Logo" />
            </div>
          </div>

          <form>
            <div className="main">
              <div className="form-sect">
                <p className="heading">
                  <span>1</span> Billing Address
                </p>
                <div className="form-group">
                  <label htmlFor="name">Full name</label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value=""
                    placeholder="Enter Full name"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="address1">Address</label>
                  <input
                    type="text"
                    name="address1"
                    id="address1"
                    value=""
                    placeholder="Enter Address"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="address2">Address 2</label>
                  <input
                    type="text"
                    name="address2"
                    id="address2"
                    value=""
                    placeholder="Enter Address 2"
                  />
                </div>
              </div>
              <div className="form-sect">
                <p className="heading">
                  <span>2</span> Credit Card info
                </p>
                <div className="form-group">
                  <label htmlFor="card-name">Name on card</label>
                  <input
                    type="text"
                    name="card-name"
                    id="card-name"
                    value=""
                    placeholder="Enter Name on card"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="card-number">Card number</label>
                  <input
                    type="number"
                    name="card-number"
                    id="card-number"
                    value=""
                    placeholder="0000 0000 0000 0000"
                  />
                </div>

                <div className="card-info">
                  <div className="form-group">
                    <label htmlFor="cvv">CVV number</label>
                    <input
                      type="number"
                      name="cvv"
                      id="cvv"
                      value=""
                      placeholder="cvv"
                    />
                  </div>{" "}
                  <div className="form-group">
                    <label htmlFor="exp-month">Expiry month</label>
                    <input
                      type="number"
                      name="exp-month"
                      id="exp-month"
                      value=""
                      placeholder="Month"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="exp-year">Expiry year</label>
                    <input
                      type="number"
                      name="exp-year"
                      id="exp-year"
                      value=""
                      placeholder="year"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="form-control">
              <Button>Proceed</Button>
            </div>
          </form>
        </section>
      </div>
    </Layout>
  );
};

// These are the types of the props that are passed to the component

Billing.propTypes = {};

// These are their default values

Billing.defaultProps = {};

export default Billing;
