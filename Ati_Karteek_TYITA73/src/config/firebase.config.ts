import { getFirestore } from 'firebase/firestore';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCxkwDwZFyXj2mgoHoeh2dWn2Ra3rufFus",
  authDomain: "e-commerce-b387c.firebaseapp.com",
  projectId: "e-commerce-b387c",
  storageBucket: "e-commerce-b387c.appspot.com",
  messagingSenderId: "656556779129",
  appId: "1:656556779129:web:52ce5837a90be4ebfa16a8",
  measurementId: "G-Q1HZS761LV"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db };
