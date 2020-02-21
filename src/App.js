import React from "react";
import { Provider } from "react-redux";

import Timer from "./components/timer";
import configureStore from "./store";

const store = configureStore({
  time: { remaining: 60, max: 60 }
});

export default function App() {
  return (
    <Provider store={store}>
      <Timer />
    </Provider>
  );
}
