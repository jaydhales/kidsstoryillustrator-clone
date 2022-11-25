import React from "react";
import { Link } from "react-router-dom";
import "./BlogDetails.scss";

import PropTypes from "prop-types";
import pic3 from "./pic3.png";
import pics from "./pics.png"
// import "./Blog.scss";
import { Layout } from "../../components/molecules";

export const BlogPage = () => {
  return (
    <Layout>
      <div className="BlogDetails">
        <div className="BlogDetails__heading">
          <p className="BlogDetails_para">Nov 12, 2022</p>
          <h1 className="header_one">
            Fun Ways To Improve Your Kids Learning Culture
          </h1>
        </div>
        <img src={pics} alt="blog card" className="BlogDetails__img" />
        <div className="BlogDetails__content">
          <p className="Blogcontent_para">
            It can be hard trying to get kids to read and focus at the same
            time. I know how hard it is because I have been there.
          </p>
          <p className="Blogcontent_para">
            Being a teacher of elementary school for at least 3 months of my
            life exposed me to the power of visuals and imagery in the
            intellectual building of kids.
          </p>
          <p className="Blogcontent_para">
            At first, I used to think “why so important” but soon I realised it
            should never be less important. Otherwise, a child would struggle to
            focus while learning and even lose the fun part of learning.
          </p>
          <p className="Blogcontent_para">
            This is what StoryAi will help you achieve for your kid as a teacher
            and as a parent.
          </p>
          <h3 className="BlogDetails__sub-heading">
            Reasons you should use StoryAi for your kids
          </h3>
          <ul className="BlogDetails__ul">
            <li className="Blogcontent_list">
              <b>It helps to keep focus while reading</b>: Kids struggle to
              focus while reading but with an Ai that can display written
              stories in imagery form your kid can focus better while reading
              stories
            </li>

            <li className="Blogcontent_list">
              <b>It improves the comprehension of your kids</b>: Have you ever
              asked yourself why kids could forget what was read to them in a
              second? That’s because their mental capacity is too low to absorb
              whatever is not exciting. Visuals make reading exciting for kids
              and in return it helps their mental comprehension and improve
              their retention of new knowledge.
            </li>

            <li className="Blogcontent_list">
              <b>It improves reading interest</b>: StoryAi makes reading fun for
              your kid even for the kids who seem to have low interest in
              reading. This is a good way to improve yor kid’s interest in
              reading
            </li>
          </ul>
        </div>
      </div>
    </Layout>
  );
};

// These are the types of the props that are passed to the component

BlogPage.propTypes = {};

// These are their default values

BlogPage.defaultProps = {};

export default BlogPage;
