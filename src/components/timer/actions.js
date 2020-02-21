import actionTypes from "../../store/actionTypes";

function setTime(timeRemaining, maxTime) {
  return {
    type: actionTypes.SET_TIME,
    timeRemaining,
    maxTime
  };
}

function countDown() {
  return {
    type: actionTypes.COUNT_DOWN
  };
}

export default {
  setTime,
  countDown
};
