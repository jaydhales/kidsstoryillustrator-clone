import React, { useCallback, useEffect, useState } from "react";
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

const ImageCardList = ({ list_of_image_urls, returnImageLink }) => {
  const [generatedImages, setGeneratedImages] = useState(list_of_image_urls);

  return (
    <div className="imagecard_list_container">
      {generatedImages.map((image, index) => (
        <ImageCard
          image_url={image}
          key={index.toString()}
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
  const [imageLoadingState, setImageLoadingState] = useState([]);

  const array_of_images = [
    "https://i.pinimg.com/564x/7a/bc/1c/7abc1c5f9c8e10862dc8c0e906f50378.jpg",
    "https://i.pinimg.com/564x/30/79/b9/3079b92407584ec0ea92bb6ec39a5879.jpg",
    "https://i.pinimg.com/236x/ea/14/91/ea1491e09397ae136a18c646a08717f1.jpg",
    "https://i.pinimg.com/564x/06/51/bc/0651bc3e6b04a24c50b2dce52c5732fe.jpg",
    "https://i.pinimg.com/564x/03/23/f1/0323f1c65032f8807d6e0adc26f35dae.jpg",
    "https://i.pinimg.com/236x/72/e7/4d/72e74d029193196deb05a14a7ea37d3e.jpg",
    "https://i.pinimg.com/564x/9e/5d/65/9e5d65afb7a2c44d35746b6bfb11bf27.jpg",
    "https://i.pinimg.com/564x/3d/84/65/3d84657b1f290102bfc17a017e306624.jpg",
    "https://i.pinimg.com/236x/12/c8/5b/12c85b70fb9553e7cba731529399f1a9.jpg",
  ];

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
    if (generateImagePrompt.length < 2) {
      alert('Please enter a valid text');
    } else {
      setImageGenerationState(true);

      axios({
        method: 'post',
        url: 'https://story--ai.herokuapp.com/api/get_images',
        data: {
          userPrompt: generateImagePrompt
        }
      }).then((response) => {
        console.log(response.data.links_array);
        setGeneratedImages(response.data.links_array);
      })
    }
  }

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
                      <button className="gen_button_02" disabled onClick={getImagesFromServer}>Loading</button>
                    ) : (
                      <button className="gen_button_01" onClick={getImagesFromServer}>Generate</button>
                    )}
                  </div>
                  <div className="text-context-tabs gen-button-container">
                    <button className='gen_button_01' onClick={AddedToPageList}>Save Page</button>
                  </div>
                  {showPageSaveState ? <p>Saved</p> : null}
                </div>
              </div>
              {generatedImages.length < 2 ? (
                <div className="s-c-02-sub-container-02 image-context">
                  <div>
                    <img src={placeholder_image} alt="" />
                  </div>
                </div>
              ) : (
                <div className="s-c-02-sub-container-02 image-context-alt">
                  <ImageCardList
                    list_of_image_urls={generatedImages}
                    returnImageLink={getPageImageLink}
                  />
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
