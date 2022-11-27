import React from 'react';

import propTypes from 'prop-types';

import './userDetails.scss';
import UserDetailsCard from '../../../components/atoms/UserDetailsCard';

export const UserDetails = () => {
  return ( 
  <div className='UserDetails' >
    <UserDetailsCard />
  </div>
  );
};

// These are the types of the props that are passed to the component

UserDetails.propTypes = {};

// These are their default values

UserDetails.defaultProps = {};

export default UserDetails;
