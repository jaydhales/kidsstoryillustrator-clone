import React from "react";

import PropTypes from "prop-types";

import "./Archive.scss";
import Archieve from "../../../components/molecules/Archieve";
import SideBar from "../../../components/molecules/SideBar";

export const Archive = () => {
  
  return <div className="Archive">
    
    <SideBar />
    <Archieve />
  </div>;
};

// These are the types of the props that are passed to the component

Archive.propTypes = {};

// These are their default values

Archive.defaultProps = {};

export default Archive;
