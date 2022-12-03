import React from "react";

import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const PreviewStory = ({ story, title, back }) => {
  return (
    <div className="wrapper preview">
      <div className="preview-container">
        <div className="heading">
          <div className="prev">
            <button
              onClick={(e) => {
                back(false);
              }}
            >
              back
            </button>
            <h2>Story Preview</h2>
          </div>

          <p>{title}</p>

          <p>Page {story[0].page}</p>
        </div>

        <div className="preview-main">
          <div className="image">
            <img src={story[0].content.image} alt={story[0].content.keyword} />
          </div>

          <p>{story[0].content.paragraph}</p>
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
