import React from "react";
import { connect } from "react-redux";
import { startLogin } from "../actions/auth";

export const LoginPage = ({ startLogin }) => {
  return (
    <div className="box-layout">
      <div className="box-layout__box">
        <h1 className="box-layout__title">Expensify</h1>
        <p>A way to get yourself together :)</p>
        <button onClick={startLogin} className="button">
          Login with google
        </button>
      </div>
    </div>
  );
};

const mapDisptachToProps = dispatch => ({
  startLogin: () => dispatch(startLogin())
});

export default connect(
  undefined,
  mapDisptachToProps
)(LoginPage);
