import React from "react";
import store from "./redux";
import { Provider } from "react-redux";
import ReactRedux from "./ReactRedux";
export default function () {
  return (
    <Provider store={store}>
      <ReactRedux />
    </Provider>
  );
}
