import React from 'react';

const ExpenseListItem = props => {
  return (
    <div>
      <h3>{props.expense.description}</h3>
      <p>
        {props.expense.amount} - <span>{props.expense.createdAt}</span>
      </p>
    </div>
  );
};

export default ExpenseListItem;
