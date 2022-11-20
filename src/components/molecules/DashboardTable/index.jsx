import React from "react";

import PropTypes from "prop-types";

import "./DashboardTable.css";
import { AdminTableRow } from '../../atoms';
const rowDetails = [
  {
    email: "cyntianduka@unimaid.edu.ng",
    firstName: "Cynthia",
    lastName: "Nduka",
    userType: "Premium",
    location: "Imo, Nigeria"
  },
  {
    email: "cyntianduka@unimaid.edu.ng",
    firstName: "Cynthia",
    lastName: "Nduka",
    userType: "Premium",
    location: "Imo, Nigeria" 
  },{
    email: "cyntianduka@unimaid.edu.ng",
    firstName: "Cynthia",
    lastName: "Nduka",
    userType: "Premium",
    location: "Imo, Nigeria" 
  },{
    email: "cyntianduka@unimaid.edu.ng",
    firstName: "Cynthia",
    lastName: "Nduka",
    userType: "Premium",
    location: "Imo, Nigeria" 
  },{
    email: "cyntianduka@unimaid.edu.ng",
    firstName: "Cynthia",
    lastName: "Nduka",
    userType: "Premium",
    location: "Imo, Nigeria" 
  },
  {
    email: "cyntianduka@unimaid.edu.ng",
    firstName: "Cynthia",
    lastName: "Nduka",
    userType: "Premium",
    location: "Imo, Nigeria" 
  }
]
export const DashboardTable = () => {
  return <div>
    <div><input type="checkbox" /></div>
    <AdminTableRow {...{
      firstName: 'First Name',
      lastName: 'Last Name',
      email: 'Email',
      userType: 'User Type',
      location: 'Location'
    }} />
    {
      rowDetails.map((row, index) => <AdminTableRow key={row.firstName + index} {...row} /> )
    }
  </div>;
};

// These are the types of the props that are passed to the component

DashboardTable.propTypes = {};

// These are their default values

DashboardTable.defaultProps = {};

export default DashboardTable;
