import React, { useEffect, useState } from "react";

import PropTypes from "prop-types";

import "./ViewStoryCard.scss";
import { Link } from "react-router-dom";

export const ViewStoryCard = ({ data }) => {
  if (data && data.length === 0) return <>Empty</>;
  return (
    <div className="ViewStoryCard">
      {data.map(({ _id, title, scenes }) => (
        <Link to={"/story/" + _id} key={_id}>
          <img src={scenes[0].imageURL} alt="" />
          <p>{title}</p>
        </Link>
      ))}
    </div>
  );
};

// These are the types of the props that are passed to the component

ViewStoryCard.propTypes = {};

// These are their default values

ViewStoryCard.defaultProps = {};

export default ViewStoryCard;
