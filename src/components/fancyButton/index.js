import React from "react";
import "./styles.css";

function FancyButton({ onClick, label, disabled, children }) {
  return (
    <button
      className="fancy-button"
      onClick={onClick}
      aria-label={label}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default FancyButton;
