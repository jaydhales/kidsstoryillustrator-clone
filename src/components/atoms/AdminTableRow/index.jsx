import React from 'react';

import PropTypes from 'prop-types';

import './AdminTableRow.scss';

export const AdminTableRow = ({ email, firstName,lastName, userType, location}) => {
  return(
    <section className='AdminTableRow'>
    <div><input type="checkbox" /> {email}</div>
    <div>{ firstName }</div>
    <div>{lastName}</div>
      <div>{lastName}</div>
      <div>{userType}</div>
      <div>{ location }</div>
  </section>);
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
