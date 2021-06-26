/** @format */

import React, { lazy } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import AccessibleNavigationAnnouncer from "./app/components/AccessibleNavigationAnnouncer";

const Layout = lazy(() => import("./app/containers/Layout"));
const Login = lazy(() => import("./app/pages/Login"));
const CreateAccount = lazy(() => import("./app/pages/CreateAccount"));
const ForgotPassword = lazy(() => import("./app/pages/ForgotPassword"));

function App() {
  return (
    <>
      <Router>
        <AccessibleNavigationAnnouncer />
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/create-account" component={CreateAccount} />
          <Route path="/forgot-password" component={ForgotPassword} />

          <Route path="/app" component={Layout} />

          <Redirect exact from="/" to="/login" />
        </Switch>
      </Router>
    </>
  );
}
export default App;
