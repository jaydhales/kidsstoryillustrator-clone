import React from "react";

import PropTypes from "prop-types";

import "./Pricing.scss";
import { Layout } from "../../components/molecules";
import { Button } from "../../components/atoms";

export const Pricing = () => {
  return (
    <Layout>
      <div className="Pricing">
        <section className="heading">
          <h1>Transparent, Simple pricing.</h1>
          <p>
            Try for free for 14 days, no commitment, no credit card required
          </p>
        </section>

        <section className="plan">
          <h2>Monthly billing</h2>

          <div className="main">
            <div className="card">
              <div className="head">
                <p className="title">Basic</p>
                <p className="amount">Free</p>
              </div>
              <div className="features">
                <p className="sub-tt">What included</p>
                <ul>
                  <li>Limited story creation</li>
                  <li>No story downloads</li>
                </ul>
                <a href="/billing?plan=free">Proceed</a>
              </div>
            </div>
            <div className="card paid">
              <div className="head">
                <p className="title">Growth</p>
                <p className="amount">
                  <sub className="figure">us$ </sub>2
                  <sub className="figure"> .00</sub>
                </p>
              </div>
              <div className="features">
                <p className="sub-tt">What included</p>
                <ul>
                  <li>Unlimited story creation</li>
                  <li>Unlimited story downloads</li>
                  <li>Publishers access</li>
                </ul>
                <a href="billing">Proceed</a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

// These are the types of the props that are passed to the component

Pricing.propTypes = {};

// These are their default values

Pricing.defaultProps = {};

export default Pricing;
