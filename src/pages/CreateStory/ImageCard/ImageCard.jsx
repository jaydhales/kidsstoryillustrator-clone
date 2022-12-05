import React, { useEffect, useRef, useState } from "react";
import "./ImageCard.scss";

import check_img from "../../../assets/images/create-story/check-good-yes.svg";

import PropTypes from "prop-types";

const ImageCard = ({ image_url, src, indexNo }) => {
  const [active, setActive] = useState(false);

  const ref = useRef(null);

  const getElementID = (e) => {
    const element_id = e.target.id;

    const el2 = document.getElementById(element_id);

    const parentPar = el2.parentElement.parentElement;

    for (let x = 0; x < parentPar.childElementCount; x++) {
      parentPar.childNodes[x].classList.remove("isChecked");
    }

    el2.parentElement.classList.add("isChecked");
  };

  return (
    <div
      className="ImageCard"
      onClick={(e) => {
        getElementID(e);
        src(image_url);
      }}
    >
      <img src={check_img} className="check" alt="" />
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
