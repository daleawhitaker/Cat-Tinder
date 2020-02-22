import { createAction } from "@reduxjs/toolkit";
import actionTypes from "./actionTypes";

const setTime = createAction(actionTypes.setTime, (time, getState) => {
  return { payload: { time } };
});
const countDown = createAction(actionTypes.countDown);

export { setTime, countDown };
