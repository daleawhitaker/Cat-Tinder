import React from "react";
import { connect } from "react-redux";
import Menu from "../menu";
import Game from "../game";
import Results from "../results";

function Page({ timeRemaining, gameStarted }) {
  return (
    <>{timeRemaining > 0 ? <Game /> : gameStarted ? <Results /> : <Menu />}</>
  );
}

function mapStateToProps(state) {
  const {
    time: { remaining },
    game: { started }
  } = state;

  return {
    timeRemaining: remaining,
    gameStarted: started
  };
}

const actionCreators = {};

export default connect(mapStateToProps, actionCreators)(Page);
