import React, { Fragment } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Topbar from '../containers/Topbar/Topbar';
import { routes } from '../config/config';

const AppRouter = ({ ...otherProps }) => (
  <Router {...otherProps}>
    <Fragment>
      {<Topbar />}
      <Switch>
        {routes.map(route => (
          <Route
            exact={route.exact}
            key={route.path}
            path={route.path}
            component={route.component}
          />
        ))}
      </Switch>
    </Fragment>
  </Router>
);

export default AppRouter;
