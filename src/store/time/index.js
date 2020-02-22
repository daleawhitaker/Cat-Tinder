import { createReducer } from "@reduxjs/toolkit";
import { setTime, countDown } from "./actions";
import { start } from "../game/actions";

export default createReducer(
  {},
  {
    [setTime]: (state, action) => {
      if (!isNaN(action.payload.time)) {
        state.max = +action.payload.time;
      }
    },
    [countDown]: (state, action) => {
      state.remaining = state.remaining - 1;
    },
    [start]: (state, action) => {
      state.remaining = state.max;
    }
  }
);
