import React from "react";

import PropTypes from "prop-types";

import "./About.css";
import AboutUsCard from "../../components/molecules/AboutUsCard";
import AboutUsHero from "../../components/molecules/AboutUsHero";
import AboutUsTeam from "../../components/molecules/AboutUsTeam";
import AboutUsVision from "../../components/molecules/AboutUsVision";
import { Layout, PaddingProvisionals } from "../../components/molecules";

export const About = () => {
  return (
    <Layout>
      <div className="About">
        <AboutUsHero />
        <AboutUsVision />
        <AboutUsCard />
        <AboutUsTeam />
      </div>
    </Layout>
  );
};

// These are the types of the props that are passed to the component

About.propTypes = {};

// These are their default values

About.defaultProps = {};

export default About;
