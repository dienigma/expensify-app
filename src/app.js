import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import configureStore from "./store/configureStore";
import { addExpense } from "./actions/expenses";
import { setTextFilter } from "./actions/filters";
import getVisibleExpenses from "./selectors/expenses";
import AppRouter from "./routers/AppRouter";
import "../node_modules/normalize.css/normalize.css";
import "./styles/styles.scss";

const store = configureStore();
store.dispatch(addExpense({ description: "water bill", amount: 20000 }));
store.dispatch(
  addExpense({ description: "gas bill", amount: 20000, createdAt: 1000 })
);
store.dispatch(addExpense({ description: "gas bill", amount: 3000 }));

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);

console.log("test");

const appRoot = document.getElementById("app");
const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);
ReactDOM.render(jsx, appRoot);
