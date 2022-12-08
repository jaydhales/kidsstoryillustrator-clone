import React from "react";

import PropTypes from "prop-types";

import "./CancelSubscription.scss";
import { Layout } from "../../components/molecules";

import { Button } from "../../components/atoms";

export const CancelSubscription = () => {
  return (
    <Layout>
      <div className="CancelSubscription">
        <section className="heading">
          <h1>Before you go</h1>
          <p>
            Not the outcome we had expected, but we will respect your wishes, to
            help us improve the story UI experience, please select the reason
            why you cancelled subscription.
          </p>
        </section>

        <section className="details">
          <form>
            <div className="main">
              <div className="form-group">
                <input type="checkbox" name="select1" id="select1" />
                <label htmlFor="select1">
                  The selection for illustrations were limited
                </label>
              </div>

              <div className="form-group">
                <input type="checkbox" name="select2" id="select2" />
                <label htmlFor="select2">
                  I did’nt use Magic Book Writer enough
                </label>
              </div>

              <div className="form-group">
                <input type="checkbox" name="select3" id="select3" />
                <label htmlFor="select3">
                  I had a poor experience with customer support
                </label>
              </div>

              <div className="form-group">
                <input type="checkbox" name="select4" id="select4" />
                <label htmlFor="select4">
                  I only signed for the free trial i did’nt intend to subscribe.
                </label>
              </div>

              <div className="form-group">
                <input type="checkbox" name="select5" id="select5" />
                <label htmlFor="select5">
                  Magic Book Writer has served it’s purpose so i’m done.
                </label>
              </div>

              <div className="form-group">
                <input type="checkbox" name="select6" id="select6" />
                <label htmlFor="select6">Others (please specify)</label>
              </div>

              <textarea
                name="other"
                id="others"
                placeholder="Text here"
              ></textarea>
            </div>

            <div className="form-control">
              <Button>Keep my Subscription</Button>
              <div className="button2">
                <Button>Cancel my Subscription</Button>
              </div>
            </div>
          </form>
        </section>
      </div>
    </Layout>
  );
};

// These are the types of the props that are passed to the component

CancelSubscription.propTypes = {};

// These are their default values

CancelSubscription.defaultProps = {};

export default CancelSubscription;
