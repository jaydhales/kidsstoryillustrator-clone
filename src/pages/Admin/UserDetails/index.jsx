import React from 'react';

import propTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import './userDetails.scss';
import UserDetailsCard from '../../../components/atoms/UserDetailsCard';
import arrow from '../../../assets/adminuserdetails/arrow-left.svg'
import avatar from '../../../assets/adminuserdetails/asia.svg'
import UserProgress from '../../../components/atoms/UserProgress';
import { AdminUserStoriesList1 } from '../../../components/atoms/AdminUserStoriesList';

export const UserDetails = () => {

  const navigate  = useNavigate();

  return ( 
  <div className='UserDetails'>
     <div className='user-detail'>
     <img src={arrow} alt="arrow-back" onClick={() => navigate('/admin/userlist')}/>
       <div>
          User details
       </div>
     </div>
     <div className='user-avatar'>
     <img src={avatar} alt="avatar" className='avatar'/>  
       <div>
        <p className='user-name'>
            Cynthia Nduka
        </p>
        
        <p className='premium'>
            Premium
        </p>
       </div>
       
     </div>
     <UserDetailsCard />
     <UserProgress />
    <div className='user-stories'>
        <div className='stories'>
            <div className='user1'>User stories</div>
            <div onClick={() => navigate('/admin/user-stories')} className='view'>View all</div>
        </div>
        <AdminUserStoriesList1 />
    </div>
  </div>
  );
};

// These are the types of the props that are passed to the component

UserDetails.propTypes = {};

// These are their default values

UserDetails.defaultProps = {};

export default UserDetails;
