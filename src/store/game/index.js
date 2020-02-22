import { createReducer } from "@reduxjs/toolkit";
import { start, like, dislike, skip } from "./actions";

export default createReducer(
  {},
  {
    [start]: (state, action) => {
      state.started = true;
      state.results = {
        likes: 0,
        dislikes: 0,
        skips: 0
      };
    },
    [like]: (state, action) => {
      state.results.likes += 1;
    },
    [dislike]: (state, action) => {
      state.results.dislikes += 1;
    },
    [skip]: (state, action) => {
      state.results.skips += 1;
    }
  }
);
