import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "react-dates/lib/css/_datepicker.css";
import configureStore from "./store/configureStore";
import { addExpense } from "./actions/expenses";
import { setTextFilter } from "./actions/filters";
import getVisibleExpenses from "./selectors/expenses";
import AppRouter from "./routers/AppRouter";
import "./firebase/firebase";
// import "./playgrounds/promises";
import "../node_modules/normalize.css/normalize.css";
import "./styles/styles.scss";

const store = configureStore();

console.log("test");

const appRoot = document.getElementById("app");
const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);
ReactDOM.render(jsx, appRoot);
