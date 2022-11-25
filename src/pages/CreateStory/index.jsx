import React, { useState } from "react";
import "./CreateStory.scss";

import PropTypes from "prop-types";

import Footer from "../../components/molecules/Footer";

import right_arrow from "../../assets/images/create-story/arrow-right.svg";
import placeholder_image from "../../assets/images/create-story/placeholder-Image.svg";
import placeholder_page_image from "../../assets/images/create-story/place_index_Image.svg";
import add_img from "../../assets/images/create-story/add.svg";
import previous_arr_icon from "../../assets/images/create-story/previous-next-arrow.svg";
import ImageCard from "./ImageCard/ImageCard";
import PreviewStory from "./PreviewStory";
import axios from "axios";

import loaader_img from "../../assets/images/create-story/Spinner-wait.gif";
import { Fade } from "react-awesome-reveal";

const ImageCardList = ({ list_of_image_urls, returnImageLink }) => {
  const [generatedImages, setGeneratedImages] = useState(list_of_image_urls);

  return (
    <div className="imagecard_list_container">
      {generatedImages.map((image, index) => (
        <ImageCard
          key={index.toString()}
          image_url={image}
          indexNo={index}
          src={returnImageLink}
        />
      ))}
    </div>
  );
};

ImageCardList.propTypes = {
  list_of_image_urls: PropTypes.array,
  returnImageLink: PropTypes.func,
};

