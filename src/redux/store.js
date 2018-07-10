import { createStore, combineReducers, applyMiddleware, compose } from 'redux';


import createSagaMiddleware from 'redux-saga';
import reducers from '../redux/reducers';
import rootSaga from '../redux/sagas';


const sagaMiddleware = createSagaMiddleware();


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(  combineReducers({
    ...reducers,

  }), /* preloadedState, */ composeEnhancers(

  compose(applyMiddleware(sagaMiddleware))
));
sagaMiddleware.run(rootSaga);

export { store };
