import React from "react";
// import SignUp from "./SignUP";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Home from "./Components/Home";

import Scholarship from "./Components/Scholarship";
import AboutYourSelf from "./Components/AboutYourSelf";
import LearnOnline from "./Components/LearnOnline";
import OnlineCounselling from "./Components/OnlineCounselling";
import InfoVideos from "./Components/InfoVideos";
import LiveInteractionClass from "./Components/LiveInteractionClass";
import MyCourses from "./Components/MyCourses";
import PaidCounselling from "./Components/PaidCounselling";
import GermayScholarship from "./Components/GermayScholarship";
import ItalyScholarship from "./Components/ItalyScholarship";
import CanadaScholarship from "./Components/CanadaScholarship";
import RussiaScholarship from "./Components/RussiaScholarship";
import EnglishCourse from "./Components/EnglishCourse";
import EnterNumber from "./Components/EnterNumber";
import VerifyOTP from "./Components/VerifyOTP";
import SignIn from "./Components/SignIn";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Switch>
            <Route path="/enternumber" component={EnterNumber} />
            <Route exact path="/" component={Home}></Route>

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
            <Route path="/paidcounselling" component={PaidCounselling}></Route>
            {/* <Route
              path="/google"
              component={() => (window.location = "https://google.com")}
            ></Route> */}

            <Route path="/germanyscholarship" component={GermayScholarship} />
            <Route path="/italyscholarship" component={ItalyScholarship} />
            <Route path="/canadascholarship" component={CanadaScholarship} />
            <Route path="/russiascholarship" component={RussiaScholarship} />
            <Route path="/englishcourse" component={EnglishCourse} />
            <Route path="/verifyotp" component={VerifyOTP} />
            <Route path="/signin" component={SignIn} />

            <Redirect to="/" />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
