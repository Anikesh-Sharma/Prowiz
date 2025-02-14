// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDq3ki9NJe11ou_jBMCMo2QNcJ79vdn_T8",
  authDomain: "proviz-5b4b7.firebaseapp.com",
  projectId: "proviz-5b4b7",
  storageBucket: "proviz-5b4b7.firebasestorage.app",
  messagingSenderId: "761749831853",
  appId: "1:761749831853:web:7475b463bc1308c91c4624",
  measurementId: "G-7PP7FYEK3B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);