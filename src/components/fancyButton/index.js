import React from "react";
import "./styles.css";

function FancyButton({ onClick, children }) {
  return (
    <button className="fancy-button" onClick={onClick}>
      {children}
    </button>
  );
}

export default FancyButton;
