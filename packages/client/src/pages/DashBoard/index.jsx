import React from 'react';

import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Button from '../../components/atoms/Button';
import './DashBoard.scss';
import { Navbar, DashboardSidebar } from '../../components/molecules';

export const DashBoard = () => {
  return (
    <>
      {/* <Navbar> */}
      {/* <Link to ="/"> */}
      {/* <Button secondary>Upgrade to Premium </Button> */}
      {/* </Link> */}
      {/* </Navbar> */}

      <div className="Dashboard center">
        {/* <DashboardSidebar /> */}
        <div className="Dashboard__Container">
          <section className="Section__1">
            <section className="Welcome">
              <p>Hi John Welcome Back</p>
              <hr />
              <div className="Create__Story__Container">
                <Button>Create Story</Button>
              </div>

              <div className="Button__Container ">
                {['All', 'Popular', 'Sketch'].map(text => {
                  return (
                    <Button key={Math.random() * 10000} secondary>
                      {text}
                    </Button>
                  );
                })}
              </div>
            </section>

            <section className="TrendingStyles">
              <p>Trending Styles</p>
              <hr />

              <div className="TrendingStyles__Image__Wrapper grey-border">
                <div className="TrendingStyles__Image__Container">
                  <img src="/Assets/Images/TS1.png" alt="image1" />
                  <img src="/Assets/Images/TS2.png" alt="image2" />
                  <img src="/Assets/Images/TS3.png" alt="image3" />
                </div>
                <p className="red-text">More Illustrations</p>
              </div>
            </section>
          </section>

          <section className="Section__2">
            <section className="RecentStyles">
              <p>Recent Styles</p>
              <hr />
              <div className="RecentStyles__Image__Wrapper grey-border">
                <div className="RecentStyles__Image__Container">
                  <img src="/Assets/Images/RS1.png" alt="" />
                  <img src="/Assets/Images/RS2.png" alt="" />
                  <img src="/Assets/Images/RS3.png" alt="" />
                  <img src="/Assets/Images/RS4.png" alt="" />
                </div>
                <p className="red-text">More Illustrations</p>
              </div>
            </section>

            <section className="Statistics">
              <div>
                <p>Creation Statistics</p>
                <div className="linear__progress__indicator grey-border flex">
                  <progress max="100" value="25"></progress>
                  <progress max="100" value="50"></progress>
                  <progress max="100" value="75"></progress>
                  <progress max="100" value="100"></progress>
                </div>
              </div>
            </section>
          </section>
        </div>
      </div>
    </>
  );
};

// These are the types of the props that are passed to the component

DashBoard.propTypes = {};

// These are their default values

DashBoard.defaultProps = {};

export default DashBoard;
