import React, { useContext, useEffect, useState } from "react";
import "./CreateStory.scss";

import PropTypes from "prop-types";

import Button from "../../components/atoms/Button";

import Footer from "../../components/molecules/Footer";

import right_arrow from "../../assets/images/create-story/arrow-right.svg";
import placeholder_image from "../../assets/images/create-story/placeholder-Image.svg";
import placeholder_page_image from "../../assets/images/create-story/place_index_Image.svg";
import add_img from "../../assets/images/create-story/add.svg";
import previous_arr_icon from "../../assets/images/create-story/previous-next-arrow.svg";
import ImageCard from "./ImageCard/ImageCard";
import PreviewStory from "./PreviewStory";
import axios from "axios";

import loaderImg from "../../assets/images/create-story/Spinner-wait.gif";
import { Fade } from "react-awesome-reveal";
import ModalCS from "../../components/molecules/ModalCS";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";

const ImageCardList = ({ list_of_image_urls, returnImageLink }) => {
  const [generatedImages, setGeneratedImages] = useState(list_of_image_urls);

  return (
    <div className="image-card-list">
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

const CreateStory = () => {
  const { apiUrl, myAuth } = useContext(AuthContext);
  const initInput = {
    paragraph: "",
    keyword: "",
    image: "",
  };

  const [pageInput, setPageInput] = useState(initInput);
  const [storyTitle, setStoryTitle] = useState("");

  const [error, setError] = useState({});
  const [imageLoadingState, setImageLoadingState] = useState(false);
  const [imageLoadingCounter, setImageLoadingCounter] = useState("60");
  const [generatedImages, setGeneratedImages] = useState([]);
  const [showPageSaveState, setShowPageSaveState] = useState(false);
  const [previewState, setPreviewState] = useState(false);
  const [generateImagePrompt, setGenerateImagePrompt] = useState("");
  const [imageGenerationState, setImageGenerationState] = useState(false);
  const [modalState, setModalState] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [modalMessage, setModalMessage] = useState("");
  const [modalStat, setModalStat] = useState("");
  const [pageCount, setPageCount] = useState(1);
  const [pageContent, setPageContent] = useState([]);
  const [story, setStory] = useState([]);
  const [storyPosting, setStoryPosting] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    console.log(story);
  }, [story]);

  const handleGenerate = (e) => {
    e.preventDefault();

    if (pageInput.keyword.length === 0) {
      setError((error) => ({
        ...error,
        keyword: "*Enter keyword to help our AI generate precise illustrations",
      }));
    } else {
      getImagesFromServer();
    }
  };

  const handleSave = () => {
    setStoryPosting(true);
    setPageContent(
      story.map(({ content }) => {
        const { paragraph, image } = content;
        return {
          pageParagraphText: paragraph,
          pageImglinkUri: image,
        };
      })
    );

    const posData = {
      decoded: { _id: myAuth.id },
      title: storyTitle,
      numberOfPages: story.length,
      scenes: pageContent,
    };
    axios({
      method: "post",
      url: apiUrl + "story/post_story",
      data: posData,
    })
      .then((response) => {
        console.log(response);
        setStoryPosting(false);
        setModalDisplay("Success", "Story Saved Successfully", "success");
        setPreviewState(false);
        setStory([]);
        setStoryTitle("");
        setPageInput(initInput);
        setPageCount(1);
        // setTimeout(() => {
        //   navigate(0);
        // }, 2600);
      })
      .catch((err) => {
        console.error(err);
        setModalDisplay("Error", "Story not saved", "error");
      });
  };

  useEffect(() => {
    if (Object.entries(error).length === 0 && isSubmitting) {
      addPageToStory(pageInput, pageCount);
      setPageInput(initInput);
      setError({});
      setPageCount(pageCount + 1);
      setGeneratedImages([]);
      setIsSubmitting(false);
    }
  }, [error]);

  const handleNext = (e) => {
    e.preventDefault();
    let newError = {};

    if (storyTitle === "") {
      newError.title = "Enter Title";
    }
    if (pageInput.paragraph === "") {
      newError.paragraph = "Enter Paragraph";
    }
    if (pageInput.image === "") {
      newError.image = "Select an Image or Generate one";
    }

    setError(newError);
    setIsSubmitting(true);
  };

  const handleChange = (e) => {
    e.preventDefault();
    setIsSubmitting(false);
    setError({});

    switch (e.target.id) {
      case "title":
        setStoryTitle(e.target.value);
        break;

      case "paragraph":
        setPageInput({ ...pageInput, paragraph: e.target.value });
        break;

      case "keyword":
        setPageInput({ ...pageInput, keyword: e.target.value });
        break;

      default:
        break;
    }
  };

  const addPageToStory = (input, count) => {
    setStory([
      ...story,

      {
        page: count,
        content: input,
      },
    ]);
  };

  const getImagesFromServer = () => {
    setImageGenerationState(true);
    setPageInput((pageInput) => ({ ...pageInput, image: "" }));

    console.log("loading...");

    axios({
      method: "post",
      url: apiUrl + "api/get_images",
      data: {
        userPrompt: `${pageInput.keyword} , storybook illustration `,
      },
    })
      .then((response) => {
        console.log(response);
        if (
          typeof response.data == "string" &&
          response.data.toLowerCase().includes("error")
        ) {
          setModalDisplay("Error", "You are out of tokens", "error");
          setImageLoadingState(false);
          setImageGenerationState(false);
          setGeneratedImages([]);
          console.log("error...");
          return;
        }

        // console.log(response.data.links_array);

        setGeneratedImages(response.data.data);
        setImageLoadingState(false);
        setImageGenerationState(false);
      })
      .catch((err) => {
        console.error(err);
        setImageLoadingState(false);
        setImageGenerationState(false);
        setGeneratedImages([]);
      });
  };

  const getPageImageLink = (image_url) => {
    // console.log("This is the image link: " + image_url);
    setPageInput((pageInput) => ({ ...pageInput, image: image_url }));
    console.log(pageInput.image);
  };

  const setModalDisplay = (title, message, modalStat) => {
    setModalTitle(title);
    setModalMessage(message);
    setModalStat(modalStat);
    setModalState(!modalState);
  };

  return (
    <div className="CreateStory">
      {modalState && (
        <ModalCS
          title={modalTitle}
          message={modalMessage}
          handleModDisplay={setModalDisplay}
          message_stat={modalStat}
        />
      )}
      {previewState && story.length > 0 ? (
        <PreviewStory
          story={story}
          title={storyTitle}
          back={setPreviewState}
          handleSave={handleSave}
        />
      ) : (
        <div className="wrapper create">
          <div className="input-container">
            <div className="heading">
              <h2>New Story</h2>
              <p>Page {pageCount}</p>
            </div>
            <form>
              <label htmlFor="title">
                What is the title of your story?
                <input
                  type="text"
                  name="title"
                  id="title"
                  value={storyTitle}
                  onChange={handleChange}
                  placeholder="The Mermaid on Tea Island"
                />
                {error.title && <p className="input-error">{error.title}</p>}
              </label>

              <label htmlFor="paragraph">
                Write the first paragraph of your story here
                <textarea
                  name="paragraph"
                  id="paragraph"
                  value={pageInput.paragraph}
                  onChange={handleChange}
                  placeholder="In Tea island lives a beautiful mermaid named Adella. Adella’s eyes are blue. Her hair is so long that it reaches to her waist."
                />
                {error.paragraph && (
                  <p className="input-error">{error.paragraph}</p>
                )}
              </label>

              <label htmlFor="keyword">
                Enter keywords to generate Illustratons
                <input
                  type="text"
                  name="keyword"
                  id="keyword"
                  value={pageInput.keyword}
                  onChange={handleChange}
                  placeholder="Mermaid with long hair and blue eyes on an Island"
                />
                {error.keyword && (
                  <p className="input-error">{error.keyword}</p>
                )}
              </label>

              <div className="form-action">
                <Button
                  clickFn={handleGenerate}
                  disabled={imageGenerationState}
                >
                  Generate Illustration
                </Button>
                <Button styling="noBg" clickFn={handleNext}>
                  Next Page
                </Button>
              </div>
            </form>
          </div>
          <div className="image-container">
            <div className="heading">
              <h2>{storyTitle || "Story Title"}</h2>
              <Button
                styling="noBg"
                disabled={story.length === 0}
                clickFn={() => setPreviewState(!previewState)}
              >
                Preview Story
              </Button>
            </div>

            {error.image && <p className="input-error img">{error.image}</p>}

            {imageGenerationState ? (
              <div className="loading">
                <img src={loaderImg} alt="" />
              </div>
            ) : (
              generatedImages.length > 0 && (
                <Fade cascade damping={0.1}>
                  <ImageCardList
                    list_of_image_urls={generatedImages}
                    returnImageLink={getPageImageLink}
                  />
                </Fade>
              )
            )}
          </div>
        </div>
      )}
    </div>
  );
};

