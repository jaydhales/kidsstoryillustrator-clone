import React from 'react';

import propTypes from 'prop-types';

import './UserDetailsCard.scss';
import person from '../../../assets/adminuserdetails/person.svg'

export const UserDetailsCard = (props) => {
  return <div className='UserDetailsCard'>
        <h2>All Personal Informations</h2>
        <div className='main_details'>
            <div className='detail'>
                <img src={person} alt="icon" />
                <div className='details'>
                    <p className='userdetail'>{props.username}</p>
                    <p className='uservalue'> Username</p>
                </div>
            </div>
            <div  className='detail'>
                <img src={person} alt="icon" />
                <div className='details'>
                    <p className='userdetail'> {props.email} </p>
                    <p className='uservalue'>Email Address</p>
                </div>
            </div>
            <div  className='detail'>
                <img src={person} alt="icon" />
                <div className='details'>
                    <p className='userdetail'>{props.phone} </p>
                    <p className='uservalue'>Phone Number</p>
                </div>
            </div>
            
        </div>
        <div className='main_details'>
        <div className='detail'>
                <img src={person} alt="icon" />
                <div className='details'>
                    <p className='userdetail'>{props.website} </p>
                    <p className='uservalue'>Website</p>
                </div>
            </div>
            <div className='detail'>
                <img src={person} alt="icon" />
                <div className='details'>
                    <p className='userdetail'>{props.gender} </p>
                    <p className='uservalue'>Gender</p>
                </div>
            </div>
            <div  className='detail'>
                <img src={person} alt="icon" />
                <div className='details'>
                    <p className='userdetail'>{props.dateJoined} </p>
                    <p className='uservalue'>Date Joined</p>
                </div>
            </div>

        </div>
        <div className='main_details'>
        <div className='detail'>
                <img src={person} alt="icon" />
                <div className='details'>
                    <p className='userdetail'>{props.address} </p>
                    <p className='uservalue'>Address</p>
                </div>
            </div>
        </div>
  </div>;
};

// These are the types of the props that are passed to the component

UserDetailsCard.propTypes = {
    username:propTypes.string,
    email: propTypes.any,
    address: propTypes.any,
    gender: propTypes.string,
    website: propTypes.any,    
    phone: propTypes.any,
    dateJoined: propTypes.any

};

// These are their default values

UserDetailsCard.defaultProps = {
    username: 'Cynka',
    email: 'cynthianduka@gmail.com',
    address: '2972 Westheimer Rd. Santa Ana, Illinois 85486 ',
    gender: 'Female',
    website: 'www.kidstrator.com',    
    phone: '+234 705 594 2315',
    dateJoined: '1st Novemeber, 2022'

};

export default UserDetailsCard;
