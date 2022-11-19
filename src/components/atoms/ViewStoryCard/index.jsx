import React from "react";

import PropTypes from "prop-types";

import "./ViewStoryCard.css";
import { Link } from "react-router-dom";

export const ViewStoryCard = ({ heading, id, data }) => {
  return (
    <section className="story-collection" id={id}>
      <h3>{heading}</h3>

      <div className="ViewStoryCard">
        {data.map(({ id, title, src }) => (
          <Link to={"/story/" + id} className="story-card" key={id}>
            <img src={src} alt="" />

            <p>{title}</p>
          </Link>
        ))}
      </div>

      <a href="#" className="button">
        See All
      </a>
    </section>
  );
};

// These are the types of the props that are passed to the component

ViewStoryCard.propTypes = {
  heading: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      src: PropTypes.string.isRequired,
    })
  ).isRequired,
};

// These are their default values

ViewStoryCard.defaultProps = {};

export default ViewStoryCard;
