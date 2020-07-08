import React, { useState } from "react";
import { withRouter, Route, Switch } from "react-router-dom";
import LoginForm from "./components/login";
import SignupPage from "./components/SignupPage";
import Overview from "./components/Overview";
import Homepage from "./components/homepage";

function routes() {
  return (
    <Switch>
      <Route path="/login" component={LoginForm} />
      <Route path="/signup" component={SignupPage} />
      <Route path="/overview" component={Overview} />
      <Route path="/" component={Homepage} />
    </Switch>
  );
}

export default withRouter(routes);
