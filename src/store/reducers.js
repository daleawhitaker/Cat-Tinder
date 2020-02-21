import { combineReducers } from "redux";
import actionTypes from "./actionTypes";

const time = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.SET_TIME:
      return {
        ...state,
        remainingTime: action.remainingTime,
        maxTime: action.maxTime
      };
    case actionTypes.COUNT_DOWN:
      return {
        ...state,
        remainingTime: state.remainingTime - 1
      };
    default:
      return state;
  }
};

export const rootReducer = combineReducers({
  time
});
