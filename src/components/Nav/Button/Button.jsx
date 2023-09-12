import React from "react";
import "./Button.css";

const STYLES = ["btn-primaryh", "btn-outlineh"];

const SIZES = ["btn-mediumh", "btn-largeh"];

const Button = ({ children, type, onClick, buttonStyle, buttonSize }) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  return (
    <button
      className={`btnh ${checkButtonStyle} ${checkButtonSize}`}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
