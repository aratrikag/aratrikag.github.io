import React from "react";
import { Switch, Route } from "react-router-dom";

import LandingPage from "./landingPage";
import Accomplishments from "./Accomplishments";
import contact from "./contact";
import Education from "./Education";
import AwardsAndProjects from "./AwardsAndProjects";

const Main = () => (
  <Switch>
    <Route exact path="/" component={LandingPage} />
    <Route path="/landingPage" component={LandingPage} />
    <Route path="/Accomplishments" component={Accomplishments} />
    <Route path="/contact" component={contact} />
    <Route path="/Education" component={Education} />
    <Route path="/AwardsAndProjects" component={AwardsAndProjects} />
  </Switch>
);

export default Main;
