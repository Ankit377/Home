import React, { Component } from "react";
// import SignUp from "./SignUP";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Home from "./Components/Home";

import Scholarship from "./Components/Scholarship";
import AboutYourSelf from "./Components/AboutYourSelf";
import LearnOnline from "./Components/LearnOnline";
import OnlineCounselling from "./Components/OnlineCounselling";
import InfoVideos from "./Components/InfoVideos";
import LiveInteractionClass from "./Components/LiveInteractionClass";
import MyCourses from "./Components/MyCourses";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route path="/home" component={Home}></Route>
            <Route path="/aboutyourself" component={AboutYourSelf}></Route>
            <Route path="/scholarship" component={Scholarship}></Route>
            <Route path="/learnonline" component={LearnOnline}></Route>
            <Route
              path="/onlinecounselling"
              component={OnlineCounselling}
            ></Route>
            <Route path="/infovideos" component={InfoVideos}></Route>
            <Route path="/mycourses" component={MyCourses}></Route>
            <Route
              path="/liveinteractionclass"
              component={LiveInteractionClass}
            ></Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