// export const CreateStory = () => {
//   const navigate = useNavigate();

//   const [imageLoadingState, setImageLoadingState] = useState(false);
//   const [imageLoadingCounter,setImageLoadingCounter ] = useState('60');
//   const [generatedImages, setGeneratedImages] = useState([]);
//   const [storyTitle, setStoryTitle] = useState('');
//   const [pageContent, setPageContent] = useState([]);
//   const [pageParagraph, setPageParagraph] = useState("");
//   const [pageImgLink, setPageImgLink] = useState("");
//   const [showPageSaveState, setShowPageSaveState] = useState(false);
//   const [previewState, setPreviewState] = useState(false);
//   const [generateImagePrompt, setGenerateImagePrompt] = useState('');
//   const [imageGenerationState, setImageGenerationState] = useState(false);
//   const [modalState, setModalState] = useState(false);
//   const [modalTitle, setModalTitle] = useState('');
//   const [modalMessage, setModalMessage] = useState('');
//   const [modalStat, setModalStat] = useState('');
//   const [storyPosting, setStoryPosting] = useState(false);

//   const getImagesFromServer = async () => {
//     setImageGenerationState(true);

//     axios({
//       method: "post",
//       url: "https://web-production-c992.up.railway.app/api/get_images",
//       data: {
//         userPrompt: generateImagePrompt,
//       },
//     }).then((response) => {
//       console.log(response);
//       if (typeof response.data == 'string' && response.data.toLowerCase().includes('error')) {
//         setModalDisplay('Error', 'You are out of tokens', 'error');
//         setImageLoadingState(false);
//         setImageGenerationState(false);
//         setGeneratedImages([]);
//         return
//       }
//       console.log(response.data.links_array);
//       setImageLoadingState(false);
//       let new_Arry = [];
//       for (let i = 0; i < 9; i++) {
//         new_Arry.push(response.data.links_array[i]);
//       }
//       setGeneratedImages(new_Arry);
//     }).catch(err => {
//       console.error(err);
//     });
//     setImageGenerationState(false);
//   };

