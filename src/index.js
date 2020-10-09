import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import SignIn from "./Components/SignIn";
import EnterNumber from "./Components/EnterNumber";

import * as serviceWorker from "./serviceWorker";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import OTPBox from "./Components/OTPBox";

ReactDOM.render(
  <React.StrictMode>
    <App />
    {/* <OTPBox /> */}
    {/* <SignIn /> */}
    {/* <EnterNumber /> */}
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
