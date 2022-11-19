import React, { useEffect, useRef, useState } from "react";
import "./ImageCard.css";

import check_img from "../../../assets/images/create-story/check-good-yes.svg";

import PropTypes from "prop-types";

const ImageCard = ({ image_url, src, indexNo }) => {
  const [active, setActive] = useState(false);

  const ref = useRef(null);

  const getElementID = (e) => {
    const element_id = e.target.id;
    console.log(element_id);

    const el2 = document.getElementById(element_id);
    console.log(el2.parentElement.firstChild);

		
  };

  useEffect(() => {
    // const el2 = document.getElementsByClassName('check_img_off');
    // console.log(el2);
  });

  return (
    <div
      className="imagecard"
      onClick={(e) => {
        getElementID(e);
				src(image_url)
      }}
    >
      <img src={check_img} className={`check_img check_img_off`} alt="" />
      <img
        src={image_url}
        id={`${indexNo}-image`}
        className="item_img"
        alt="Image Returned"
      />
    </div>
  );
};

ImageCard.propTypes = {
  image_url: PropTypes.string,
  src: PropTypes.func,
  indexNo: PropTypes.number,
};

export default ImageCard;
