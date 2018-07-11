import { all } from "redux-saga/effects";

import appSagas from "./app/saga";
import authSagas from "./auth/saga";

export default function* rootSaga(getState) {
  yield all([appSagas(), authSagas()]);
}
