import { createAction } from "@reduxjs/toolkit";
import actionTypes from "./actionTypes";

const setTime = createAction(actionTypes.setTime);
const countDown = createAction(actionTypes.countDown);

export { setTime, countDown };
