import filterReducer from "../../reducers/filters";
import moment from "moment";

test("should set up default filter values", () => {
  const state = filterReducer(undefined, { type: "@@INIT" });
  expect(state).toEqual({
    text: "",
    sortBy: "date",
    startDate: moment().startOf("month"),
    endDate: moment().endOf("month")
  });
});

test("should set sort by to amount", () => {
  const state = filterReducer(undefined, { type: "SORT_BY_AMOUNT" });
  expect(state.sortBy).toBe("amount");
});

test("should set sort by to date", () => {
  const currentState = {
    text: "",
    sortBy: "amount",
    startDate: undefined,
    endDate: undefined
  };
  const action = { type: "SORT_BY_DATE" };
  const state = filterReducer(currentState, action);
  expect(state.sortBy).toBe("date");
});

test("should set text filter", () => {
  const state = filterReducer(undefined, {
    type: "SET_TEXT_FILTER",
    criteria: "rent"
  });
  expect(state.text).toBe("rent");
});

test("should set start date filter", () => {
  const state = filterReducer(undefined, {
    type: "SET_START_DATE",
    startDate: moment(0)
  });
  expect(state.startDate).toEqual(moment(0));
});

test("should set start date filter", () => {
  const state = filterReducer(undefined, {
    type: "SET_END_DATE",
    endDate: moment(0)
  });
  expect(state.endDate).toEqual(moment(0));
});
