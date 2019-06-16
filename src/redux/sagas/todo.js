import { call, put, select } from 'redux-saga/effects';
import { Creators as TodoActions } from '../reducers/todo';
import { db } from '../../config/firebase';
// import console = require('console');


const collection = db.collection("tasks");

function getTodoList() {
  var todoList = [];
  collection.onSnapshot((querySnapshot) => {
    querySnapshot.forEach(doc => todoList.push(Object.assign(doc.data(), {id: doc.id})))
  });
  return todoList;
}

function addTodo() {
  db.collection("tasks").add({
    title: "teste",
    description: "desc",
    completed: false
  })
  .then(function(docRef) {
      console.log("Document written with ID: ", docRef.id);
  })
  .catch(function(error) {
      console.error("Error adding document: ", error);
  })
}

function updateTodo() {
  db.collection("tasks").update({
    title: "teste",
    description: "desc",
    completed: false
  })
  .then(function(docRef) {
      console.log("Document written with ID: ", docRef.id);
  })
  .catch(function(error) {
      console.error("Error adding document: ", error);
  })
}

function removeTodo() {
  db.collection("cities").doc("DC").delete().then(function() {
    console.log("Document successfully deleted!");
  }).catch(function(error) {
      console.error("Error removing document: ", error);
  });
}

function timeStamp() {
  var docRef = db.collection('objects').doc('some-id');

  // Update the timestamp field with the value from the server
  var updateTimestamp = docRef.update({
    timestamp: firebase.firestore.FieldValue.serverTimestamp()
  });
}

export function* todo(action) {
  try {
    const todoList = yield call(getTodoList);
    // console.log('Data: ', todoList)
    yield put(TodoActions.todoSuccess(todoList));
  } catch (error) {
    yield put(TodoActions.todoFailure(error));
  }
}