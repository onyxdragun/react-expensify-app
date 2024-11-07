import React from "react";
import { connect } from "react-redux";
import { Navigate } from 'react-router-dom';

import Header from "../components/Header.js";

export const PrivateRoute = ({ children, isAuthenticated }) => {
  return isAuthenticated ? (
    <>
      <Header />
      {children}
    </>
  ) : (
    <Navigate to="/" />
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: !!state.auth.uid
});

export default connect(mapStateToProps)(PrivateRoute);