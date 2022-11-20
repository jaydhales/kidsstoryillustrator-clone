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
  },
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
  },
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
  },
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
  }
]
export const DashboardTable = () => {
  return <div>
    <div className='options'>
      {/* To Do add actual icons here */}
      <div>
        <input type="checkbox" />
        <img src='/sync.svg' />
        <div className='menu'></div>
      </div>
      <div>
        <p>Showing 1 - 10 of 2,000 users</p>
        <img src='/left.svg' />
        <img src='/right.svg' />
      </div>
      </div>
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
