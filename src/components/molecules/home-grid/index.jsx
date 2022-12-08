import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./homegrid.scss";
import hero from "./Images/hero.png";

const Homegrid = () => {
  const navigate = useNavigate();
  return (
    <div className="home_hero">
      <div className="home_hero_text">
        <h1 className="hero_header">
          Create animated story books for children.
        </h1>
        <p className="hero_text">
          Now you can simply describe a story and watch Magic Book Writer
          generate engaging animated illustrations your kids would love.
        </p>
        <div className="button--grid">
          <Link to={"/createStory"} className="hero_button">
            Create Story
          </Link>
        </div>
      </div>
      <div className="hero_img_container">
        <img src={hero} alt="heroimg" />
      </div>
    </div>
  );
};

export default Homegrid;
