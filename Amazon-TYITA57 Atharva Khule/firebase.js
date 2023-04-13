import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDKpuWN27RVvfICJe5bldG890CWK7WCunY",
  authDomain: "fir-4ec21.firebaseapp.com",
  projectId: "fir-4ec21",
  storageBucket: "fir-4ec21.appspot.com",
  messagingSenderId: "28207274677",
  appId: "1:28207274677:web:3ff3720232c49c810a7cfc"
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();

export default db;