import React from 'react';
import ExpenseForm from './ExpenseForm';
import { connect } from 'react-redux';
import { addExpenses } from '../actions/expensesActions';
const AddExpensePage = props => {
  return (
    <div>
      <h2>Add Expense</h2>
      <ExpenseForm
        onSubmit={expense => {
          props.dispatch(addExpenses(expense));
          props.history.push('/');
        }}
      />
    </div>
  );
};

export default connect()(AddExpensePage);
