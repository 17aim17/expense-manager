import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import 'normalize.css/normalize.css';
import './styles/styles.scss';

import AppRouter from './routers/AppRouter';

import configureStore from './store/configureStore';
// import { addExpenses } from './actions/expenses';
// import { setTextFilter } from './actions/filters';
// import getVisibleExpenses from './selectors/expenses';

const store = configureStore();

// store.subscribe(() => {
//   const state = store.getState();
//   const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
//   console.log(visibleExpenses);
// });

// store.dispatch(
//   addExpenses({ description: 'Water Bill', amount: 110, createdAt: 19 })
// );
// store.dispatch(
//   addExpenses({ description: 'Rent Bill', amount: 1095, createdAt: 21 })
// );
// store.dispatch(
//   addExpenses({ description: 'Electricity Bill', amount: 10, createdAt: 200 })
// );

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));
