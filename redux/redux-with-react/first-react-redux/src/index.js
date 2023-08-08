import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

import store from "./redux/store";
import TodoAppContainer from "./redux/containers/TodoAppContainer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <TodoAppContainer />
    </Provider>
  </React.StrictMode>
);
