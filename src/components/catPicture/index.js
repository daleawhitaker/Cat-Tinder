import React from "react";
import { connect } from "react-redux";

function CatPicture({ currentImage }) {
  return <img src={currentImage} />;
}

function mapStateToProps(state) {
  const {
    cats: { currentImage }
  } = state;
  return { currentImage };
}

export default connect(mapStateToProps)(CatPicture);
