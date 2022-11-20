import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import PropTypes from "prop-types";

import "./Story.scss";
import { Layout } from "../../components/molecules";
import arrowLeft from "../../assets/Story/icons/arrow-left.png";
import arrowRight from "../../assets/Story/icons/arrow-right.png";
import img2 from "../../assets/Story/images/img-1.png";
import img1 from "../../assets/Story/images/img-2.png";
import ViewStoryCard from "../../components/atoms/ViewStoryCard";
import view from "../../assets/MyStories/view-1.png";

export const Story = () => {
  const dummyData = [
    { id: 0, title: "Holla", src: view },
    { id: 1, title: "Hollala", src: view },
    { id: 2, title: "Hollalalala", src: view },
    { id: 3, title: "Holla", src: view },
    { id: 4, title: "Hollala", src: view },
    { id: 5, title: "Hollalalala", src: view },
  ];
  const dummyStory = {
    title: "The friendly fox and crazy rat",
    pages: [
      {
        page: 1,
        image: img1,
        content:
          "Once upon a time, there was a friendly fox who lived with his uncle in a small village filled with trees, grasses and animals He loved to be kind and gentle and never took himself too seriously (there is nothing wrong in taking yourself seriously!) He would often go alone to explore the village each day and he loves going for walks in the beautiful forest around his home and children loves to play with him, he tries his best to always comport himself and never to hurt anyone ",
      },
      {
        page: 2,
        image: img2,
        content:
          "One day the fox was on his way to play with his human friends (Tony and Sarah) but he was stopped by the famous crazy rat who was tring to steal from mr rabbit. The fox warned the rat that stealing is not allowed and dangerous consequences will follow. Eventually, the fox introduced crazy rat to his human friends telling them about him, so tony and sarah needed help with their work and the fox and the rat agreed to help so they can make the work faster",
      },
    ],
  };

  const totalPages = dummyStory.pages.length - 1;
  const [pageNum, setPageNum] = useState(0);
  const [currentPage, setCurrentPage] = useState(dummyStory.pages[pageNum]);
  const [prevDisabled, setPrevDisabled] = useState(true);
  const [nextDisabled, setNextDisabled] = useState(false);
  const navigate = useNavigate();

  // Change Story Page
  useEffect(() => {
    setCurrentPage(dummyStory.pages[pageNum]);

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
    <div className="Story">
      <Layout>
        <section className="">
          <button onClick={() => navigate(-1)}>
            <img src={arrowLeft} alt="" />
          </button>

          <div className="content">
            <h3>{dummyStory.title}</h3>
            <img src={currentPage.image} alt="" />
            <p>{currentPage.content}</p>
          </div>

          <div className="page-nav">
            <button
              onClick={(e) => handleEvent(e, "previous")}
              disabled={prevDisabled}
            >
              <img src={arrowLeft} alt="left arrow" /> <span>Previous</span>
            </button>
            <div className="page-pointer">
              {dummyStory.pages.map(({ page }) => (
                <i
                  key={page}
                  className={pageNum === page - 1 ? "active" : ""}
                />
              ))}
            </div>
            <button
              onClick={(e) => handleEvent(e, "next")}
              disabled={nextDisabled}
            >
              <img src={arrowRight} alt="left arrow" /> <span>Next</span>
            </button>
          </div>
        </section>

        <ViewStoryCard
          heading="Explore other stories"
          id="more"
          data={dummyData}
        />
      </Layout>
    </div>
  );
};

// These are the types of the props that are passed to the component

Story.propTypes = {};

// These are their default values

Story.defaultProps = {};

export default Story;
