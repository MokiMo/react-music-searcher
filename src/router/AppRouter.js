import React, { Fragment } from "react";
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import LoginForm from "../containers/Login/LoginForm";
import Topbar from "../containers/Topbar/Topbar";
import { routes, NotFoundPage } from "../config.js";
import createHistory from "history/createBrowserHistory";

//Helper for PrivateRoute
const createRedirect = ({ location }) => ({
  pathname: "/sign-in",
  state: {
    returnURL: location.pathname
  }
});

// Ensures the user is redirected correctly, depending on the authentication status
const PrivateRoute = ({ component: Component, authenticated, ...rest }) => {
  const render = props =>
    authenticated ? (
      <Component {...props} />
    ) : (
      <Redirect to={createRedirect(props)} />
    );

  return <Route {...rest} render={render} />;
};

const AppRouter = ({ authenticated, ...otherProps }) => (
  <Router {...otherProps} history={createHistory({ basename: process.env.PUBLIC_URL })}>
    <Fragment>
      {authenticated ? <Topbar /> : null}
      <Switch>
        <Route path="/sign-in" component={() => <LoginForm />} />
        <Route path="/NA" component={NotFoundPage} />
        {routes.map(route => {
          return (
            <PrivateRoute
              key={route.path}
              path={route.path}
              component={route.component}
              authenticated={authenticated}
            />
          );
        })}
      </Switch>
    </Fragment>
  </Router>
);

AppRouter.propTypes = {
  authenticated: PropTypes.bool.isRequired
};

function mapStateToProps(state) {
  return {
    authenticated: state.auth.authenticated
  };
}
export default connect(mapStateToProps)(AppRouter);
