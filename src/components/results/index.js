import React from "react";
import { connect } from "react-redux";
import { start } from "../../store/game/actions";
import { newPicture } from "../../store/cats/actions";
import FancyButton from "../fancyButton";
import TimeInput from "../timeInput";
import "./styles.css";

function Results({ likes, dislikes, skips, time, start, newPicture }) {
  newPicture();
  return (
    <div className="results">
      <span>
        You liked {likes} cat(s), disliked {dislikes} cat(s) and skipped {skips}{" "}
        time(s)
      </span>
      <br />
      <span>
        I would like to play for <TimeInput /> seconds
      </span>
      <br />
      <FancyButton
        label={"Like"}
        disabled={time <= 0 || !Number.isInteger(+time)}
        onClick={() => {
          start();
        }}
      >
        Play again!
      </FancyButton>
    </div>
  );
}

function mapStateToProps(state) {
  const {
    game: {
      results: { likes, dislikes, skips }
    },
    time: { max }
  } = state;

  return {
    likes,
    dislikes,
    skips,
    time: max
  };
}

const actionCreators = {
  start,
  newPicture
};

export default connect(mapStateToProps, actionCreators)(Results);
