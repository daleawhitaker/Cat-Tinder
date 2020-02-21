import rootReducer from "./reducers";
import { configureStore } from "@reduxjs/toolkit";

export default function doStore(preloadedState = {}) {
  const store = configureStore({
    reducer: rootReducer,
    preloadedState
  });
  return store;
}
