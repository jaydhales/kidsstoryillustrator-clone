import React from "react";

import PropTypes from "prop-types";

import "./Archive.scss";
import Archieve from "../../../components/molecules/Archieve";
import { AdminSideNav } from "../../../components/molecules";

export const Archive = () => {
  
  return <div className="Archive">
    
    <AdminSideNav />
    <Archieve />
  </div>;
};

// These are the types of the props that are passed to the component

Archive.propTypes = {};

// These are their default values

Archive.defaultProps = {};

export default Archive;
