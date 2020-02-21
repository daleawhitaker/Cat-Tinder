import { configureStore, combineReducers } from "@reduxjs/toolkit";
import time from "./time";

const rootReducer = combineReducers({
  time
});

export default function doStore(preloadedState = {}) {
  return configureStore({
    reducer: rootReducer,
    preloadedState
  });
}
