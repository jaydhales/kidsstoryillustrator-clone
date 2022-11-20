import React from 'react';

import PropTypes from 'prop-types';

import './AdminTableRow.scss';

export const AdminTableRow = ({ email, firstName,lastName, userType, location}) => {
  return(
    <div className='AdminTableRow'>
    <span>{email}</span>
    <span>{ firstName }</span>
    <span>{lastName}</span>
      <span>{lastName}</span>
      <span>{userType}</span>
      <span>{ location }</span>
  </div>);
};

// These are the types of the props that are passed to the component

AdminTableRow.propTypes = {
  email: PropTypes.string,
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  userType: PropTypes.string,
  location: PropTypes.string,
};

// These are their default values

AdminTableRow.defaultProps = {
  email: '',
  firstName: '',
  lastName: '',
  userType: '',
  location: '',
};

export default AdminTableRow;
