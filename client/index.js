import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./app";

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("app")
);
