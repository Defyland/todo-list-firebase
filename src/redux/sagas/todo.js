import { call, put, select } from 'redux-saga/effects';
import { Creators as TodoActions } from '../reducers/todo';


// addItem = item => {
//   // db.ref('/tasks').push({
//   //   name: "item"
//   // });
//   db.collection("tasks").add({
//     title: "teste",
//     description: "desc",
//     completed: false
//   })
//   .then(function(docRef) {
//       console.log("Document written with ID: ", docRef.id);
//   })
//   .catch(function(error) {
//       console.error("Error adding document: ", error);
//   });
// };

export function* todo(action) {
  try {
    yield;
  } catch (err) {
    yield;
  }
}