import { createAction } from "@reduxjs/toolkit";
import actionTypes from "./actionTypes";

const start = createAction(actionTypes.start);
const like = createAction(actionTypes.like);
const dislike = createAction(actionTypes.dislike);
const skip = createAction(actionTypes.skip);

export { start, like, dislike, skip };
