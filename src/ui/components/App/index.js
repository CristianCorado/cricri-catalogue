import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

// Components
import Home from '../Home';
import Iphone from '../Iphone';
import Watch from '../Watch';
import NotFound from '../NotFound';

const App = () => (
  <Router>
    <Switch>
      <Route path="/">
        <Home />
      </Route>
      <Route path="/watches">
        <Watch />
      </Route>
      <Route path="/iphones">
        <Iphone />
      </Route>
      <Route path="*">
        <NotFound />
      </Route>
    </Switch>
  </Router>
);

export default App;
