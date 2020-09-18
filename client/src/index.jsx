import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
require("dotenv").config();

render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
