import React from "react";

import PropTypes from "prop-types";

import "./Archieve.scss";

import more from '../../../assets/Archieve/more.png'


const archieve = [
    {
        id: 1,
        email: 'oyelolaoluyemi@gmail.com',
        firstName: 'Yemi',
        lastName: 'Olaolu',
        subscription: 'Premium',
    },
    {
        id: 2,
        email: 'andrewsamaila@gmail.com',
        firstName: 'Andrew',
        lastName: 'Kuku',
        subscription: 'Premium',
    },
    {
        id: 3,
        email: 'tobitoluwallawe@gmail.com',
        firstName: 'Tobi',
        lastName: 'Toluwa',
        subscription: 'Free',
    }
]

export const Archieve = () => {

    

  return <div className="Archieve">
    <div className="headerBar">
       <h2 className="archieveText">Archived Users</h2>
       </div>
       <div className="archieveWrapper">
        {archieve.map(item => <div key={item.id} className='archieveUser'> 
                <div>{item.email}</div>
                <div>{item.firstName}</div>
                <div>{item.lastName}</div>
                <div>{item.subscription}</div>
                <div>
                    <img src={more} alt='/' />
                </div>
        </div>)}
        </div>
  </div>;
};

// These are the types of the props that are passed to the component

Archieve.propTypes = {};

// These are their default values

Archieve.defaultProps = {};

export default Archieve;
