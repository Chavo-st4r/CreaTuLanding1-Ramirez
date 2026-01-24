import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBh-HZBOKh95d4HwsQiSYTyQYKVJmQWZ-Y",
  authDomain: "reactproject-551e0.firebaseapp.com",
  projectId: "reactproject-551e0",
  storageBucket: "reactproject-551e0.firebasestorage.app",
  messagingSenderId: "863072189684",
  appId: "1:863072189684:web:b50f059663f8b582d7b2a1",
  measurementId: "G-JNBLJQ76RT"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