//   const setImageLoadingFunc = () => {
//     if (generatedImages.length != 0) {
//       let prompt_response = prompt(
//         "Are you sure you want to create a new search? Yes or No"
//       ).toLowerCase();
//       if (prompt_response.length >= 2 && prompt_response != null) {
//         if (prompt_response == "yes") {
//           setGeneratedImages([]);
//           setPageParagraph("");
//           setPageImgLink("");
//         } else if (prompt_response == "no") {
//           setModalDisplay('Error', 'Re-search cancelled');
//         } else {
//           setModalDisplay('Error', 'Please enter a valid response', 'error');
//         }
//       }
//     }

//     if (generateImagePrompt.length < 2) {
//       setModalDisplay('Error', 'Please enter a valid text', 'error');
//     } else {
//       setImageLoadingState(true);
//       getImagesFromServer();

//       let time_count = 60;

//       let this_time_counter = setInterval(() => {
//         time_count -= 1;
//         setImageLoadingCounter(time_count.toString());

//         if (time_count == 0) {
//           clearInterval(this_time_counter);
//         }
//       }, 1000);
//     }
//   };

//   const getPageImageLink = (image_url) => {
//     console.log("This is the image link: " + image_url);
//     setPageImgLink(image_url);
//   };

//   const save_story_1 = () => {
//     console.log("Function Clicked");

//     if (pageImgLink.length < 2) {
//       console.log("No link available");
//       console.log("Story Not Saved");
//       setModalDisplay('Error', 'No link Available. Story not saved', 'error')

//       return;
//     } else if (pageParagraph.length < 2) {
//       console.log("No Text available");
//       console.log("Story Not Saved");
//       setModalDisplay('Error', 'No Message Available. Story not saved', 'error')
//       return;
//     } else {
//       //
//     }
//     let currentPageContent = {
//       paragraph: pageParagraph,
//       imageLink: pageImgLink,
//     };

//     return currentPageContent;
//   };

