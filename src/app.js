import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "react-dates/lib/css/_datepicker.css";
import configureStore from "./store/configureStore";
import { startAddExpense, startSetExpenses } from "./actions/expenses";
import { login, logout } from "./actions/auth";
import getVisibleExpenses from "./selectors/expenses";
import AppRouter, { history } from "./routers/AppRouter";

import { firebase } from "./firebase/firebase";
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
ReactDOM.render(<p>Loading...</p>, appRoot);

let hasRendered = false;
const renderApp = () => {
  if (!hasRendered) {
    ReactDOM.render(jsx, appRoot);
    hasRendered = true;
  }
};

firebase.auth().onAuthStateChanged(user => {
  if (user) {
    store.dispatch(login(user.uid));
    store.dispatch(startSetExpenses()).then(() => {
      renderApp();
      if (history.location.pathname === "/") {
        history.push("/dashboard");
      }
    });
  } else {
    store.dispatch(logout());
    renderApp();
    history.push("/");
  }
});
