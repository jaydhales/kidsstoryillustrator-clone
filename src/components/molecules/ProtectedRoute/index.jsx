import React from 'react';

import PropTypes from 'prop-types';

import './ProtectedRoute.scss';
import { DashboardHeader, DashboardSidebar } from '..';

export const ProtectedRoute = ({ children, className, ...props }) => {
  return (
    <div className="protectedRoute">
      <DashboardHeader className="header" />
      <DashboardSidebar className="sidebar" />
      <section className={`body ${className}`} {...props}>
        {children}
      </section>
    </div>
  );
};

// These are the types of the props that are passed to the component

ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

// These are their default values

ProtectedRoute.defaultProps = {
  children: null,
  className: '',
};

export default ProtectedRoute;