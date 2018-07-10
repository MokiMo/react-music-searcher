import { all, takeEvery, fork, put } from "redux-saga/effects";
import { delay } from "redux-saga";
import actions from "./actions";
import appActions from "../app/actions";

export function* authSaga() {
	yield takeEvery(actions.AUTH, function*(action) {
		if (action.payload.user === "1" && action.payload.pass === "1") { // api call success
			yield delay(2000)
			yield put({
				type: appActions.NO_ERRORS,
			})
			yield put({
				type: actions.AUTH_SUCCESS,
				payload: action.payload
			});
		} else { // api call fail
			yield delay(1500)
			yield put({
				type: appActions.ERROR
			});
		}
	});
}

export default function* rootSaga() {
	yield all([fork(authSaga)]);
}
