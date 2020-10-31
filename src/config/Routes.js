import React from "react";
import { Switch, Route } from "react-router-dom";

import PrivateRoute from "./PrivateRoute";
import LoginPage from "../pages/LoginPage";
import PresentationsPage from "../pages/Presentations";
import AddPresentationPage from "../pages/AddPresentationPage";

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/login" component={LoginPage} />
      <PrivateRoute exact path="/" component={PresentationsPage} />
      <PrivateRoute path="/presentations/new" component={AddPresentationPage} />
    </Switch>
  );
}
