import React from 'react';

import PropTypes from 'prop-types';

import Button from '../../components/atoms/Button';
import './DashBoard.scss';
import { Navbar, DashboardSidebar } from '../../components/molecules';

export const DashBoard = () => {
  return (
    <div className="Dashboard">
      <Navbar>
        <Button Secondary></Button>
      </Navbar>
      <DashboardSidebar />

      <section className="Section__1">
        <section className="Welcome">
          <p>Hi John Welcome Back</p>
          <hr />
          <div className="">
            <Button>Create Story</Button>
          </div>

          <div className="Button__Container">
            <Button secondary>All</Button>
            <Button secondary>Popular</Button>
            <Button secondary>Sketch</Button>
          </div>
        </section>

        <section className="TrendingStyles">
          <p>Trending Styles</p>
          <hr />

          <div className="TrendingStyles__Image__Container">
            <div className="TrendingStyles__Image__Wrapper">
              <img src="/Assets/Images/TS1.png" alt="image1" />
              <img src="/Assets/Images/TS2.png" alt="image2" />
              <img src="/Assets/Images/TS3.png" alt="image3" />
            </div>
            <p>More Illustrations</p>
          </div>
        </section>
      </section>

      <section className="Section__2">
        <section className="RecentStyles">
          <div className="RecentStyles__Image__Container">
            <div className="RecentStyles__Image__Wrapper">
              <img src="/Assets/Images/RS1.png" alt="" />
              <img src="/Assets/Images/RS2.png" alt="" />
              <img src="/Assets/Images/RS3.png" alt="" />
              <img src="/Assets/Images/RS4.png" alt="" />
            </div>
            <p>More Illustrations</p>
          </div>
        </section>

        <section className="Statistics">
          <div>
            <p>Creation Statistics</p>
            <div className="linear__progress__indicator">
              <progress max="100" value="25"></progress>
              <progress max="100" value="50"></progress>
              <progress max="100" value="75"></progress>
              <progress max="100" value="100"></progress>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
};

// These are the types of the props that are passed to the component

DashBoard.propTypes = {};

// These are their default values

DashBoard.defaultProps = {};

export default DashBoard;
