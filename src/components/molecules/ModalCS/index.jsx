import React, { useEffect, useState } from "react";

import "./Modal.scss";

import PropTypes from "prop-types";
import { Fade } from "react-awesome-reveal";

import greenCheck from "./small-img/green-check.svg";
import greenClose from "./small-img/green-close.svg";
import redCheck from "./small-img/red-check.svg";
import redClose from "./small-img/red-close.svg";

const ModalCS = ({ title, message, handleModDisplay, message_stat }) => {
  const [modal, setModal] = useState(true);

  useEffect(() => {
    if (modal) {
      document.getElementById("modalcs").classList.remove("modal-hidden");
      document.body.classList.add("active-modal");
    } else {
      document.body.classList.remove("active-modal");
      document.getElementById("modalcs").classList.add("modal-hidden");
    }
  }, []);

  const handleModal = (e) => {
    handleModDisplay();
    window.location.reload();
  };

  return (
    <div className="modalcs" id="modalcs">
      <div onClick={handleModal} className="overlay_4fd3">
        <Fade>
          {message_stat == "success" ? (
            <div className="modal-content modal-content-success-sty">
              <button className="close-modal" onClick={handleModal}>
                <img src={greenClose} alt="" />
              </button>
              <div className="mod-content-header">
                <img src={greenCheck} alt="" />
                <h2>{title}</h2>
              </div>
              <p className="message-text">{message}</p>
            </div>
          ) : (
            <div className="modal-content modal-content-error-sty">
              <button className="close-modal" onClick={handleModal}>
                <img src={redClose} alt="" />
              </button>
              <div className="mod-content-header">
                <img src={redCheck} alt="" />
                <h2>{title}</h2>
              </div>
              <p className="message-text">{message}</p>
            </div>
          )}
        </Fade>
      </div>
    </div>
  );
};

export default ModalCS;

ModalCS.propTypes = {
  title: PropTypes.string,
  message: PropTypes.string,
  handleModDisplay: PropTypes.func,
};
