//testing

export const environment = {
    production: false
};

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC_g5FubDiNKQA9FqqnCxWtMe019wDg1Us",
  authDomain: "cs230websitelab.firebaseapp.com",
  databaseURL: "https://cs230websitelab-default-rtdb.firebaseio.com",
  projectId: "cs230websitelab",
  storageBucket: "cs230websitelab.appspot.com",
  messagingSenderId: "555218383877",
  appId: "1:555218383877:web:d4f4d972df2c1477ec186c",
  measurementId: "G-P5NTPSBT8T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);