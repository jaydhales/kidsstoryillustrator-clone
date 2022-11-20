import React from 'react';

import PropTypes from 'prop-types';

import style from './AdminDashboard.scss';
import { DashboardTable, ProtectedRoute } from '../../components/molecules';

export const AdminDashboard = () => {
    return (
        <ProtectedRoute>
            <div className="admin-dashboard">
                <div className='heading-container'>
                    <div className='heading'>
                        <h2>USERS LIST</h2>
                        <span><span>Dashboard</span> <img className='arrow' src="/right.svg" /><span>Users List</span></span>
                    </div>
                    <input type="text" placeholder="Search" />
                </div>
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