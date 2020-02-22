import actionTypes from "./actionTypes";
import { createAction } from "@reduxjs/toolkit";
import { getNewCatPicture } from "../../util/cats";

function newPicture() {
  return async dispatch => {
    let url = await getNewCatPicture();
    dispatch(pictureLoaded(url));
  };
}

const pictureLoaded = createAction(actionTypes.pictureLoaded);

export { newPicture, pictureLoaded };
