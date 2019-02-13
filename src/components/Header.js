import React from 'react';
import { Link, NavLink } from 'react-router-dom';
// NavLink is better suited for navigation -> styled in custom way
const Header = () => {
  return (
    <header>
      <h1>Expensify</h1>
      <NavLink to="/" activeClassName="is-active" exact={true}>
        Home
      </NavLink>
      <NavLink to="/create" activeClassName="is-active">
        Add Expense
      </NavLink>
      <NavLink to="/help" activeClassName="is-active">
        Help Page
      </NavLink>
    </header>
  );
};

export default Header;
