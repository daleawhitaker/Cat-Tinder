import { configureStore, combineReducers } from "@reduxjs/toolkit";
import time from "./time";
import game from "./game";

const rootReducer = combineReducers({
  time,
  game
});

export default function doStore(preloadedState = {}) {
  return configureStore({
    reducer: rootReducer,
    preloadedState
  });
}
