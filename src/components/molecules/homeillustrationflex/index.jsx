import "./illustration.scss";


import lustrate1 from "./images/lustrate1.png";
import lustrate2 from "./images/lustrate2.png";
import lustrate3 from "./images/lustrate3.png";
import lustrate4 from "./images/lustrate4.png";
import illustration from "./images/illustration.png";

const Illustration = () => {
  return (
    <div className="Illustration_flex_wrapper">
      <h3 className="illustration_text_header">
        Why You’ll Love Using <span className="illustration_span">magicbookwriter</span>
      </h3>

      <div className="illustrastion_flex_wrapper">
        <div className="illustration_first_column">
        <div className="fast_scalable_wrapper">
          <div className="fast_scalable_header">
            <img src={lustrate1} alt="lustrate" />
            <p className="illustration_header">Fast & Sustainable</p>
          </div>
          <div className="illustration_text">
            Magicbookwriter provides the fastest way to generate animated
            pictorial depictions from written stories. It also allows you to
            download and save your animated stories for later.
          </div>
        </div>

        <div className="fast_scalable_wrapper">
          <div className="fast_scalable_header">
            <img src={lustrate3} alt="lustrate" />
            <p className="illustration_header">Easy to Use</p>
          </div>
          <div className="illustration_text">
            You do not need to be a graphics designer or a highly skilled
            illustrator. With story.ai, you can generate animated story books
            for children in less than 5 minutes.
          </div>
        </div>
        </div>
        <div className="illustration_img_wrap">
            <img src={illustration} alt="girlillustration" />

        </div>

        <div className="illustration_first_column">
          <div className="fast_scalable_wrapper">
            <div className="fast_scalable_header">
              <img src={lustrate2} alt="lustrate" />
              <p className="illustration_header">Automation</p>
            </div>
            <div className="illustration_text">
              Magicbookwriter uses artificial intelligence to generate animated
              story images from 1000s of keywords. So you don’t have to worry
              about a detailed description of your stories.
            </div>
          </div>

          <div className="fast_scalable_wrapper">
            <div className="fast_scalable_header">
              <img src={lustrate4} alt="lustrate" />
              <p className="illustration_header">Enjoy Story Creation</p>
            </div>
            <div className="illustration_text">
              Have fun creating, sharing and reading stories by other story
              creators and learn new tips, get latest animation updates on
              story.ai as well as network with other story creators.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Illustration;
