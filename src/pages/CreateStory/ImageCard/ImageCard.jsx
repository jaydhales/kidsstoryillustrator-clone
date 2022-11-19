import React, { useEffect, useRef, useState } from "react";
import "./ImageCard.css";

import check_img from "../../../assets/images/create-story/check-good-yes.svg";

import PropTypes from "prop-types";

const ImageCard = ({ image_url, src, indexNo }) => {
  const [active, setActive] = useState(false);

  const ref = useRef(null);

  const getElementID = (e) => {
    const element_id = e.target.id;
    // console.log(element_id);

    const el2 = document.getElementById(element_id);
    
    const parentPar = el2.parentElement.parentElement;
    
    console.log(parentPar.childElementCount)
    for (let x = 0; x < 9; x++) {
      for (let i = 0; i < parentPar.children[0].children[0].classList.length; i++) {
        if (parentPar.children[0].children[0].classList.contains("check_img_off")) {
          console.log("E dey");
          parentPar.children[0].children[0].classList.remove("check_img_off");
        } else {
          parentPar.children[0].children[0].classList.add("check_img_off");
        }
      }
    }

    const checkImageDisplay = el2.parentElement.firstChild;
    console.log(checkImageDisplay.classList)
    checkImageDisplay.classList.remove("check_img_off");

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
