import React from "react";
import "./styles.css";
import { connect } from "react-redux";
import { countDown } from "../../store/time/actions";

function Timer({ timeRemaining, timeMax, countDown }) {
  let barFillAmount;

  if (timeRemaining > 0) {
    //
    window.setTimeout(countDown, 1000);

    // We subtract 1 from the time remaining and max time to ensure
    // that the bar fully empties when the timer hits 0.
    // This is required as CSS transitions move towards the new CSS value, not away.
    barFillAmount = (timeRemaining - 1) / (timeMax - 1) + 1;
  } else {
    barFillAmount = 0;
  }

  return (
    <div className="timer">
      <span className="timer-text">{timeRemaining}</span>
      <svg viewBox="0 0 4 4" aria-hidden="true">
        <circle
          role="presentation"
          alt=""
          className="timer-background"
          r="2"
          cx="2"
          cy="2"
          pathLength="1"
        />
        <circle
          role="presentation"
          alt=""
          className="timer-progress"
          r="1"
          cx="2"
          cy="2"
          pathLength="1"
          style={{
            strokeDashoffset: barFillAmount
          }}
        />
      </svg>
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
