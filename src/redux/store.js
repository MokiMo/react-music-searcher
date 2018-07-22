/* eslint no-undef: 0 */

import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducers from './reducers';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  combineReducers({
    ...reducers,
  }),
  /* preloadedState, */ composeEnhancers(
    compose(applyMiddleware(sagaMiddleware))
  )
);
sagaMiddleware.run(rootSaga);

export default store;
