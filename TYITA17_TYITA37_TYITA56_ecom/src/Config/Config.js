// import * as firebase from 'firebase';
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCDxIURM-xZBL0nyvR2m5Z08hnm9c8dKBg",
    authDomain: "ecom-react-82eeb.firebaseapp.com",
    databaseURL: "https://ecom-react-82eeb-default-rtdb.firebaseio.com",
    projectId: "ecom-react-82eeb",
    storageBucket: "ecom-react-82eeb.appspot.com",
    messagingSenderId: "342974899254",
    appId: "1:342974899254:web:2d228fced2bd1ef9e2e497",
    measurementId: "G-9FV549HMKM"
  };

  firebase.initializeApp(firebaseConfig);

  const auth = firebase.auth();
  const db = firebase.firestore();
  const storage = firebase.storage();
  
  export { auth, db, storage }