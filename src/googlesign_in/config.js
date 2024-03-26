// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth";


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAh6nmELT2E3G9Y2-qfXtbYDzHBHzE32rQ",
  authDomain: "webapplications-24.firebaseapp.com",
  projectId: "webapplications-24",
  storageBucket: "webapplications-24.appspot.com",
  messagingSenderId: "44153512663",
  appId: "1:44153512663:web:1bb879b3fe4a49ca804692",
  measurementId: "G-T8RZXL8VY9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export {auth,provider};