// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDAnHcy3ssS2nDpW7Hl-cdfGMDgz-3rXx4",
  authDomain: "shoppy-ae39e.firebaseapp.com",
  databaseURL:
    "https://shoppy-ae39e-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "shoppy-ae39e",
  storageBucket: "shoppy-ae39e.appspot.com",
  messagingSenderId: "358031721309",
  appId: "1:358031721309:web:d5627c7abd6c5dba4cdeb4",
  measurementId: "G-1RKELW440Q",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
