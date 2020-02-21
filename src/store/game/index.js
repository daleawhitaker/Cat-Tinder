import { createReducer } from "@reduxjs/toolkit";
import { start, like, dislike, skip } from "./actions";

export default createReducer(
  {},
  {
    [start]: (state, action) => {
      state.gameStarted = true;
      state.results = {
        likes: 0,
        dislikes: 0,
        skips: 0
      };
    }
  }
);
