import React from "react";
import { Provider } from "react-redux";

import Page from "./components/page";
import configureStore from "./store";
import defaultState from "./store/defaultState";
import "./styles.css";

const store = configureStore(defaultState);

export default function App() {
  return (
    <Provider store={store}>
      <Page />
    </Provider>
  );
}
