import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { removeExpense } from "../actions/expenses";

const ExpenseListItem = ({ id, description, amount, createdAt }) => {
  return (
    <div>
      <h3>
        <Link to={`/edit/${id}`}>{description}</Link>
      </h3>
      <p>
        {amount}-{createdAt}
      </p>
    </div>
  );
};
export default ExpenseListItem;
