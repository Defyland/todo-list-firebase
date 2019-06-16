import { all, takeLatest, takeEvery } from 'redux-saga/effects';
import { Types as TodoTypes } from '../reducers/todo';
import { list, update, add, remove } from './todo';

export default function* rootSaga() {
  return yield all([
    takeLatest(TodoTypes.GET_TODO_LIST, list),
    takeLatest(TodoTypes.ADD_TODO, add),
    takeLatest(TodoTypes.UPDATE_TODO, update),
    takeLatest(TodoTypes.REMOVE_TODO, remove)
  ])
}