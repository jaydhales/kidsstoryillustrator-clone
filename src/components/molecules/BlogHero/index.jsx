import React from "react";

import PropTypes from "prop-types";
import pic1 from "./image/pic1.png"
import pic2 from "./image/pic2.png"

import "./BlogHero.scss";

export const BlogHero = () => {
	return <div className="BlogHero">
		<div className="BlogHero__image1-div">
			<img src={pic1} alt="" className="BlogHero__image1"/>
		</div>
		<div className="BlogHero__content">
			<h1 className="BlogHero__content--heading">Our Blog</h1>
			<p className="BlogHero__content--sub-heading">Stories and Features</p>
			<p className="BlogHero__content--text">Subscribe to learn about new product features, the latest in technology, solutions, and updates.</p>
			<form className=" BlogHero__form">
					<input
						type="email"
						placeholder="Enter you email"

					/>
					<button
						type="submit"

					>
						Subscribe
					</button>
				</form>
		</div>
		<div className="BlogHero__image2-div">
		<img src={pic2} alt="" className="BlogHero__image2"/>
		</div>
	</div>;
};

// These are the types of the props that are passed to the component

BlogHero.propTypes = {};

// These are their default values

BlogHero.defaultProps = {};

export default BlogHero;
