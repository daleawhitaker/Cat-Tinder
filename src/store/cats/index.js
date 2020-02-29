import { createReducer } from "@reduxjs/toolkit";
import { urlLoaded, pictureLoaded, pictureUnloaded } from "./actions";

export default createReducer(
  {},
  {
    [pictureUnloaded]: (state, action) => {
      state.pictureLoaded = false;
    },
    [pictureLoaded]: (state, action) => {
      state.pictureLoaded = true;
    },
    [urlLoaded]: (state, action) => {
      state.currentImage = action.payload;
    }
  }
);
