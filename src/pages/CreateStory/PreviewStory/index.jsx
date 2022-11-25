import React from 'react'
import "./PreviewStory.scss";

import PropTypes from "prop-types";

const PreviewStory = ({pageDetails: {
	pageParagraphText,
	pageImglinkUri
},}) => {
	return (
    <div className='sceneWrapper'>
      <div className='image_container_xxs'>
        <img src={pageImglinkUri} alt="" />
      </div>
      <p>{pageParagraphText}</p>
    </div>
  );
}

PreviewStory.propTypes = {
	pageDetails: PropTypes.object
};

export default PreviewStory;