//   const AddedToPageList = () => {
//     const generatedPageContent = save_story_1();
//     console.log(generatedPageContent);

//     let bject = [
//       ...pageContent,
//       {
//         pageParagraphText: pageParagraph,
//         pageImglinkUri: pageImgLink,
//       }
//     ];

//     if (generatedPageContent != undefined) {
//       setPageContent(bject);

//       setShowPageSaveState(true);
//       setModalDisplay('Success', 'Page was added', 'success');
//       setGeneratedImages([]);

//       setPageParagraph("");
//       setPageImgLink("");

//       setTimeout(() => {
//         setShowPageSaveState(false);
//       }, 2000);
//     } else {
//       setModalDisplay('Error', 'Page not added', 'error')
//       console.log("Really can't work");
//     }
//   };

//   const handleDeletePage = (pageIndex) => {
//     setPageContent(pageContent.splice(pageIndex, 1));
//   };

//   // const getToCurrentPage = ({ pageIndex }) => {
//   //   console.log("function Clicked");
//   //   const currentPage = pageContent;
//   // };

//   const setModalDisplay = (title, message, modalStat) => {
//     setModalTitle(title);
//     setModalMessage(message);
//     setModalStat(modalStat);
//     setModalState(!modalState);
//   }

//   const PostStory = () => {
//     setStoryPosting(true);
//     const posData = {
//       decoded: { _id: "63836095dcec0b9a8d523767" },
//       title: storyTitle,
//       numberOfPages: pageContent.length,
//       scenes: pageContent,
//     };

//     axios({
//       method: "post",
//       url: "https://web-production-c992.up.railway.app/story/post_story",
//       data: posData
//     }).then((response) => {
//       console.log(response);
//       setStoryPosting(false);
//       setModalDisplay('Success', 'Story Saved Successfully', 'success');
//       setTimeout(() => {
//         navigate(0);
//       }, 2600)
//     }).catch((err) => {
//       console.error(err);
//       setModalDisplay('Error', 'Story not saved', 'error');
//     });
//   }

//   const PostStoryVal = () => {
//     let checker = true

//     if (pageContent.length < 2) {
//       setModalDisplay('Error', 'Please create min 2 pages to Save a Story', 'error');
//       checker = false
//     } else if (storyTitle.length < 4) {
//       setModalDisplay('Error', 'Please enter a Valid Story Title', 'error');
//       checker = false
//     }

//     if (checker) {
//       console.log('Success');
//       PostStory();
//     } else {
//       console.log('Error');
//     }
//   }

