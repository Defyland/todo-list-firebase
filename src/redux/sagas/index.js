import { all, takeLatest } from 'redux-saga/effects';
import { Types as TodoTypes } from '../reducers/todo';
import { todo } from './todo';

export default function* rootSaga() {
  return yield all([
    takeLatest(TodoTypes.GET_TODO_LIST, todo)
  ])
}