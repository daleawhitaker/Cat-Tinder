import React from "react";
import Timer from "../timer";
import FancyButton from "../fancyButton";
import { like, dislike, skip } from "../../store/game/actions";
import { newPicture } from "../../store/cats/actions";
import { connect } from "react-redux";
import CatPicture from "../catPicture";
import "./styles.css";

function Game({ pictureLoaded, like, dislike, skip, newPicture }) {
  return (
    <div className="game">
      <Timer />
      <CatPicture />
      <div className="controls">
        <FancyButton
          label={"Like"}
          disabled={!pictureLoaded}
          onClick={() => {
            like();
            newPicture();
          }}
        >
          <span aria-hidden="true">👍</span> Like
        </FancyButton>
        <FancyButton
          label={"Skip"}
          disabled={!pictureLoaded}
          onClick={() => {
            skip();
            newPicture();
          }}
        >
          <span aria-hidden="true">➡</span> Skip
        </FancyButton>
        <FancyButton
          label={"Dislike"}
          disabled={!pictureLoaded}
          onClick={() => {
            dislike();
            newPicture();
          }}
        >
          <span aria-hidden="true">👎</span> Dislike
        </FancyButton>
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  const { pictureLoaded } = state.cats;
  return {
    pictureLoaded
  };
}

const actionCreators = {
  like,
  dislike,
  skip,
  newPicture
};

export default connect(mapStateToProps, actionCreators)(Game);