//   return (
//     <div className="create-story-wrapper">
//       {modalState ? (
//         <ModalCS
//           title={modalTitle}
//           message={modalMessage}
//           handleModDisplay={setModalDisplay}
//           message_stat={modalStat}
//         />
//       ) : null}
//       <div className="cs-sub-container">
//         <div className="content-01 top-container">
//           <div className="arr-img-cont" onClick={() => navigate("/")}>
//             <img src={right_arrow} alt="" />
//           </div>
//           <div className="btn-container-01">
//             {previewState ? (
//               <button className="btn-01" onClick={() => setPreviewState(false)}>
//                 Edit Story
//               </button>
//             ) : (
//               <button className="btn-01" onClick={() => setPreviewState(true)}>
//                 Preview Story
//               </button>
//             )}
//             {storyPosting ? (
//               <button className="btn-02" disabled style={{ opacity: '.6' }}>
//                 Save story
//               </button>
//             ) : (
//               <button className="btn-02" onClick={PostStoryVal}>
//                 Save story
//               </button>
//             )}
//           </div>
//         </div>
//         {!previewState ? (
//           <div className="content-02 main-container">
//             <div className="story-content-01">
//               <h3>Story Title</h3>
//               <div>
//                 <input
//                   type="text"
//                   name="story_name"
//                   id="story_name"
//                   value={storyTitle}
//                   onChange={(e) => setStoryTitle(e.target.value)}
//                   placeholder="Give your story a title"
//                 />
//               </div>
//             </div>
//             <div className="story-content-02">
//               <div className="s-c-02-sub-container-01 text-context">
//                 <div className="text-tabs-container">
//                   <div className="text-context-tabs">
//                     <p>Passage of story</p>
//                     <div>
//                       <textarea
//                         type="text"
//                         value={pageParagraph}
//                         onChange={(e) => setPageParagraph(e.target.value)}
//                         placeholder="Ade is doing is assginment in his room"
//                       />
//                     </div>
//                   </div>
//                   <div className="text-context-tabs">
//                     <p>Describe illustration</p>
//                     <div>
//                       <textarea
//                         type="text"
//                         value={generateImagePrompt}
//                         onChange={(e) => setGenerateImagePrompt(e.target.value)}
//                         placeholder="Boy In A Room Doing Assignment"
//                       />
//                     </div>
//                   </div>
//                   <div className="text-context-tabs gen-button-container">
//                     {imageGenerationState ? (
//                       <button
//                         style={{ opacity: ".6" }}
//                         className="gen_button_02"
//                         disabled
//                       >
//                         Loading
//                       </button>
//                     ) : (
//                       <button
//                         className="gen_button_01"
//                         onClick={setImageLoadingFunc}
//                       >
//                         Generate
//                       </button>
//                     )}
//                   </div>
//                   <div className="text-context-tabs gen-button-container">
//                     <button className="gen_button_01" onClick={AddedToPageList}>
//                       Save Page
//                     </button>
//                   </div>
//                   {showPageSaveState ? <p>Saved</p> : null}
//                 </div>
//               </div>
//               {generatedImages.length < 2 ? (
//                 <div className="s-c-02-sub-container-02 image-context">
//                   {imageLoadingState ? (
//                     <div className="image_thumb_43f_content_cont">
//                       <div className="loader_container_xde34">
//                         <h3>{imageLoadingCounter}</h3>
//                         <img src={loaader_img} alt="" />
//                         <p>Please wait while the image loads...</p>
//                       </div>
//                     </div>
//                   ) : (
//                     <div>
//                       <img src={placeholder_image} alt="" />
//                     </div>
//                   )}
//                 </div>
//               ) : (
//                 <div className="s-c-02-sub-container-02 image-context-alt">
//                   <Fade cascade damping={0.1}>
//                     <ImageCardList
//                       list_of_image_urls={generatedImages}
//                       returnImageLink={getPageImageLink}
//                     />
//                   </Fade>
//                 </div>
//               )}
//             </div>
//             <div className="pages-index-container">
//               <div className="p-i-c-01">
//                 <p className="p-i-c-01-pages">Pages</p>
//                 <p className="p-i-c-01-new_page">
//                   <img src={add_img} alt="" /> New page
//                 </p>
//               </div>
//               <div className="p-i-c-02">
//                 <div className="arr-controllers prev-page">
//                   <img
//                     src={previous_arr_icon}
//                     className="arr-controllers-img"
//                     alt=""
//                   />
//                   <p>Previous</p>
//                 </div>
//                 {pageContent.length > 0 ? (
//                   pageContent.map((SinglePage, index) => (
//                     <div key={index} className="page-placeholder-container">
//                       <div
//                         style={{
//                           overflow: "hidden",
//                           width: "30px",
//                           height: "30px",
//                           border: "transparent",
//                         }}
//                       >
//                         <img
//                           src={
//                             SinglePage.pageImglinkUri
//                               ? SinglePage.pageImglinkUri
//                               : placeholder_page_image
//                           }
//                           alt=""
//                           style={{ width: "30px", cursor: "pointer" }}
//                           // onClick={() => getToCurrentPage(index)}
//                         />
//                       </div>
//                       <p>{index + 1}</p>
//                     </div>
//                   ))
//                 ) : (
//                   <div className="page-placeholder-container">
//                     <img src={placeholder_page_image} alt="" />
//                     <p>0</p>
//                   </div>
//                 )}
//                 <div className="arr-controllers nxt-page">
//                   <img
//                     src={previous_arr_icon}
//                     className="arr-controllers-img"
//                     alt=""
//                   />
//                   <p>Next</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ) : (
//           <div className="content-02 main-container">
//             <div className="preview_container_xxd">
//               <p className="previewtitle_s45e">
//                 Story Title: <span>{storyTitle}</span>
//               </p>
//             </div>
//             {pageContent.map((page, index) => (
//               <div key={index}>
//                 <PreviewStory pageDetails={page} />
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//       <Footer />
//     </div>
//   );
// };

// These are the types of the props that are passed to the component
CreateStory.propTypes = {};

// These are their default values
CreateStory.defaultProps = {};

export default CreateStory;
