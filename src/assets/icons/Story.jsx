import React from 'react';

import PropTypes from 'prop-types';

import './Story.scss';

export const Story = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M11 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22H15C20 22 22 20 22 15V13"
      stroke="#646363"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M16.0418 3.01928L8.16183 10.8993C7.86183 11.1993 7.56183 11.7893 7.50183 12.2193L7.07183 15.2293C6.91183 16.3193 7.68183 17.0793 8.77183 16.9293L11.7818 16.4993C12.2018 16.4393 12.7918 16.1393 13.1018 15.8393L20.9818 7.95928C22.3418 6.59928 22.9818 5.01928 20.9818 3.01928C18.9818 1.01928 17.4018 1.65928 16.0418 3.01928Z"
      stroke="#646363"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M14.9102 4.15039C15.5802 6.54039 17.4502 8.41039 19.8502 9.09039"
      stroke="#646363"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// These are the types of the props that are passed to the component

Story.propTypes = {};

// These are their default values

Story.defaultProps = {};

export default Story;
