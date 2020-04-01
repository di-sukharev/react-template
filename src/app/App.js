import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { Provider } from "react-redux";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { reset, themes } from "react95";
import { Auth } from "./pages/auth/Auth";
import { Page404 } from "./pages/404";
import { Home } from "./pages/home/Home";
import { PrivateRoute } from "./components/common/PrivateRoute";

const ResetStyles = createGlobalStyle`
  ${reset}
`;

export default function App({ store }) {
  return (
    <Provider store={store}>
      <ResetStyles />
      <ThemeProvider theme={themes.default}>
        <Router>
          <Switch>
            <Redirect exact from="/" to="/auth" />,
            <Route path="/auth" component={Auth} />
            <PrivateRoute path="/home" component={Home} />
            <Route component={Page404} />
          </Switch>
        </Router>
      </ThemeProvider>
    </Provider>
  );
}
