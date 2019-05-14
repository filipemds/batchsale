import React from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import {
  Batch
} from './views';

import menuData from './menu.json';

const headerData = { title: '' };

const routes = [
    { uri: '/batch', component: Batch },
];

export default () => (
  <Router>
    <Switch>
      <Route path="/batch" exact component={Batch} />
    </Switch>
  </Router>
);
