// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "khabo-36a9a.firebaseapp.com",
  projectId: "khabo-36a9a",
  storageBucket: "khabo-36a9a.appspot.com",
  messagingSenderId: "1051561716607",
  appId: "1:1051561716607:web:634fc4442625d530e4884a"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);