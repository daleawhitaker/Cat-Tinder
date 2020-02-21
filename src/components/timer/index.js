import React from "react";
import "./styles.css";
import { connect } from "react-redux";
import { countDown } from "../../store/time/actions";

function Timer({ timeRemaining, timeMax, countDown }) {
  let timePercentage = (timeRemaining / timeMax) * 100;

  if (timeRemaining > 0) {
    window.setTimeout(countDown, 1000);
  }

  return (
    <div className="timer">
      <span className="timer-text">{timeRemaining}</span>
      <div
        className="timer-progress"
        style={{
          width: `${timePercentage}%`
        }}
      />
    </div>
  );
}

function mapStateToProps(state) {
  const { remaining, max } = state.time;

  return {
    timeRemaining: remaining,
    timeMax: max
  };
}

const actionCreators = {
  countDown
};

export default connect(mapStateToProps, actionCreators)(Timer);
