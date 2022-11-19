import React from "react";

import PropTypes from "prop-types";

import { Layout } from "../../components/molecules";
import { SearchBar } from "../../components/atoms/SearchBar";

import recent from "../../assets/MyStories/recent.png";
import view from "../../assets/MyStories/view-1.png";

import "./MyStories.css";
import ViewStoryCard from "../../components/atoms/ViewStoryCard";

export const MyStories = () => {
  const dummyData = [
    { id: 0, title: "Holla", src: view },
    { id: 1, title: "Hollala", src: view },
    { id: 2, title: "Hollalalala", src: view },
  ];

  return (
    <div className="MyStories">
      <Layout>
        <SearchBar />

        <section className="story-collection recently-created">
          <h3>Recently Created</h3>

          <img src={recent} alt="" />
          <p>The empty house</p>
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
