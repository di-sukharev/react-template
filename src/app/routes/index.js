import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { Auth } from "../core/auth/Auth";
import { Page404 } from "./404";
import { Home } from "../core/home/Home";
import { PrivateRoute } from "../components/common/PrivateRoute";

export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Redirect exact from="/" to="/auth" />,
        <Route path="/auth" component={Auth} />
        <PrivateRoute path="/home" component={Home} />
        <Route component={Page404} />
      </Switch>
    </BrowserRouter>
  );
}
