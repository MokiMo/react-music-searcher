import { all } from 'redux-saga/effects';

import appSagas from './app/saga';
import authSagas from './auth/saga';

export default function* rootSaga() {
  yield all([appSagas(), authSagas()]);
}
