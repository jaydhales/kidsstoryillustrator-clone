import React, { useEffect, useState } from "react";

import PropTypes from "prop-types";

import "./HowToUse.scss";

import close from "../../assets/Demo/icons/close.png";
import bg from "../../assets/Demo/images/bg.png";
import view1 from "../../assets/Demo/images/view-1.png";
import view2 from "../../assets/Demo/images/view-2.png";
import view3 from "../../assets/Demo/images/view-3.gif";
import view4 from "../../assets/Demo/images/view-4.png";
import tick from "../../assets/Demo/icons/tick-circle.png";
import arrowLeft from "../../assets/Demo/icons/arrow-left.png";
import arrowRight from "../../assets/Demo/icons/arrow-right.png";

export const HowToUse = () => {
  const demoData = [
    {
      heading: (
        <>
          How <span>story.ai</span> works
        </>
      ),
      media: <img src={view1} alt="" />,
      content: <h1>Create a Story in 3 easy Steps</h1>,
    },
    {
      heading: <>1. Enter Story Details</>,
      media: <img src={view2} alt="" />,
      content: (
        <div className="list">
          <h3>
            <img src={tick} alt="" />
            Enter Story Title
          </h3>
          <h3>
            <img src={tick} alt="" />
            Input a summary
          </h3>
          <h3>
            <img src={tick} alt="" />
            Click Create Story
          </h3>
        </div>
      ),
    },
    {
      heading: <>2. Generate Illustration</>,
      media: <img src={view3} alt="" />,
      content: (
        <div className="list">
          <h3>
            <img src={tick} alt="" />
            Describe a scene
          </h3>
          <h3>
            <img src={tick} alt="" />
            Input keywords & prompts
          </h3>
          <h3>
            <img src={tick} alt="" />
            Click “Generate”
          </h3>
          <h3>
            <img src={tick} alt="" />
            Select desired illustration
          </h3>
          <h3>
            <img src={tick} alt="" />
            Preview your story
          </h3>
          <h3>
            <img src={tick} alt="" />
            Or, Upload desired image
          </h3>
        </div>
      ),
    },
    {
      heading: (
        <>
          How <span>story.ai</span> works
        </>
      ),
      media: <img src={view4} alt="" />,
      content: (
        <div className="list">
          <h3>
            <img src={tick} alt="" />
            Create a Free account to save and download your stories.
          </h3>
          <h3>
            <img src={tick} alt="" />
            To enjoy more features, upgrade to premium.
          </h3>
        </div>
      ),
    },
  ];

  const totalPages = demoData.length - 1;
  const [pageNum, setPageNum] = useState(0);
  const [currentPage, setCurrentPage] = useState(demoData[pageNum]);
  const [prevDisabled, setPrevDisabled] = useState(true);
  const [nextDisabled, setNextDisabled] = useState(false);

  // Change Story Page
  useEffect(() => {
    setCurrentPage(demoData[pageNum]);

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

    console.log(totalPages);
    console.log(pageNum);
  }, [pageNum]);

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

  return (
    <div className="HowToUse">
      <div className="modal">
        <div className="heading">
          <h2>{demoData[pageNum].heading}</h2>
          <button>
            <img src={close} alt="close button" />
          </button>
        </div>
        <div className="main">
          <button
            onClick={(e) => handleEvent(e, "previous")}
            disabled={prevDisabled}
          >
            <img src={arrowLeft} alt="left arrow" />
          </button>
          <div className="content">
            <img src={bg} className="bg" alt="" />
            <div className="inner">{demoData[pageNum].content}</div>
            <div className="media">{demoData[pageNum].media}</div>
          </div>
          <button
            onClick={(e) => handleEvent(e, "next")}
            disabled={nextDisabled}
          >
            <img src={arrowRight} alt="right arrow" />
          </button>
        </div>
      </div>
    </div>
  );
};

// These are the types of the props that are passed to the component

HowToUse.propTypes = {};

// These are their default values

HowToUse.defaultProps = {};

export default HowToUse;
