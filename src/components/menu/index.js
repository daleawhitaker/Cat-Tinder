import React from "react";
import { connect } from "react-redux";
import { start } from "../../store/game/actions";
import { newPicture } from "../../store/cats/actions";
import TimeInput from "../timeInput";
import FancyButton from "../fancyButton";
import Logo from "../logo";
import "./styles.css";

function Menu({ start, newPicture, time }) {
  newPicture();
  return (
    <div className="menu">
      <Logo />
      <br />
      <TimeInput />
      <br />
      <FancyButton
        label={"Start"}
        disabled={time <= 0 || !Number.isInteger(+time)}
        onClick={() => {
          start();
        }}
      >
        Start!
      </FancyButton>
    </div>
  );
}

function mapStateToProps(state) {
  const { max } = state.time;
  return {
    time: max
  };
}

const actionCreators = {
  start,
  newPicture
};

export default connect(mapStateToProps, actionCreators)(Menu);
