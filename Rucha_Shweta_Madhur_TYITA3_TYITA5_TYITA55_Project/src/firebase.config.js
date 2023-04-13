import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCxabs20EcK6DkbSewKZcTGgldXsqLYrSY",
  authDomain: "react-c4f91.firebaseapp.com",
  projectId: "react-c4f91",
  storageBucket: "react-c4f91.appspot.com",
  messagingSenderId: "169385567558",
  appId: "1:169385567558:web:628a42946c6348c61b7147",
  measurementId: "G-2F6895XQQX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;
