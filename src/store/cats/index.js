import { createReducer } from "@reduxjs/toolkit";
import { pictureLoaded } from "./actions";

export default createReducer(
  {},
  {
    [pictureLoaded]: (state, action) => {
      state.currentImage = action.payload;
    }
  }
);
