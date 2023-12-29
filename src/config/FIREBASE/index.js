import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/database";

firebase.initializeApp({
    apiKey: "AIzaSyD5fEzB1EUP92HHhXIyL2uv_Z6pTdP5scs",
    authDomain: "mencoba-e5ed2.firebaseapp.com",
    databaseURL: "https://mencoba-e5ed2-default-rtdb.firebaseio.com",
    projectId: "mencoba-e5ed2",
    storageBucket: "mencoba-e5ed2.appspot.com",
    messagingSenderId: "81468448338",
    appId: "1:81468448338:web:8b54295ac2ad36b2e1498b"
});

const FIREBASE = firebase;

export default FIREBASE;