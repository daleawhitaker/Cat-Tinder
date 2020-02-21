import actionTypes from "../../store/actionTypes";

function setTime(remaining, max) {
  return {
    type: actionTypes.SET_TIME,
    remaining,
    max
  };
}

function countDown() {
  return {
    type: actionTypes.COUNT_DOWN
  };
}

export { setTime, countDown };