export const CreateStory = () => {
  const [imageLoadingState, setImageLoadingState] = useState(false);
  const [imageLoadingCounter,setImageLoadingCounter ] = useState('60');

  const [generatedImages, setGeneratedImages] = useState([]);

  const [pageContent, setPageContent] = useState([]);

  const [pageParagraph, setPageParagraph] = useState("");

  const [pageImgLink, setPageImgLink] = useState("");

  const [showPageSaveState, setShowPageSaveState] = useState(false);

  const [previewState, setPreviewState] = useState(false);

  const [generateImagePrompt, setGenerateImagePrompt] = useState('');

  const [imageGenerationState, setImageGenerationState] = useState(false);

  const getImagesFromServer = async () => {
    //
    setImageGenerationState(true);

    axios({
      method: "post",
      url: "https://web-production-c992.up.railway.app/api/get_images",
      data: {
        userPrompt: generateImagePrompt,
      },
    }).then((response) => {
      console.log(response.data.links_array);
      setImageLoadingState(false);
      let new_Arry = [];
      for (let i = 0; i < 9; i++) {
        new_Arry.push(response.data.links_array[i]);
      }
      setGeneratedImages(new_Arry);
    });
    setImageGenerationState(false);
  };

  const setImageLoadingFunc = () => {
    console.log(generatedImages.length);
    if (generatedImages.length != 0) {
      let prompt_response = prompt(
        "Are you sure you want to create a new search? Yes or No"
      ).toLowerCase();
      if (prompt_response.length >= 2) {
        if (prompt_response == "yes") {
          //
          setGeneratedImages([]);

          setPageParagraph("");
          setPageImgLink("");
        } else if (prompt_response == "no") {
          alert("Re-search cancelled");
        } else {
          alert("Please enter a valid response");
        }
      }
    }

    if (generateImagePrompt.length < 2) {
      alert("Please enter a valid text");
    } else {
      setImageLoadingState(true);
      getImagesFromServer();

      let time_count = 60;

      let this_time_counter = setInterval(() => {
        time_count -= 1;
        setImageLoadingCounter(time_count.toString());

        if (time_count == 0) {
          clearInterval(this_time_counter);
        }
      }, 1000);
    }
  };

  const getPageImageLink = (image_url) => {
    console.log("This is the image link: " + image_url);
    setPageImgLink(image_url);
  };

  const save_story_1 = () => {
    console.log("Function Clicked");

    if (pageImgLink.length < 2) {
      console.log("No link available");
      console.log("Story Not Saved");

      return;
    } else if (pageParagraph.length < 2) {
      console.log("No Text available");
      console.log("Story Not Saved");

      return;
    } else {
      //
    }
    let currentPageContent = {
      paragraph: pageParagraph,
      imageLink: pageImgLink,
    };

    return currentPageContent;
  };

  const AddedToPageList = () => {
    const generatedPageContent = save_story_1();
    console.log(generatedPageContent);

    let bject = [
      ...pageContent,
      {
        pageParagraphText: pageParagraph,
        pageImglinkUri: pageImgLink,
      }
  ];

    if (generatedPageContent != undefined) {
      setPageContent(bject);

      setShowPageSaveState(true);

      setGeneratedImages([]);

      setPageParagraph("");
      setPageImgLink("");

      setTimeout(() => {
        setShowPageSaveState(false);
      }, 2000);
    } else {
      console.log("Really can't work");
    }
  };

  const handleDeletePage = (pageIndex) => {
    setPageContent(pageContent.splice(pageIndex, 1));
  };

  const getToCurrentPage = ({ pageIndex }) => {
    console.log("function Clicked");
    const currentPage = pageContent;
    let currentPageText = currentPage[0].pageParagraphText;
    let currentPageImageUri = currentPage[0].pageParagraphText;
    // console.log(currentPage[0].pageParagraphText);
  };

  return (
    <div className="create-story-wrapper">
      <div className="cs-sub-container">
        <div className="content-01 top-container">
          <div className="arr-img-cont">
            <img src={right_arrow} alt="" />
          </div>
          <div className="btn-container-01">
            {previewState ? (
              <button className="btn-01" onClick={() => setPreviewState(false)}>
                Edit Story
              </button>
            ) : (
              <button className="btn-01" onClick={() => setPreviewState(true)}>
                Preview Story
              </button>
            )}
            <button className="btn-02">Save story</button>
          </div>
        </div>
        {!previewState ? (
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
                        value={pageParagraph}
                        onChange={(e) => setPageParagraph(e.target.value)}
                        placeholder="Ade is doing is assginment in his room"
                      />
                    </div>
                  </div>
                  <div className="text-context-tabs">
                    <p>Describe illustration</p>
                    <div>
                      <textarea
                        type="text"
                        value={generateImagePrompt}
                        onChange={(e) => setGenerateImagePrompt(e.target.value)}
                        placeholder="Boy In A Room Doing Assignment"
                      />
                    </div>
                  </div>
                  <div className="text-context-tabs gen-button-container">
                    {imageGenerationState ? (
                      <button
                        className="gen_button_02"
                        disabled
                        onClick={getImagesFromServer}
                      >
                        Loading
                      </button>
                    ) : (
                      <button
                        className="gen_button_01"
                        onClick={setImageLoadingFunc}
                      >
                        Generate
                      </button>
                    )}
                  </div>
                  <div className="text-context-tabs gen-button-container">
                    <button className="gen_button_01" onClick={AddedToPageList}>
                      Save Page
                    </button>
                  </div>
                  {showPageSaveState ? <p>Saved</p> : null}
                </div>
              </div>
              {generatedImages.length < 2 ? (
                <div className="s-c-02-sub-container-02 image-context">
                  {imageLoadingState ? (
                    <div className="image_thumb_43f_content_cont">
                      <div className="loader_container_xde34">
                        <h3>{imageLoadingCounter}</h3>
                        <img src={loaader_img} alt="" />
                        <p>Please wait while the image loads...</p>
                      </div>
                    </div>
                  ) : (
                    <div>
                      <img src={placeholder_image} alt="" />
                    </div>
                  )}
                </div>
              ) : (
                <div className="s-c-02-sub-container-02 image-context-alt">
                  <Fade cascade damping={0.1}>
                    <ImageCardList
                      list_of_image_urls={generatedImages}
                      returnImageLink={getPageImageLink}
                    />
                  </Fade>
                </div>
              )}
            </div>
            <div className="pages-index-container">
              <div className="p-i-c-01">
                <p className="p-i-c-01-pages">Pages</p>
                <p className="p-i-c-01-new_page">
                  <img src={add_img} alt="" /> New page
                </p>
              </div>
              <div className="p-i-c-02">
                <div className="arr-controllers prev-page">
                  <img
                    src={previous_arr_icon}
                    className="arr-controllers-img"
                    alt=""
                  />
                  <p>Previous</p>
                </div>
                {pageContent.length > 0 ? (
                  pageContent.map((SinglePage, index) => (
                    <div key={index} className="page-placeholder-container">
                      <div
                        style={{
                          overflow: "hidden",
                          width: "30px",
                          height: "30px",
                          border: "transparent",
                        }}
                      >
                        <img
                          src={
                            SinglePage.pageImglinkUri
                              ? SinglePage.pageImglinkUri
                              : placeholder_page_image
                          }
                          alt=""
                          style={{ width: "30px", cursor: "pointer" }}
                          onClick={() => getToCurrentPage(index)}
                        />
                      </div>
                      <p>{index + 1}</p>
                    </div>
                  ))
                ) : (
                  <div className="page-placeholder-container">
                    <img src={placeholder_page_image} alt="" />
                    <p>0</p>
                  </div>
                )}
                <div className="arr-controllers nxt-page">
                  <img
                    src={previous_arr_icon}
                    className="arr-controllers-img"
                    alt=""
                  />
                  <p>Next</p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="content-02 main-container">
            <div className="preview_container_xxd">
              <p>Story Title: </p>
            </div>
            {pageContent.map((page, index) => (
              <div key={index}>
                <PreviewStory pageDetails={page} />
              </div>
            ))}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

// These are the types of the props that are passed to the component
CreateStory.propTypes = {};

// These are their default values
CreateStory.defaultProps = {};

export default CreateStory;
