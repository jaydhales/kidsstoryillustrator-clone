import React from "react";
import PropTypes from "prop-types";

import "./Home.scss";
import { Layout } from "../../components/molecules";
import illustration from "./Images/illustration.svg";
import redlogo from "./Images/Red Rectangle.svg";
import greenlogo from "./Images/Green Rectangle.svg";
import orangelogo from "./Images/Orange Rectangle.svg";
import bluelogo from "./Images/Blue Rectangle.svg";
import AI from "./Images/artificial intelligence.svg";
import avatar from "./Images/brazil.svg";
import { useNavigate } from "react-router-dom";


export const Home = () => {
  const navigate = useNavigate();

  return (
    <Layout>
      <div className="Home">
        <header>
          <section className="text">
            <h1 className="header-text">Generate Story Illustrations</h1>
            <p className="lead">
              Describe your scene. Our AI will generate the illustrations in
              details
            </p>
            <div className="button--grid">
              <button className="create" onClick={() => navigate('/createStory')} >Create Stories</button>
              <button className="read">Read Stories</button>
            </div>
          </section>
          <section className="image">
            <img src={illustration} alt="bulb" />
          </section>
        </header>
        <h3 style={{ textAlign: "center" }} className='h3-header'>
          Why You Love Using <span className="span">story.ai</span>
        </h3>
        <section className="reasons--grid">
          <div className="grid--one">
            <div>
              <div className="flex">
                <div className="dice">
                  <img src={redlogo} alt="bulb" />
                </div>

                <h4 className="h4-header">Fast & Scalable</h4>
              </div>
              <p>
                We have provided the fastest means to generate illustrtions for
                your stories. You do not have to search endlessly in rabbit
                holes for detailed illustrations
              </p>
            </div>
            <div>
              <div className="flex">
                <div className="dice">
                  <img src={greenlogo} alt="bulb" />
                </div>

                <h4 className="h4-header">Easy to Use</h4>
              </div>
              <p>
                In just 4 steps, you have everything you need to make a great
                children story books with detailed and quality illustrations.
                See <span className="span">demo here</span>
              </p>
            </div>
          </div>
          <div className="grid--two">
            <img src={AI} alt="artificial intelligence" />
          </div>
          <div className="grid--three">
            <div>
              <div className="flex">
                <div className="dice">
                  <img src={orangelogo} alt="bulb" />
                </div>

                <h4 className="h4-header">Automation</h4>
              </div>
              <p>
                Eploying the best use of AI, illustrations for your stories are
                automatically generated. You do not have to bother about the
                details.
              </p>
            </div>
            <div>
              <div className="flex">
                <div className="dice">
                  <img src={bluelogo} alt="bulb" />
                </div>

                <h4 className="h4-header">Have Fun Creating Stories</h4>
              </div>
              <p>
                You do not have to bother about writer’s block. Your keywords
                will generate illustrations in details, while inspiring you to
                write more pages for your stories.
              </p>
            </div>
          </div>
        </section>
        <h3 className='h3-header'>
          Get Illustrations in 4 Simple Steps
        </h3>
        <section className="steps">
          <div>
            <div className="flex">
              <p className="number red">01</p>
              <h4 className="h4-header">Write Your Story</h4>
            </div>
            <p>
              You do not have to bother about writer’s block. Your keywords will
              generate illustrations in details, while inspiring you to write
              more pages for your stories.
            </p>
          </div>
          <div>
            <div className="flex">
              <p className="number blue">02</p>
              <h4 className="h4-header">Enter at Least 2 Keywords</h4>
            </div>
            <p>
              You do not have to bother about writer’s block. Your keywords will
              generate illustrations in details, while inspiring you to write
              more pages for your stories.
            </p>
          </div>
          <div>
            <div className="flex">
              <p className="number green">03</p>
              <h4 className="h4-header">Click on &quot;Generate Illustrations&quot;</h4>
            </div>
            <p>
              You do not have to bother about writer’s block. Your keywords will
              generate illustrations in details, while inspiring you to write
              more pages for your stories.
            </p>
          </div>
          <div>
            <div className="flex">
              <p className="number orange">04</p>
              <h4 className="h4-header">Select Your Preferred Illustration</h4>
            </div>
            <p>
              Select your preferd illustration. You can preview your story to
              see what the background look like before proceeding to export your
              works
            </p>
          </div>
        </section>
        <div className="button--flex">
          <button>Create Story</button>
        </div>
        <h3 style={{ margin: "1em" }} className='h3-header'>Testimonials</h3>
        <section className="testimonials">
          <div className="testimonial-message">
            <p>
              Using this platform has saved me a ton of stress. I finished
              writing my book with the illustrations generated to the last
              detail within 40 minutes. I totally recommend story.ai for every
              children story writers
            </p>
            <div className="avatar--profile">
              <div className="avatar">
                <img src={avatar} alt="avatar" />
              </div>

              <p>Temitope Balogun</p>
            </div>
          </div>
          <div className="testimonial-message">
            <p>
              Using this platform has saved me a ton of stress. I finished
              writing my book with the illustrations generated to the last
              detail within 40 minutes. I totally recommend story.ai for every
              children story writers
            </p>
            <div className="avatar--profile">
              <div className="avatar">
                <img src={avatar} alt="avatar" />
              </div>
              <p>Temitope Balogun</p>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

// These are the types of the props that are passed to the component

Home.propTypes = {};

// These are their default values

Home.defaultProps = {};

export default Home;
