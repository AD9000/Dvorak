import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import App from "./components/App";
import BetaApp from "./beta/App";

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route path="/beta" component={BetaApp} />
        <Route path="*" component={App} />
      </Switch>
    </Router>
  );
};

export default AppRouter;
