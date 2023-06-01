/*
// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
    apiKey: "AIzaSyD5k9WPKagOA5oRWo5I6PvxulyP2b9oxWw",
    authDomain: "cs278-b3bf8.firebaseapp.com",
    projectId: "cs278-b3bf8",
    storageBucket: "cs278-b3bf8.appspot.com",
    messagingSenderId: "115730641216",
    appId: "1:115730641216:web:6ae034e3c1fb4d06c70aa5",
    measurementId: "G-X5XRXN1NDP"
  };
// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app()
}

const auth = firebase.auth()

export { auth };

*/

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD5k9WPKagOA5oRWo5I6PvxulyP2b9oxWw",
  authDomain: "cs278-b3bf8.firebaseapp.com",
  projectId: "cs278-b3bf8",
  storageBucket: "cs278-b3bf8.appspot.com",
  messagingSenderId: "115730641216",
  appId: "1:115730641216:web:6ae034e3c1fb4d06c70aa5",
  measurementId: "G-X5XRXN1NDP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app);

export{auth};
