import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import LearnOnline from "./LearnOnline";
import AboutYourSelf from "./AboutYourSelf";
import Scholarship from "./Scholarship";

export default function Navpage() {
  return (
    <>
      <Router>
        <div>
          <Switch>
            <Route path="/nav">
              <AboutYourSelf />
            </Route>
            <Route path="/aboutyourself">
              <AboutYourSelf />
            </Route>
            <Route path="/scholarship">
              <Scholarship />
            </Route>
            <Route path="/learnonline">
              <LearnOnline />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}
