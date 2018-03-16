import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./components/Home/Home";
import Dashboard from "./components/Dashboard/Dashboard";
import Wizard from "./components/Wizard/Wizard";

export default (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/dashboard" component={Dashboard} />
    <Route path="/wizard/:id" component={Wizard} />
  </Switch>
);