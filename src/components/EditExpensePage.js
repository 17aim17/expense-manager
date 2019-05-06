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
      <ExpenseForm
        expense={props.expense}
        onSubmit={expense => {
          props.startEditExpense(props.expense.id, expense);
          props.history.push('/');
        }}
      />
      <button
        onClick={() => {
          props.startRemoveExpense(props.expense);
          props.history.push('/');
        }}
      >
        &times;
      </button>
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
