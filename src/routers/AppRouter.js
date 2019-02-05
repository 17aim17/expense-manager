import React from 'react';

import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';

import ExpenseDashBoard from '../components/ExpenseDashBoard';
import AddExpensePage from '../components/AddExpensePage';
import EditExpensePage from '../components/EditExpensePage';
import HeplPage from '../components/HeplPage';
import NotFoundPage from '../components/NotFoundPage';
import Header from '../components/Header';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Switch>
          <Route path="/" component={ExpenseDashBoard} exact={true} />
          <Route path="/create" component={AddExpensePage} />
          <Route path="/edit" component={EditExpensePage} />
          <Route path="/help" component={HeplPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;
