import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Components
import Home from "../Home";
import Iphone from "../Iphone";
import Watch from "../Watch";
import NotFound from "../NotFound";

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/watches">
        <Watch />
      </Route>
      <Route exact path="/iphones">
        <Iphone />
      </Route>
      <Route exact path="*">
        <NotFound />
      </Route>
    </Switch>
  </Router>
);

export default App;
