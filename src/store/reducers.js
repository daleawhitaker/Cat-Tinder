import { combineReducers } from "redux";
import actionTypes from "./actionTypes";

const time = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.SET_TIME:
      return {
        ...state,
        remaining: action.remaining,
        max: action.max
      };
    case actionTypes.COUNT_DOWN:
      return {
        ...state,
        remaining: state.remaining > 0 ? state.remaining - 1 : 0
      };
    default:
      return state;
  }
};

export default combineReducers({
  time
});
