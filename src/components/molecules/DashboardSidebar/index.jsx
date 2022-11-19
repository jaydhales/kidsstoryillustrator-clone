import React from 'react';

import PropTypes from 'prop-types';

import './DashboardSidebar.scss';

export const DashboardSidebar = ({ className, ...props }) => {
  return (
    <div className={`${className}`} {...props}>
      DashboardSidebar
    </div>
  );
};

// These are the types of the props that are passed to the component

DashboardSidebar.propTypes = {
  className: PropTypes.string,
};

// These are their default values

DashboardSidebar.defaultProps = {
  className: '',
};

export default DashboardSidebar;
