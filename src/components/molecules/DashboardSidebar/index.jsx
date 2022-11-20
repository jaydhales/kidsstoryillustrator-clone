import React from 'react';

import PropTypes from 'prop-types';

import './DashboardSidebar.scss';

export const DashboardSidebar = ({ className, ...props }) => {
  return (
    <div className={`${className} DashboardSidebar`} {...props}>
      {/* To do change image later */}
      <div className="CreateNewStory"><img src='/logo192.png' /> <p>Create New story</p></div>
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