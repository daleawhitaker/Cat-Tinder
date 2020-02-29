import React from "react";
import { connect } from "react-redux";
import { start } from "../../store/game/actions";
import { newPicture } from "../../store/cats/actions";
import FancyButton from "../fancyButton";
import TimeInput from "../timeInput";
import Logo from "../logo";
import "./styles.css";

function Results({ likes, dislikes, skips, time, start, newPicture }) {
  newPicture();
  return (
    <div className="results">
      <Logo />
      <span>
        You liked <em>{likes}</em> cat(s), disliked <em>{dislikes}</em> cat(s)
        and skipped <em>{skips}</em> time(s)
      </span>
      <br />
      <TimeInput />
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
