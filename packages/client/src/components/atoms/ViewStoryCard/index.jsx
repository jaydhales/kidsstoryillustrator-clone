import React, { useEffect, useState } from "react";

import PropTypes from "prop-types";

import "./ViewStoryCard.css";
import { Link } from "react-router-dom";

export const ViewStoryCard = ({ heading, id, data }) => {
  const [isShowAll, setIsShowAll] = useState(false);
  const [lessData, setLessData] = useState([]);

  useEffect(() => {
    let miniData = [];

    for (let i = 0; i < 3; i++) {
      miniData.push(data[i]);
    }

    setLessData(miniData);
  }, [data]);

  return (
    <section className="story-collection" id={id}>
      <h3>{heading}</h3>

      <div className="ViewStoryCard">
        {isShowAll
          ? data.map(({ id, title, src }) => (
              <Link
                to={"/story/" + id}
                className={isShowAll ? "story-card" : "story-card mobile"}
                key={id}
              >
                <img src={src} alt="" />

                <p>{title}</p>
              </Link>
            ))
          : lessData.map(({ id, title, src }) => (
              <Link
                to={"/story/" + id}
                className={isShowAll ? "story-card" : "story-card mobile"}
                key={id}
              >
                <img src={src} alt="" />

                <p>{title}</p>
              </Link>
            ))}
      </div>

      <button className="button" onClick={(e) => setIsShowAll(!isShowAll)}>
        {isShowAll ? "See Less" : "See More"}
      </button>
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
