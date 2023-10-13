// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyAB_O8x4DnhGeqyoUYi3KJMy9chkdWS8qU",
  authDomain: "react-contact-form-f49db.firebaseapp.com",
  projectId: "react-contact-form-f49db",
  storageBucket: "react-contact-form-f49db.appspot.com",
  messagingSenderId: "621501496767",
  appId: "1:621501496767:web:d76594529828de1db5750a",
  measurementId: "G-LCR6HX2B4B"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
export const db = firebaseApp.firestore();
export const auth = firebase.auth();

