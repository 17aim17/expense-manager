import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';

import getExpensesTotal from '../utils/getExpensesTotal';
import getVisibleExpenses from '../utils/getVisibleExpenses';

const ExpensesSummary = ({ expenseCount, expensesTotal }) => {
  const expenseWord = expenseCount === 1 ? 'expense' : 'expenses';
  const formattedValue = numeral(expensesTotal / 100).format('$0,0.00');
  return (
    <div>
      <h2>
        Viewing {expenseCount} {expenseWord} totalling {formattedValue}
      </h2>
    </div>
  );
};

const mapStateToProps = state => {
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
  return {
    expenseCount: visibleExpenses.length,
    expensesTotal: getExpensesTotal(visibleExpenses)
  };
};

export default connect(mapStateToProps)(ExpensesSummary);
