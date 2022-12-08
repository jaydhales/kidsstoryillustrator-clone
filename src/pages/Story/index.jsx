import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import PropTypes, { object } from "prop-types";

import "./Story.scss";
import arrowLeft from "../../assets/Story/icons/arrow-left.png";
import arrowRight from "../../assets/Story/icons/arrow-right.png";
import ViewStoryCard from "../../components/atoms/ViewStoryCard";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import SideBar from "../../components/molecules/SideBar";

export const Story = () => {
  const { storyContent, fetchStory } = useContext(UserContext);
  const [pageNum, setPageNum] = useState(0);
  const [prevDisabled, setPrevDisabled] = useState(true);
  const [nextDisabled, setNextDisabled] = useState(false);

  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    fetchStory(id);
  }, []);
  // Change Story Page
  useEffect(() => {
    const totalPages =
      typeof storyContent === "object" && storyContent.scenes.length - 1;
    if (pageNum === 0) {
      setPrevDisabled(true);
    } else {
      setPrevDisabled(false);
    }

    if (pageNum === totalPages) {
      setNextDisabled(true);
    } else {
      setNextDisabled(false);
    }
  }, [pageNum]);

  if (typeof storyContent !== "object") return;

  const handleEvent = (e, action) => {
    e.preventDefault();

    switch (action) {
      case "previous":
        setPageNum(pageNum - 1);
        break;

      case "next":
        setPageNum(pageNum + 1);
        break;

      default:
        break;
    }
  };

  const toSentenceCase = (str) => {
    var splitStr = str.toLowerCase().split(" ");
    for (var i = 0; i < splitStr.length; i++) {
      // You do not need to check if i is larger than splitStr length, as your for does that for you
      // Assign it back to the array
      splitStr[i] =
        splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
    }
    // Directly return the joined string
    return splitStr.join(" ");
  };

  return (
    <div>
      <div className="sidebar">
        <SideBar />
      </div>
      <div className="Story">
        <div className="content">
          <h3>{toSentenceCase(storyContent.title)}</h3>

          <div className="scenes">
            <img
              className="story-illustration"
              src={storyContent.scenes[pageNum].imageURL}
              alt=""
            />
            <p className="caption">{storyContent.scenes[pageNum].caption}</p>
          </div>
          {/* <img
            className="story-illustration"
            src={storyContent.scenes[pageNum].imageURL}
            alt=""
          />
          <p className="caption">{storyContent.scenes[pageNum].caption}</p> */}
        </div>

        <div className="page-nav">
          <button
            onClick={(e) => handleEvent(e, "previous")}
            disabled={prevDisabled}
          >
            <img src={arrowLeft} alt="left arrow" /> <span>Previous</span>
          </button>
          <div className="page-pointer">
            {storyContent.scenes.map((_id, index) => (
              <i key={_id} className={pageNum === index ? "active" : ""} />
            ))}
          </div>
          <button
            onClick={(e) => handleEvent(e, "next")}
            disabled={nextDisabled}
          >
            <img src={arrowRight} alt="left arrow" /> <span>Next</span>
          </button>
        </div>

        {/* <ViewStoryCard
          heading="Explore other stories"
          id="more"
          data={dummyData}
        /> */}
      </div>
    </div>
  );
};

// These are the types of the props that are passed to the component

Story.propTypes = {};

// These are their default values

Story.defaultProps = {};

export default Story;
