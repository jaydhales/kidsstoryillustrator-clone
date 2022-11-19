import React from 'react';

import PropTypes from 'prop-types';

import './AboutUsTeam.scss';
import abtTeam from './abtTeam.svg';

export const AboutUsTeam = () => {
  return (
    <>
      <div className="aboutTeam">
        <div className="aboutTeamHeader">
          <div className="aboutTeamHeaderTop">
            <p>Our Team</p>
            <hr />
            <br />
          </div>

          <div className="aboutTeamHeaderBottom">
            <p>
              We have put together a team with perfect blend of creative and
              technical minds that empathieze you users and work together to
              create a product that serves you well
            </p>
          </div>
        </div>
      </div>

      <div className="TeamList">
        <div className="TeamListText">
          <div className="teamflex">
            <p>
              <b className="abtdot">&#x2022;</b> Product Managers
            </p>
          </div>
        </div>
        <div className="TeamListText">
          <div className="teamflex">
            <p>
              <b className="abtdot">&#x2022;</b> Designers
            </p>
          </div>
        </div>
        <div className="TeamListText">
          <div className="teamflex">
            <p>
              <b className="abtdot">&#x2022;</b> Marketers
            </p>
          </div>
        </div>
        <div className="TeamListText">
          <div className="teamflex">
            <p>
              <b className="abtdot">&#x2022;</b> Engineers
            </p>
          </div>
        </div>
      </div>

      <div>
        <img src={abtTeam} alt="about us team" className="teamImg" />;
      </div>
    </>
  );
};

// These are the types of the props that are passed to the component

AboutUsTeam.propTypes = {};

// These are their default values

AboutUsTeam.defaultProps = {};

export default AboutUsTeam;
