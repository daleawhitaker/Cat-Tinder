import React from "react";
import { connect } from "react-redux";
import { pictureLoaded } from "../../store/cats/actions";
import "./style.css";

function CatPicture({ pictureLoaded, currentImage }) {
  return (
    <div className="cat-picture">
      <img alt="A cat" onLoad={() => pictureLoaded()} src={currentImage} />
    </div>
  );
}

const actionCreators = {
  pictureLoaded
};

function mapStateToProps(state) {
  const {
    cats: { currentImage }
  } = state;
  return { currentImage };
}

export default connect(mapStateToProps, actionCreators)(CatPicture);
