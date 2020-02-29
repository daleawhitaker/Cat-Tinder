import React from "react";
import "./styles.css";
import { connect } from "react-redux";
import { start } from "../../store/game/actions";
import { newPicture } from "../../store/cats/actions";
import { setTime } from "../../store/time/actions";
import FancyButton from "../fancyButton";

function Menu({ start, newPicture, setTime, time }) {
  return (
    <div className="menu">
      <input
        type="number"
        defaultValue={time}
        onChange={event => {
          setTime(+event.target.value);
        }}
      />
      <FancyButton
        label={"Start"}
        onClick={() => {
          start();
          newPicture();
        }}
      >
        Start!
      </FancyButton>
    </div>
  );
}

const actionCreators = {
  start,
  newPicture,
  setTime
};

function bindStateToProps(state) {
  const { max } = state.time;
  return {
    time: max
  };
}

export default connect(bindStateToProps, actionCreators)(Menu);
