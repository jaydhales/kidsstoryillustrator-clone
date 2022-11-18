import React from "react";
import "./CreateStory.css";

import right_arrow from "../../assets/create-story/arrow-right.svg";
import placeholder_image from "../../assets/create-story/placeholder-Image.svg";
import placeholder_page_image from "../../assets/create-story/place_index_Image.svg";
import previous_arr_icon from "../../assets/create-story/previous-next-arrow.svg";

const CreateStory = () => {
  return (
    <div className="create-story-wrapper">
      <div className="cs-sub-container">
        <div className="content-01 top-container">
          <div className="arr-img-cont">
            <img src={right_arrow} alt="" />
          </div>
          <div className="btn-container-01">
            <button className="btn-01">Preview story</button>
            <button className="btn-02">Save story</button>
          </div>
        </div>
        <div className="content-02 main-container">
          <div className="story-content-01">
            <h3>Story Title</h3>
            <div>
              <input
                type="text"
                name="story_name"
                id="story_name"
                placeholder="Give your story a title"
              />
            </div>
          </div>
          <div className="story-content-02">
            <div className="s-c-02-sub-container-01 text-context">
              <div className="text-tabs-container">
                <div className="text-context-tabs">
                  <p>Passage of story</p>
                  <div>
                    <textarea
                      type="text"
                      placeholder="Ade is doing is assginment in his room"
                    />
                  </div>
                </div>
                <div className="text-context-tabs">
                  <p>Describe illustration</p>
                  <div>
                    <textarea
                      type="text"
                      placeholder="Boy In A Room Doing Assignment"
                    />
                  </div>
                </div>
                <div className="text-context-tabs gen-button-container">
                  <button>Generate</button>
                </div>
              </div>
            </div>
            <div className="s-c-02-sub-container-02 image-context">
              <div>
                <img src={placeholder_image} alt="" />
              </div>
            </div>
          </div>
          <div className="pages-index-container">
            <div className="p-i-c-01">
              <p className="p-i-c-01-pages">Pages</p>
              <p className="p-i-c-01-new_page" > New page</p>
            </div>
            <div className="p-i-c-02">
              <div>
                <img src={previous_arr_icon} alt="" />
                <p>Previous</p>
              </div>
              <div>
                <img src={placeholder_page_image} alt="" />
              </div>
              <div>
              <img src={placeholder_page_image} alt="" />
              </div>
              <div>
                <img src={previous_arr_icon} alt="" />
                <p>Previous</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateStory;
