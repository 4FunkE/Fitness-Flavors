import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Switch } from "react-router";

import Home from "../pages/Home";
import Exercise from "../pages/Exercise";
import Login from "../pages/Login";
import Profile from "../pages/Profile";

function RenderPages() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/exercise" component={Exercise} />
        <Route path="/login" component={Login} />
        <Route path="/profile" component={Profile} />
        <Route path="/food" component={Food} />
        <Route path="/shakes" component={Shakes} />
      </Switch>
    </Router>
  );
}

export default RenderPages;
