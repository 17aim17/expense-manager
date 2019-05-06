import React from 'react';
import ExpenseForm from './ExpenseForm';
import { connect } from 'react-redux';
import { startAddExpenses } from '../actions/expensesActions';
const AddExpensePage = props => {
  return (
    <div>
      <h2>Add Expense</h2>
      <ExpenseForm
        onSubmit={expense => {
          props.startAddExpenses(expense);
          props.history.push('/');
        }}
      />
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    startAddExpenses: expense => dispatch(startAddExpenses(expense))
  };
};

export default connect(
  undefined,
  mapDispatchToProps
)(AddExpensePage);
