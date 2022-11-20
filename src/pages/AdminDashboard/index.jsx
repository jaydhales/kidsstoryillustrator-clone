import React from 'react';

import PropTypes from 'prop-types';

import './AdminDashboard.scss';
import { DashboardTable, ProtectedRoute } from '../../components/molecules';

export const AdminDashboard = () => {
    return (
        <ProtectedRoute>
            <div className="admin-dashboard">
                <DashboardTable />
            </div>
        </ProtectedRoute>
    );
};

// These are the types of the props that are passed to the component

AdminDashboard.propTypes = {};

// These are their default values

AdminDashboard.defaultProps = {};

export default AdminDashboard;