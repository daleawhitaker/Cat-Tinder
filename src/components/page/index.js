import React from "react";
import { connect } from "react-redux";
import Menu from "../menu";
import Game from "../game";
import Results from "../results";

function Page({ timeRemaining, gameStarted }) {
  return <>{timeRemaining ? <Game /> : gameStarted ? <Results /> : <Menu />}</>;
}

function mapStateToProps(state) {
  const {
    time: { remaining }
  } = state;

  return {
    timeRemaining: remaining,
    gameStarted: false
  };
}

const actionCreators = {};

export default connect(mapStateToProps, actionCreators)(Page);
