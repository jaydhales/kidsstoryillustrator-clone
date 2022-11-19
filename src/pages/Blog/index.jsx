import React from "react";
import { BlogHero, BlogPost, Layout } from "../../components/molecules";

import PropTypes from "prop-types";

import "./Blog.css";

export const Blog = () => {
  return (
    <Layout>
      <BlogHero />
      <BlogPost/>
    </Layout>
  );
};

// These are the types of the props that are passed to the component

Blog.propTypes = {};

// These are their default values

Blog.defaultProps = {};

export default Blog;
