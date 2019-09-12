import React from "react";
import { shallow } from "enzyme";
import { ExpensesSummary } from "../../components/ExpensesSummary";

test("should render the component", () => {
  const wrapper = shallow(<ExpensesSummary />);
  expect(wrapper).toMatchSnapshot();
});

test("should render correctly with one expense", () => {
  const wrapper = shallow(
    <ExpensesSummary expenseCount={1} expensesTotal={300} />
  );
  expect(wrapper).toMatchSnapshot();
});

test("should render correctly with multiple expenses", () => {
  const wrapper = shallow(
    <ExpensesSummary expenseCount={24} expensesTotal={30890} />
  );
  expect(wrapper).toMatchSnapshot();
});
