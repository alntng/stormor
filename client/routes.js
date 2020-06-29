import React, { useState } from "react";
import { withRouter, Route, Switch } from "react-router-dom";
import LoginForm from "./components/login";

export default function routes() {
  const [loggedIn, setLoggedIn] = useState(true);

  return (
    <Switch>
      <Route path="/WTF" component={LoginForm} />
      {/* <Route path="/" component={LoginForm} /> */}
    </Switch>
  );
}
