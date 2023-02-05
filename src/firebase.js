// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCDEu0sIKaqLdGQ-2wveJT7fbLbrq1Kws4",
  authDomain: "real-estate-react-49ff0.firebaseapp.com",
  projectId: "real-estate-react-49ff0",
  storageBucket: "real-estate-react-49ff0.appspot.com",
  messagingSenderId: "64077881200",
  appId: "1:64077881200:web:3c072cd32bef511bcef9b5"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();