import React from 'react';
import { connect } from 'react-redux';
import getVisibleExpenses from '../selectors/expenses';
import ExpenseListItem from './ExpenseListItem';
const ExpenseList = props => {
  return (
    <div>
      <h2>Expense List</h2>
      {props.expenses.map(expense => (
        <ExpenseListItem key={expense.id} expense={expense} />
      ))}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    expenses: getVisibleExpenses(state.expenses, state.filters)
  };
};

export default connect(mapStateToProps)(ExpenseList);
