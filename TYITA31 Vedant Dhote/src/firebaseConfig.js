import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCLAFI3XBltyAXh_QIDN8DSAiOSKi_n9pk",
  authDomain: "vcart-78378.firebaseapp.com",
  projectId: "vcart-78378",
  storageBucket: "vcart-78378.appspot.com",
  messagingSenderId: "909719779271",
  appId: "1:909719779271:web:9e124c9d23e3c6cd320be2",
  measurementId: "G-QWFBEHZHZJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;