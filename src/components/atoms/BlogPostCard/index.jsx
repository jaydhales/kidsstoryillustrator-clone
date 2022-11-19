import React, { useId } from "react";
import "./BlogPostCard.css";
import pic8 from "./pic8.png";
import PropTypes from "prop-types";
import { SmallImg } from "../../../icons";

const BlogPostCard = ({
  image,
  title,
  heading,
  date,
  content,
  relativeUrl,
}) => {
  const id = useId();

  return (
    <section className="BlogPostCard">
      <div className="BlogHeading">
        <div className="BlogHeading__content">
          <div className="BlogHeading__img">
            <img src={pic8} alt="" />
          </div>
          <div className="BlogHeading__head">
            <small>
              <b>{heading}</b>
            </small>
            <small>{date}</small>
          </div>
        </div>
        <SmallImg />
      </div>

      <img
        src={`/${relativeUrl ?? "image"}/${image}.png`}
        alt="blog card"
        className="BlogPostCard__img"
      />
    

      <div>
        <h3>{title}</h3>
        <p>{content}</p>
      </div>
    </section>
  );
};

// These are the types of the props that are passed to the component

BlogPostCard.propTypes = {
  title: PropTypes.string,
  heading: PropTypes.string,
  content: PropTypes.string,
  date: PropTypes.string,
  image: PropTypes.string,
  relativeUrl: PropTypes.string,
};

// These are their default values

BlogPostCard.defaultProps = {
  heading: "Kids Learning Culture",
  date: "Nov 15, 2022",
  image: "./image/pic3.png",
  title: "Fun ways to improve your kid learning",
  content:
    "It can be hard trying to get kids to read and focus at the same time. I know hard it is because I have been there.Being ...",
};

export default BlogPostCard;
//  <div>
//
//<p>{date}</p>
//         </div>

// <div>
//         <h3>{title}</h3>
//         <p>{content}</p>
//       </div>
