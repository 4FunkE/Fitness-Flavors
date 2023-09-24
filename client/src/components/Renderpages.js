import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "../component/pages/Home";
import Exercise from "../component/pages/Exercise";
import Login from "../component/pages/Login";
import Profile from "../component/pages/Profile";

function RenderPages() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/exercise" component={Exercise} />
        <Route path="/login" component={Login} />
        <Route path="/profile" component={Profile} />
      </Switch>
    </Router>
  );
}

export default RenderPages;
