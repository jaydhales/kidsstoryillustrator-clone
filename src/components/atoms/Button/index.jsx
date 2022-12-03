import React from "react";

import PropTypes from "prop-types";

import "./Button.scss";

export const Button = ({
  children,
  styling = "default",
  type = "",
  clickFn = () => {},
  disabled,
}) => {
  // @styling  default : bg is #aa0136, noBg : bg is none
  return (
    <div className="Button">
      <button
        className={styling}
        disabled={disabled}
        type={type}
        onClick={clickFn}
      >
        {children}
      </button>
    </div>
  );
};

// These are the types of the props that are passed to the component

Button.propTypes = {
  children: PropTypes.any,
  type: PropTypes.string,
  styling: PropTypes.string,
  clickFn: PropTypes.func,
  disables: PropTypes.bool,
};

// These are their default values

Button.defaultProps = {};

export default Button;
