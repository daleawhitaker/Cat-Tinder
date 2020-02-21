import { createStore, compose, applyMiddleware } from "redux";
import { rootReducer } from "./reducers";
import thunk from "redux-thunk";

export default function configureStore(initialState = {}) {
  const middlewares = [thunk];
  const middlewareEnhancer = applyMiddleware(...middlewares);

  const enhancers = [middlewareEnhancer];
  const composedEnhancers = compose(...enhancers);

  const store = createStore(rootReducer, initialState, composedEnhancers);
  return store;
}
