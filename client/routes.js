import React, { useState } from "react";
import { withRouter, Route, Switch } from "react-router-dom";
import LoginForm from "./components/login";
import SignupForm from "./components/Signup";
import Overview from "./components/Overview";
import Homepage from "./components/homepage";

function routes() {
  return (
    <Switch>
      <Route path="/Login" component={LoginForm} />
      <Route path="/signup" component={SignupForm} />
      <Route path="/overview" component={Overview} />
      <Route path="/" component={Homepage} />
    </Switch>
  );
}

export default withRouter(routes);
