import React from 'react';
import ReactDOM from 'react-dom';

import 'normalize.css/normalize.css';
import './styles/styles.scss';

import AppRouter from './routers/AppRouter';

import configureStore from './store/configureStore';
import { addExpenses } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';

const store = configureStore();

store.subscribe(() => {
  const state = store.getState();
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
  console.log(visibleExpenses);
});

store.dispatch(addExpenses({ description: 'Water Bill', amount: 100 }));
store.dispatch(addExpenses({ description: 'Electricity Bill', amount: 10 }));
store.dispatch(setTextFilter('Water'));

ReactDOM.render(<AppRouter />, document.getElementById('app'));
