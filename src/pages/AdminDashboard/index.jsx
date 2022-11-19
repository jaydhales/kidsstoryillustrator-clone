import React from 'react';

import PropTypes from 'prop-types';

import './AdminDashboard.scss';
import { ProtectedRoute } from '../../components/molecules';

export const AdminDashboard = () => {
  return (
    <ProtectedRoute>
      <div className="admin-dashboard">
        <h1>Admin Dashboard</h1>
      </div>
    </ProtectedRoute>
  );
};

// These are the types of the props that are passed to the component

AdminDashboard.propTypes = {};

// These are their default values

AdminDashboard.defaultProps = {};

export default AdminDashboard;
