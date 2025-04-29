import { getAuth } from "firebase/auth";


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDoB1WumEVv2mBGltNcgT8VBcbG8F9-wIU",
  authDomain: "netflixgpt-5eae4.firebaseapp.com",
  projectId: "netflixgpt-5eae4",
  storageBucket: "netflixgpt-5eae4.firebasestorage.app",
  messagingSenderId: "958079784707",
  appId: "1:958079784707:web:6898fc726d7f54779e7b36",
  measurementId: "G-C003J0RLN5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();