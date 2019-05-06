import React from 'react';
import { connect } from 'react-redux';

import { startLogIn } from '../actions/authActions';

const LoginPage = props => {
  return (
    <div>
      <button onClick={props.startLogIn}>Login </button>
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
