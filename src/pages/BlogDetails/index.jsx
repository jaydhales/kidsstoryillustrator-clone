import React from "react";

import PropTypes from "prop-types";

import "./BlogDetails.scss";
import BlogPostCard from "../../components/atoms/BlogPostCard";
import pic3 from "./pic3.png";
import pics1 from "./pics1.png";
import { Layout } from "../../components/molecules";

export const BlogDetails = () => {
  return (
    <Layout>
      <div className="BlogDetails">
        <div className="BlogDetails__heading">
          <p className="BlogDetails_para ">Nov 12, 2022</p>
          <h1 className="BlogDetails__headerone">
            Fun ways to improve Your kids learning culture
          </h1>
        </div>
        <img src={pics1} alt="blog card" className="BlogDetails__img" />
        <div className="BlogDetails__content">
          <p className="Blogcontent_para">
            It can be hard trying to get kids to read and focus at the same
            time. I know how hard it is because I have been there.
            <p className="Blogcontent_list">
              Being a teacher of elementary school for at least 3 months of my
              life exposed me to the power of visuals and imagery in the
              intellectual building of kids.
            </p>
            <p className="Blogcontent_list">
              At first, I used to think “why so important” but soon I realised
              it should never be less important. Otherwise, a child would
              struggle to focus while learning and even lose the fun part of
              learning.
            </p>
            <p className="Blogcontent_list">
              This is what Magic Book Writer will help you achieve for your kid
              as a teacher and as a parent.
            </p>
          </p>
          <h3 className="BlogDetails__sub-heading">
            Reasons you should use Magic Book Writer for your kids
          </h3>
          <ul className="BlogDetails__ul">
            <li>
              <b>It helps to keep focus while reading</b>: Kids struggle to
              focus while reading but with an Ai that can display written
              stories in imagery form your kid can focus better while reading
              stories
            </li>

            <li>
              <b>It improves the comprehension of your kids</b>: Have you ever
              asked yourself why kids could forget what was read to them in a
              second? That’s because their mental capacity is too low to absorb
              whatever is not exciting. Visuals make reading exciting for kids
              and in return it helps their mental comprehension and improve
              their retention of new knowledge.
            </li>

            <li>
              <b>It improves reading interest</b>: Magic Book Writer makes
              reading fun for your kid even for the kids who seem to have low
              interest in reading. This is a good way to improve yor kid’s
              interest in reading
            </li>
          </ul>
        </div>
      </div>
    </Layout>
  );
};

// These are the types of the props that are passed to the component

BlogDetails.propTypes = {};

// These are their default values

BlogDetails.defaultProps = {};

export default BlogDetails;
