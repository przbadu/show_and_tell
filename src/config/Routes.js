import React from "react";
import { Switch, Route } from "react-router-dom";

import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import PrivateRoute from "./PrivateRoute";
import AddPresentation from "../pages/AddPresentation";

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/login" component={Login} />
      <PrivateRoute exact path="/" component={Dashboard} />
      <PrivateRoute path="/presentations/new" component={AddPresentation} />
    </Switch>
  );
}
