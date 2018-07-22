import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from './App';
import { Login } from './containers/Login/LoginForm';
import Dashboard from './containers/Dashboard/Dashboard';
import Footer from './containers/Footer/Footer';
import Sidebar from './containers/Sidebar/Sidebar';
import AppReducer, { initState as AppInitState } from './redux/app/reducer';
import AppActions from './redux/app/actions';

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
    expect(AppReducer(undefined, { type: 'undefined' })).toEqual({
      ...AppInitState,
    });
  });
  it('Test AUTH -> Starting the Authentication', () => {
    expect(AppReducer(undefined, { type: AppActions.AUTH })).toEqual({
      ...AppInitState,
      loading: true,
    });
  });
  it('Test AUTH_SUCCESS -> Authentication', () => {
    const payload = { user: 'testUser', pass: 'testPass' };
    expect(
      AppReducer(undefined, { type: AppActions.AUTH_SUCCESS, payload })
    ).toEqual({
      ...AppInitState,
      ...payload,
      authenticated: true,
    });
  });
  it('Test AUTH_FAIL -> Authentication', () => {
    expect(AppReducer(undefined, { type: AppActions.AUTH_FAIL })).toEqual({
      ...AppInitState,
      authenticated: false,
      loading: 'error',
    });
  });
  it('Test LOGOUT -> Removing the data', () => {
    expect(AppReducer(undefined, { type: AppActions.LOGOUT })).toEqual({
      ...AppInitState,
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
      type: AppActions.AUTH,
      payload,
    };
    expect(AppActions.auth(payload)).toEqual(expectedAction);
  });
  it('should create an action to logout', () => {
    const expectedAction = {
      type: AppActions.LOGOUT,
    };
    expect(
      AppActions.logout('Passing payload, does absolutely nothing.')
    ).toEqual(expectedAction);
  });
});
