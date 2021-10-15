import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PrivateRoutes from "./auth/helper/PrivateRoutes";
import Home from "./core/Home";

const Routes = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          {/* <PrivateRoutes path="/user/dashboard" exact component={} /> */}
        </Switch>
      </Router>
    </div>
  );
};

export default Routes;
