import React from "react";

import PropTypes from "prop-types";

import "./Pricing.scss";
import { Layout } from "../../components/molecules";

export const Pricing = () => {
  return (
    <Layout>
      <div className="Pricing">
        <div className="heading">
          <h1 className="title">Transparent, Simple pricing.</h1>
          <p className="sub-title">
            Try for free for 14 days, no commitment, no credit card required
          </p>
        </div>
        <div className="plan">
          <p>Monthly billing</p>
          <div className="card">
            <div className="cardone">
              <div className="card-head">
                <p className="title">Basic</p>
                <p className="amount">Free</p>
              </div>
              <div className="features">
                <p className="sub-tt">What included</p>
                <ul>
                  <li>Limited story creation</li>
                  <li>No story downloads</li>
                </ul>
              </div>
              <a href="#">
                <button className="btn-light">Sign Up</button>
              </a>
            </div>
            <div className="cardtwo">
              <div className="card-head2">
                <p className="title">Growth</p>
                <p className="amount">
                  {" "}
                  <sup className="figure">us$ </sup>2
                  <sup className="figure"> .00</sup>
                </p>
              </div>
              <div className="featurestwo">
                <p className="sub-tt">What included</p>
                <ul className="cardtwo-ul">
                  <li>Limited story creation</li>
                  <li>No story downloads</li>
                  <li>No story downloads</li>
                </ul>
              </div>
              <a href="#">
                <button className="btn-lighttwo">Sign Up</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

// These are the types of the props that are passed to the component

Pricing.propTypes = {};

// These are their default values

Pricing.defaultProps = {};

export default Pricing;
