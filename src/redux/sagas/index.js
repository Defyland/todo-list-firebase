import { all, takeLatest } from 'redux-saga/effects';
import { initial } from './initial';

export default function* rootSaga() {
  yield all([
    // takeLatest(initial)
    initial
  ])
}