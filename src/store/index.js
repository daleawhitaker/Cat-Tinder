import { configureStore, combineReducers } from "@reduxjs/toolkit";
import time from "./time";
import game from "./game";
import cats from "./cats";

const rootReducer = combineReducers({
  time,
  game,
  cats
});

export default function doStore(preloadedState = {}) {
  return configureStore({
    reducer: rootReducer,
    preloadedState
  });
}
