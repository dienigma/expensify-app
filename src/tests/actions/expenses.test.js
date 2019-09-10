import { addExpense, editExpense, removeExpense } from "../../actions/expenses";

test("should remove expense action object", () => {
  const action = removeExpense({ id: "12345" });
  expect(action).toEqual({
    type: "REMOVE_EXPENSE",
    id: "12345"
  });
});

test("should edit expense object", () => {
  const action = editExpense("1234", {
    description: "Test Desc",
    amount: 2450
  });
  expect(action).toEqual({
    type: "EDIT_EXPENSE",
    id: "1234",
    updates: {
      description: "Test Desc",
      amount: 2450
    }
  });
});

test("should setup add expenese", () => {
  const expenseData = {
    description: "Something",
    amount: 12345,
    createdAt: 1000,
    note: "Last months rent"
  };
  const action = addExpense(expenseData);
  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense: {
      ...expenseData,
      id: expect.any(String)
    }
  });
});

test("should should set up the add expense object with default values", () => {
  const expenseDefaults = {
    description: "",
    note: "",
    amount: 0,
    createdAt: 0
  };
  const action = addExpense();
  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense: { ...expenseDefaults, id: expect.any(String) }
  });
});
