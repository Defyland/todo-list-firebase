const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");


let config = {
  apiKey: "AIzaSyDrjpkCCtcUvWgAk5V-hVs_9rGUafjPwQg",
  authDomain: "todo-list-454a3.firebaseapp.com",
  databaseURL: "https://todo-list-454a3.firebaseio.com",
  projectId: "todo-list-454a3",
  storageBucket: "todo-list-454a3.appspot.com",
  messagingSenderId: "1012229898386",
  appId: "1:1012229898386:web:9ba04229d96ac095"
};
let app = firebase.initializeApp(config);
export const db = app.firestore();
// export const db = app.database();