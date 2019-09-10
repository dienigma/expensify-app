import expenseReducer from "../../reducers/expenses";
import moment from "moment";
import expenses from "../fixtures/expenses";

test("should set to default state", () => {
  const state = expenseReducer(undefined, { type: "@@INIT" });
  expect(state).toEqual([]);
});

test("should remove expense by id", () => {
  const action = {
    type: "REMOVE_EXPENSE",
    id: expenses[1].id
  };
  const state = expenseReducer(expenses, action);
  expect(state).toEqual([expenses[0], expenses[2]]);
});

test("should not remove expense if id not found", () => {
  const action = {
    type: "REMOVE_EXPENSE",
    id: -1
  };
  const state = expenseReducer(expenses, action);
  expect(state).toEqual(expenses);
});

test("should add an expense", () => {
  const expense = {
    id: "4",
    description: "Gym",
    note: "Paid for a month",
    amount: 4500,
    createdAt: moment(0)
      .add(5, "days")
      .valueOf()
  };
  const action = {
    type: "ADD_EXPENESE",
    expense
  };
  const state = expenseReducer(expenses, action);
  expect(state).toEqual(expenses);
});

test("should edit an expense by id", () => {
  const updates = {
    description: "baseball"
  };
  const action = {
    type: "EDIT_EXPENSE",
    id: expenses[1].id,
    updates
  };

  const state = expenseReducer(expenses, action);
  //   console.log(state);
  expect(state[1]["description"]).toBe("baseball");
});

test("should not edit the expense if the id is not found.", () => {
  const updates = {
    description: "yabadabaadoo"
  };
  const action = {
    type: "EDIT_EXPENSE",
    id: -1,
    updates
  };
  const state = expenseReducer(expenses, action);
  expect(state).toEqual(expenses);
});
