import React from "react";
import Timer from "../timer";
import FancyButton from "../fancyButton";
import { like, dislike, skip } from "../../store/game/actions";
import { newPicture } from "../../store/cats/actions";
import { connect } from "react-redux";
import CatPicture from "../catPicture";
import "./styles.css";

function Game({ like, dislike, skip, newPicture }) {
  return (
    <div className="game">
      <Timer />
      <CatPicture />
      <div className="controls">
        <FancyButton
          onClick={() => {
            like();
            newPicture();
          }}
        >
          👍
        </FancyButton>
        <FancyButton
          onClick={() => {
            skip();
            newPicture();
          }}
        >
          ➡
        </FancyButton>
        <FancyButton
          onClick={() => {
            dislike();
            newPicture();
          }}
        >
          👎
        </FancyButton>
      </div>
    </div>
  );
}

const actionCreators = {
  like,
  dislike,
  skip,
  newPicture
};

export default connect(null, actionCreators)(Game);
