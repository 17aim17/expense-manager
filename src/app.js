import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import 'normalize.css/normalize.css';
import './styles/styles.scss';

import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpenses } from './actions/expensesActions';

const store = configureStore();

store.dispatch(
  addExpenses({ description: 'Water Bill', amount: 1100, createdAt: 19 })
);
store.dispatch(
  addExpenses({ description: 'Rent Bill', amount: 1095, createdAt: 21 })
);
store.dispatch(
  addExpenses({ description: 'Electricity Bill', amount: 10, createdAt: 200 })
);

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));
