import React from 'react';
import { connect } from 'react-redux';

import { startLogIn } from '../actions/authActions';

const LoginPage = props => {
  return (
    <div className="box-layout">
      <div className="box-layout__box">
        <h1 className="box-layout__title">Expense Manager</h1>
        <p>It's time to get your expenses under control.</p>
        <button className="button" onClick={props.startLogIn}>
          Login with Google{' '}
        </button>
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    startLogIn: () => dispatch(startLogIn())
  };
};

export default connect(
  undefined,
  mapDispatchToProps
)(LoginPage);
