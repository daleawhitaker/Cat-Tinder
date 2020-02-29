import React from "react";
import { connect } from "react-redux";
import { setTime } from "../../store/time/actions";
import "./styles.css";

function TimeInput({ time, setTime }) {
  return (
    <label>
      Length of game (seconds):&nbsp;
      <input
        className="time-input"
        type="number"
        defaultValue={time}
        min={0}
        step={1}
        onChange={event => {
          setTime(+event.target.value);
        }}
      />
    </label>
  );
}

function mapStateToProps(state) {
  const { max } = state.time;
  return {
    time: max
  };
}

const actionCreators = {
  setTime
};

export default connect(mapStateToProps, actionCreators)(TimeInput);
