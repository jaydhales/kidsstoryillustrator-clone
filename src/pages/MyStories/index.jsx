import React from "react";

import PropTypes from "prop-types";

import { Layout } from "../../components/molecules";
import { SearchBar } from "../../components/atoms/SearchBar";

import recent from "../../assets/MyStories/recent.png";
import view1 from "../../assets/MyStories/view-1.png";
import view2 from "../../assets/MyStories/view-2.png";
import view3 from "../../assets/MyStories/view-3.png";
import view4 from "../../assets/MyStories/view-4.png";
import view5 from "../../assets/MyStories/view-5.png";
import view6 from "../../assets/MyStories/view-6.png";

import "./MyStories.scss";
import ViewStoryCard from "../../components/atoms/ViewStoryCard";
import { Link } from "react-router-dom";

export const MyStories = () => {
  const dummyData = [
    { id: 0, title: "Alicia the shy kid", src: view1 },
    { id: 1, title: "Mrs ben and family", src: view2 },
    { id: 2, title: "Crazy mrs fox", src: view3 },
    { id: 3, title: "The lonely grandma 1", src: view4 },
    { id: 4, title: "The wooden house", src: view5 },
    { id: 5, title: "The family under a tree", src: view6 },
  ];

  return (
    <Layout>
      <div className="MyStories">
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
      </div>
    </Layout>
  );
};

// These are the types of the props that are passed to the component

MyStories.propTypes = {};

// These are their default values

MyStories.defaultProps = {};

export default MyStories;
