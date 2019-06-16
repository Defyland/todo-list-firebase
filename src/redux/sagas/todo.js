import { call, put, select } from 'redux-saga/effects';
import todo, { Creators as TodoActions } from '../reducers/todo';
import { db } from '../../config/firebase';
// import console = require('console');
import flatten from 'lodash/flatten'

const collection = db.collection("tasks");

function getTodoList() {
  var todoList = [];
  return collection.get().then((querySnapshot) => {
    querySnapshot.forEach(function(doc) {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
        todoList.push(Object.assign(doc.data(), {id: doc.id}))
    });
    return todoList;
  })
  .catch(function(error) {
    console.log("Error getting documents: ", error);
    return error
  });
}

function addTodo(params) {
  return collection.add(params).then((docRef) => {
      return docRef;
  })
  .catch(function(error) {
    console.error("Error adding document: ", error);
    return error;
  })
}

function updateTodo(doc) {
  return collection.doc(doc.id).update(doc).then((docRef) => {
      return docRef;
  })
  .catch(function(error) {
    console.error("Error adding document: ", error);
    return error;
  })
}

function removeTodo(doc_id) {
  return collection.doc(doc_id).delete().then(function() {
    console.log("Document successfully deleted!");
    return true;
  }).catch(function(error) {
    console.error("Error removing document: ", error);
      return error;
  });
}

function timeStamp() {
  var docRef = db.collection('objects').doc('some-id');

  // Update the timestamp field with the value from the server
  var updateTimestamp = docRef.update({
    timestamp: firebase.firestore.FieldValue.serverTimestamp()
  });
}

export function* list(action) {
  try {
    const todoList = yield call(getTodoList);
    yield put(TodoActions.todoSuccess(todoList));
  } catch (error) {
    yield put(TodoActions.todoFailure(error));
  }
}
export function* add(params) {
  try {
    const { data } = params.payload;
    const todoList = yield call(addTodo(data));
    yield put(TodoActions.todoSuccess(todoList));
  } catch (error) {
    yield put(TodoActions.todoFailure(error));
  }
}
export function* update(params) {
  try {
    const { data } = params.payload;
    const todoList = yield call(updateTodo(data));
    yield put(TodoActions.todoSuccess(todoList));
  } catch (error) {
    yield put(TodoActions.todoFailure(error));
  }
}
export function* remove(params) {
  try {
    const { data } = params.payload;
    const todoList = yield call(removeTodo(data));
    yield put(TodoActions.todoSuccess(todoList));
  } catch (error) {
    yield put(TodoActions.todoFailure(error));
  }
}