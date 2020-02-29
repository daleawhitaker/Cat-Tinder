import actionTypes from "./actionTypes";
import { createAction } from "@reduxjs/toolkit";
import { getNewCatPicture } from "../../util/cats";

const urlLoaded = createAction(actionTypes.urlLoaded);
const pictureLoaded = createAction(actionTypes.pictureLoaded);
const pictureUnloaded = createAction(actionTypes.pictureUnloaded);

function newPicture() {
  return async dispatch => {
    dispatch(pictureUnloaded());
    let url = await getNewCatPicture();
    dispatch(urlLoaded(url));
  };
}

export { newPicture, pictureLoaded, pictureUnloaded, urlLoaded };
