import { createReducer } from "@reduxjs/toolkit";
import { setTime, countDown } from "./actions";
import { start } from "../game/actions";

export default createReducer(
  {},
  {
    [setTime]: (state, action) => {
      state.remaining = action.payload.remaining;
      state.max = action.payload.max;
    },
    [countDown]: (state, action) => {
      state.remaining = state.remaining - 1;
    },
    [start]: (state, action) => {
      state.remaining = action.payload.time;
      state.max = action.payload.time;
    }
  }
);
