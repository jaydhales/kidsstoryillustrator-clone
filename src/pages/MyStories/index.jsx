import React, { useContext } from "react";

import PropTypes from "prop-types";

import "./MyStories.scss";
import ViewStoryCard from "../../components/atoms/ViewStoryCard";
import { Link } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";
import { useEffect } from "react";
import SideBar from "../../components/molecules/SideBar";

export const MyStories = () => {
  const { userStories, fetchStories } = useContext(UserContext);

  useEffect(() => {
    fetchStories();
  }, []);

  return (
    <div className="MyStory-Container">
      <div className="sidebar">
        <SideBar />
      </div>
      <div className="MyStories">
        <h3>My Stories</h3>
        <ViewStoryCard data={userStories} />
      </div>
    </div>
  );
};

// These are the types of the props that are passed to the component

MyStories.propTypes = {};

// These are their default values

MyStories.defaultProps = {};

export default MyStories;
