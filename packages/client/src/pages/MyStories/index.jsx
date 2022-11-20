import React from "react";

import PropTypes from "prop-types";

import { Layout } from "../../components/molecules";
import { SearchBar } from "../../components/atoms/SearchBar";

import recent from "../../assets/MyStories/recent.png";
import view from "../../assets/MyStories/view-1.png";

import "./MyStories.css";
import ViewStoryCard from "../../components/atoms/ViewStoryCard";
import { Link } from "react-router-dom";

export const MyStories = () => {
  const dummyData = [
    { id: 0, title: "Holla", src: view },
    { id: 1, title: "Hollala", src: view },
    { id: 2, title: "Hollalalala", src: view },
    { id: 3, title: "Holla", src: view },
    { id: 4, title: "Hollala", src: view },
    { id: 5, title: "Hollalalala", src: view },
  ];

  return (
    <div className="MyStories">
      <Layout>

        <section className="story-collection" id="recently-created">
          <h3>Recently Created</h3>

          <Link to={"/story/" + "7"}>
            <img src={recent} alt="" />
            <p>The empty house</p>
          </Link>
        </section>

        <ViewStoryCard
          heading="Uncompleted Stories"
          id="uncompleted-stories"
          data={dummyData}
        />

        <ViewStoryCard
          heading="Completed Stories"
          id="completed-stories"
          data={dummyData}
        />
      </Layout>
    </div>
  );
};

// These are the types of the props that are passed to the component

MyStories.propTypes = {};

// These are their default values

MyStories.defaultProps = {};

export default MyStories;
