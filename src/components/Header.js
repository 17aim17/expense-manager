import React from 'react';
import { Link, NavLink } from 'react-router-dom';
// NavLink is better suited for navigation -> styled in custom way
const Header = () => {
  return (
    <header>
      <h1>Expensify</h1>
      {/* <Link to="/">Home</Link>
          <Link to="/create">Add Exopense</Link>
          <Link to="/edit">Edit Exopense</Link>
          <Link to="/help">Help Page</Link> */}
      <NavLink to="/" activeClassName="is-active" exact={true}>
        Home
      </NavLink>
      <NavLink to="/create" activeClassName="is-active">
        Add Exopense
      </NavLink>
      <NavLink to="/edit" activeClassName="is-active">
        Edit Exopense
      </NavLink>
      <NavLink to="/help" activeClassName="is-active">
        Help Page
      </NavLink>
    </header>
  );
};

export default Header;
