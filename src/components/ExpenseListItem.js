import React from 'react';
import { removeExpenses } from '../actions/expenses';
import { connect } from 'react-redux';
const ExpenseListItem = props => {
  return (
    <div>
      <h3>{props.expense.description}</h3>
      <p>
        {props.expense.amount} - <span>{props.expense.createdAt}</span>
      </p>
      <button
        onClick={() => {
          props.dispatch(removeExpenses(props.expense));
        }}
      >
        X
      </button>
    </div>
  );
};

export default connect()(ExpenseListItem);
