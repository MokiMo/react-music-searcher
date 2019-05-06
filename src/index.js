/* eslint no-undef: 0 */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import App from './App';
import store from './redux/store';
import 'typeface-roboto';

const app = (
  <Provider store={store}>
    <App />
  </Provider>
);

if (window.Cypress) {
  window.store = store;
}

ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();
