import { all, takeEvery, fork, put, delay } from 'redux-saga/effects';
import actions from './actions';

export function* resetSaga() {
  yield takeEvery(actions.ERROR, function* reset() {
    yield delay(2000);
    yield put({
      type: actions.NO_ERRORS,
    });
  });
}

export default function* rootSaga() {
  yield all([fork(resetSaga)]);
}
