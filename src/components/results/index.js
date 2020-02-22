import React from "react";
import { connect } from "react-redux";
import { start } from "../../store/game/actions";
import { setTime } from "../../store/time/actions";
import { newPicture } from "../../store/cats/actions";
import FancyButton from "../fancyButton";

function Results({ likes, dislikes, skips, time, start, setTime, newPicture }) {
  return (
    <div className="results">
      <span>
        You liked {likes} cat(s), disliked {dislikes} cat(s) and skipped {skips}{" "}
        time(s)
      </span>
      <input
        type="number"
        defaultValue={time}
        onChange={event => {
          setTime(+event.target.value);
        }}
      />
      <FancyButton
        onClick={() => {
          start();
          newPicture();
        }}
      >
        Play again?
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
  setTime,
  newPicture
};

export default connect(mapStateToProps, actionCreators)(Results);
