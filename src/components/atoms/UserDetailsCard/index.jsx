import React from 'react';

import propTypes from 'prop-types';

import './UserDetailsCard.scss';
import person from '../../../assets/adminuserdetails/person.svg'

export const UserDetailsCard = (props) => {
  return <div className='UserDetailsCard'>
        <h2>All Personal Informations</h2>
        <div>
            <div className='detail'>
                <img src={person} alt="icon" />
                <div>
                    <p>{props.username}</p>
                    <p> Username</p>
                </div>
            </div>
            <div>
                <img src={person} alt="icon" />
                <div>
                    <p> {props.email} </p>
                    <p>Email Address</p>
                </div>
            </div>
            <div>
                <img src={person} alt="icon" />
                <div>
                    <p>{props.phone} </p>
                    <p>Phone Number</p>
                </div>
            </div>
            
        </div>
        <div>
        <div>
                <img src={person} alt="icon" />
                <div>
                    <p>{props.website} </p>
                    <p>Website</p>
                </div>
            </div>
            <div>
                <img src={person} alt="icon" />
                <div>
                    <p>{props.gender} </p>
                    <p>Gender</p>
                </div>
            </div>
            <div>
                <img src={person} alt="icon" />
                <div>
                    <p>{props.dateJoined} </p>
                    <p>Date Joined</p>
                </div>
            </div>

        </div>
        <div>
        <div>
                <img src={person} alt="icon" />
                <div>
                    <p>{props.address} </p>
                    <p>Address</p>
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
