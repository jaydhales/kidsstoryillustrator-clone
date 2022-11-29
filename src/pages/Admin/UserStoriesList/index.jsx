import React from 'react';

import propTypes from 'prop-types';

import './UserStoriesList.scss';
import AdminDashBoard from '../Admin-Dashboard';
import AdminUserStoriesList from '../../../components/atoms/AdminUserStoriesList';
import arrow from '../../../assets/adminuserdetails/arrow-left.svg' 
import avatar from '../../../assets/adminuserdetails/asia.svg' 
import { useNavigate } from 'react-router-dom';

export const UserStoriesList = () => {
    
    const navigate = useNavigate();

  return ( 

     <div className='UserStoriesList'>
        <div className='details'>
            <div className='arrow'>
                <img src={arrow} alt="arrow-back" onClick={() => navigate('/admin/userdetails/:id')}/>
                <div>User Stories</div>
                
            </div>
            <div className='avatar'>
                <div>Cynthia Nduka</div>
                <img src={avatar} alt="avatar" />  
            </div>
        </div>

        <div>
     
        <AdminUserStoriesList />
     </div>

     </div>

     );
};

// These are the types of the props that are passed to the component

UserStoriesList.propTypes = {};

// These are their default values

UserStoriesList.defaultProps = {};

export default UserStoriesList;
