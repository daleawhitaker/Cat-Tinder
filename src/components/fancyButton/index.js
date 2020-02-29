import React from "react";
import "./styles.css";

function FancyButton({ onClick, label, children }) {
  return (
    <button className="fancy-button" onClick={onClick} aria-label={label}>
      {children}
    </button>
  );
}

export default FancyButton;
