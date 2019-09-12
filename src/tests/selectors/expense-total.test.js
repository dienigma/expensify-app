import totalExpenses from "../../selectors/expense-total";
import expenses from "../fixtures/expenses";

test("should return 0 if there is no expense", () => {
  const expenses = [];
  const result = totalExpenses(expenses);
  expect(result).toBe(0);
});

test("should add up a single expense", () => {
  const testdata = [expenses[0]];
  const result = totalExpenses(testdata);
  expect(result).toBe(testdata[0]["amount"]);
});

test("should add up all the expenses", () => {
  const result = totalExpenses(expenses);

  expect(result).toBe(114195);
});
