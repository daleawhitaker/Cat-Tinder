import React from "react";
import "./styles.css";
import { connect } from "react-redux";
import { start } from "../../store/game/actions";

function Menu({ start }) {
  return (
    <div className="menu">
      <button onClick={() => start({ time: 10 })}>Start!</button>
    </div>
  );
}

const actionCreators = {
  start
};

export default connect(null, actionCreators)(Menu);
