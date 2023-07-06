import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { applyMiddleware, compose } from "redux";
import {configureStore} from '@reduxjs/toolkit';
import reducers from "./reducers";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = configureStore({reducer : reducers, middleware: [thunk] });

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#root")
);
