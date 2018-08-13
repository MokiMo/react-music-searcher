import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from './App';
import { Login } from './containers/Login/LoginForm';
import Dashboard from './containers/Dashboard/Dashboard';
import Footer from './containers/Footer/Footer';
import Sidebar from './containers/Sidebar/Sidebar';
import AuthReducer, { initState as AuthInitState } from './redux/auth/reducer';
import AuthActions from './redux/auth/actions';

Enzyme.configure({ adapter: new Adapter() });

describe('App', () => {
  it('shallow renders App without crashing', () => {
    Enzyme.shallow(<App />);
  });
});

describe('LoginForm', () => {
  it('shallow renders LoginForm without crashing', () => {
    Enzyme.shallow(<Login />);
  });
});

describe('Dashboard', () => {
  it('shallow renders Dashboard without crashing', () => {
    Enzyme.shallow(<Dashboard />);
  });
});

describe('Footer', () => {
  it('shallow renders Footer without crashing', () => {
    Enzyme.shallow(<Footer />);
  });
});

describe('Sidebar', () => {
  it('shallow renders Sidebar without crashing', () => {
    Enzyme.shallow(<Sidebar />);
  });
});

describe('App Reducer', () => {
  it('Has a default state', () => {
    expect(AuthReducer(undefined, { type: 'undefined' })).toEqual({
      ...AuthInitState,
    });
  });
  it('Test AUTH -> Starting the Authentication - starts Loading', () => {
    expect(AuthReducer(undefined, { type: AuthActions.AUTH })).toEqual({
      ...AuthInitState,
      loading: true,
    });
  });
  it('Test AUTH_SUCCESS -> Authentication', () => {
    const payload = { user: 'testUser', pass: 'testPass' };
    expect(
      AuthReducer(undefined, { type: AuthActions.AUTH_SUCCESS, payload })
    ).toEqual({
      ...AuthInitState,
      ...payload,
      authenticated: true,
    });
  });
  it('Test AUTH_FAIL -> Authentication', () => {
    expect(AuthReducer(undefined, { type: AuthActions.AUTH_FAIL })).toEqual({
      ...AuthInitState,
      authenticated: false,
      loading: 'error',
    });
  });
  it('Test LOGOUT -> Removing the data', () => {
    expect(AuthReducer(undefined, { type: AuthActions.LOGOUT })).toEqual({
      ...AuthInitState,
      authenticated: false,
    });
  });
});

describe('actions', () => {
  it('should create an action to log-in, passing auth Credentials', () => {
    const payload = {
      username: 'user',
      password: 'pass',
    };
    const expectedAction = {
      type: AuthActions.AUTH,
      payload,
    };
    expect(AuthActions.auth(payload)).toEqual(expectedAction);
  });
  it('should create an action to logout', () => {
    const expectedAction = {
      type: AuthActions.LOGOUT,
    };
    expect(
      AuthActions.logout('Passing payload, does absolutely nothing.')
    ).toEqual(expectedAction);
  });
});
