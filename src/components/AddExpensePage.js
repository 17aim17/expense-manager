import React from 'react';
import ExpenseForm from './ExpenseForm';
import { connect } from 'react-redux';
import { startAddExpenses } from '../actions/expensesActions';
const AddExpensePage = props => {
  return (
    <div>
      <div className="page-header">
        <div className="content-container">
          <h1 className="page-header__title">Add Expense</h1>
        </div>
      </div>
      <div className="content-container">
        <ExpenseForm
          onSubmit={expense => {
            props.startAddExpenses(expense);
            props.history.push('/');
          }}
        />
      </div>
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
