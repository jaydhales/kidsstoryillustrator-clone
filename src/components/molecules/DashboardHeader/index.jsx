import React from 'react';

import PropTypes from 'prop-types';

import './DashboardHeader.scss';

export const DashboardHeader = ({ className, ...props }) => {
  return <div className={`${className} DashboardHeader`}>
    <div className='head-menu'></div>
    <img src='/Logo.svg' className='head-logo'/>
  </div>;
};

// These are the types of the props that are passed to the component

DashboardHeader.propTypes = {
  className: PropTypes.string,
};

// These are their default values

DashboardHeader.defaultProps = {
  className: '',
};

export default DashboardHeader;