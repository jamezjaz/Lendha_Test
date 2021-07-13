import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Request from './components/Request';
import Form from './container/Form';

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/register" component={Form} />
      <Route path="/request" component={Request} />
    </Switch>
  </Router>
);

export default Routes;