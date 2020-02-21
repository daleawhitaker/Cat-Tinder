import React from "react";
import "./styles.css";
import { connect } from "react-redux";

function Timer({ timeRemaining, maxTime }) {
  let timeFraction = timeRemaining / maxTime;

  return (
    <div className="timer">
      <span className="timer-text">{timeRemaining}</span>
      <div
        className="timer-progress"
        style={{
          width: `${timeFraction * 100}%`
        }}
      />
    </div>
  );
}

function mapStateToProps(state) {
  const { timeRemaining, maxTime } = state.time;

  return {
    timeRemaining,
    maxTime
  };
}

export default connect(mapStateToProps)(Timer);
