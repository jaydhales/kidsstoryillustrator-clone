import React, { useEffect, useState } from "react";

import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import Button from "../../../components/atoms/Button";
import backBtn from "../../../assets/img/arrow-left.png";

const PreviewStory = ({ story, title, back, handleSave }) => {
  const totalPages = story.length - 1;
  const [currentPage, setCurrentPage] = useState(0);
  const [prevDisabled, setPrevDisabled] = useState(true);
  const [nextDisabled, setNextDisabled] = useState(false);

  useEffect(() => {
    if (currentPage === 0) {
      setPrevDisabled(true);
    } else {
      setPrevDisabled(false);
    }

    if (currentPage === totalPages) {
      setNextDisabled(true);
    } else {
      setNextDisabled(false);
    }
  }, [currentPage]);

  return (
    <div className="wrapper preview">
      <div className="preview-container">
        <div className="heading">
          <div className="page-control">
            <button
              onClick={(e) => {
                back(false);
              }}
            >
              <img src={backBtn} alt="" />
            </button>
            <h2>Story Preview</h2>
          </div>

          <p>{title}</p>

          <div className="page-control">
            <button
              onClick={(e) => setCurrentPage(currentPage - 1)}
              disabled={prevDisabled}
            >
              ˂
            </button>
            <p>Page {currentPage + 1}</p>
            <button
              onClick={(e) => setCurrentPage(currentPage + 1)}
              disabled={nextDisabled}
            >
              ˃
            </button>
          </div>
        </div>

        <div className="preview-main">
          <div className="image">
            <img
              src={story[currentPage].content.image}
              alt={story[currentPage].content.keyword}
            />
          </div>

          <p>{story[currentPage].content.paragraph}</p>

          <Button clickFn={handleSave}> Save </Button>
        </div>
      </div>
    </div>
  );
};

PreviewStory.propTypes = {
  story: PropTypes.array,
  title: PropTypes.string,
  back: PropTypes.func,
};

export default PreviewStory;
