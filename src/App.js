import React from "react";
import { Provider } from "react-redux";

import "./styles.css";
import Timer from "./components/timer";
import configureStore from "./store";

const store = configureStore({
  time: { timeRemaining: 30, maxTime: 60 }
});

export default function App() {
  return (
    <Provider store={store}>
      <Timer />
    </Provider>
  );
}
