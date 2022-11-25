import React from "react";

import PropTypes from "prop-types";
import { Footer, Navbar } from "../../components/molecules";

import "./userDetails.scss";
import AboutUsCard from "../../components/molecules/AboutUsCard";
import AboutUsHero from "../../components/molecules/AboutUsHero";
import AboutUsTeam from "../../components/molecules/AboutUsTeam";
import AboutUsVision from "../../components/molecules/AboutUsVision";


export const UserDetails = () => {
  return (
    <div>
    <Navbar/>
    <div className="UserDetails">
      <AboutUsHero />
      <AboutUsVision />
      <AboutUsCard />
      <AboutUsTeam />
    </div>
    <Footer/>
    </div>
  );
};

// These are the types of the props that are passed to the component

UserDetails.propTypes = {};

// These are their default values

UserDetails.defaultProps = {};

export default UserDetails;
