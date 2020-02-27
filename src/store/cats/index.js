import { createReducer } from "@reduxjs/toolkit";
import { pictureLoaded } from "./actions";
import { start } from "../game/actions";

export default createReducer(
  {},
  {
    [start]: (state, action) => {
      state.currentImage = "";
    },
    [pictureLoaded]: (state, action) => {
      state.currentImage = action.payload;
    }
  }
);
