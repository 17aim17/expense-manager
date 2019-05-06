import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import {
  startEditExpense,
  startRemoveExpense
} from '../actions/expensesActions';

const EditExpensePage = props => {
  return (
    <div>
      <div className="page-header">
        <div className="content-container">
          <div className="header__content">
            <h1 className="page-header__title">Edit Expense</h1>
            <button
              className="button button--danger"
              onClick={() => {
                props.startRemoveExpense(props.expense);
                props.history.push('/');
              }}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
      <div className="content-container">
        <ExpenseForm
          expense={props.expense}
          onSubmit={expense => {
            props.startEditExpense(props.expense.id, expense);
            props.history.push('/');
          }}
        />
      </div>
    </div>
  );
};

const mapStateToProps = (state, props) => {
  return {
    expense: state.expenses.find(
      expense => expense.id === props.match.params.id
    )
  };
};

const mapDispatchToProps = dispatch => {
  return {
    startRemoveExpense: expense => dispatch(startRemoveExpense(expense)),
    startEditExpense: (id, expense) => dispatch(startEditExpense(id, expense))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditExpensePage);
