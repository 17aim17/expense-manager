//  Higher Order Component - A component(HOC) that renders other component
//  Reuse code
//  Render hijacking
//  prop maipulation
//  Abstract state

import React from 'react';
import ReactDOM from 'react-dom';

const Info = props => {
  return (
    <div>
      <h1>Info</h1>
      <p>The Info is:{props.info}</p>
    </div>
  );
};

// regular function
const withAdminWarning = WrappedComponent => {
  return props => (
    <div>
      {props.isAdmin && <p>This is private info</p>}
      <WrappedComponent {...props} />
    </div>
  );
};

const requireAuthentiction = WrappedComponent => {
  return props => (
    <div>
      <p />
      {props.isAuth ? <WrappedComponent {...props} /> : <p>Please log in</p>}
    </div>
  );
};

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentiction(Info);

// ReactDOM.render(
//   <AdminInfo isAdmin={true} info="Thes are the details" />,
//   document.getElementById('app')
// );

ReactDOM.render(
  <AuthInfo isAuth={false} info="Thes are the details" />,
  document.getElementById('app')
);
