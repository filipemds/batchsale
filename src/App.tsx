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
          <Route path="/" exact component={Batch} />
          {routes
            .filter(route => menuData.routes.includes(route.uri))
            .map(route => (
              <Route key={route.uri} path={route.uri} component={route.component} />
            ))}
        </Switch>
    </Router>
);
