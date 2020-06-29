import React, { useState } from "react";
import { withRouter, Route, Switch } from "react-router-dom";
import LoginForm from "./components/login";
import Homepage from "./components/homepage";

function routes() {
  return (
    <Switch>
      <Route path="/login" component={LoginForm} />
      <Route path="/" component={Homepage} />
    </Switch>
  );
}

export default withRouter(routes);
