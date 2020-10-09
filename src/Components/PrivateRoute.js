import React, { Component } from "react";
import {Routes} from "react-router-dom";

function PrivateRoute({ component: Component, ...rest }) {
  return <Route {...rest }render={
      (props) => retrun <Component {...props} />;
      
  }/>
}


export default PrivateRoute;
