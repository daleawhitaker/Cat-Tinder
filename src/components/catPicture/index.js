import React from "react";
import { connect } from "react-redux";
import "./style.css";

function CatPicture({ currentImage }) {
  return (
    <div className="cat-picture">
      <img src={currentImage} />
    </div>
  );
}

function mapStateToProps(state) {
  const {
    cats: { currentImage }
  } = state;
  return { currentImage };
}

export default connect(mapStateToProps)(CatPicture);
