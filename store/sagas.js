import { fork, put, takeEvery, all } from 'redux-saga/effects';

const delay = (ms) => new Promise((res) => setTimeout(res, ms));

export function* helloSaga() {
  console.log('Hello Sagas!');
}

export function* handleIncrementAsync() {
  yield delay(1000);
  yield put({ type: 'INCREMENT' });
}

export function* incrementAsyncWatcher() {
  yield takeEvery('INCREMENT_ASYNC', handleIncrementAsync);
}

export function* rootSaga() {
  yield all([fork(helloSaga), fork(incrementAsyncWatcher)]);
}
