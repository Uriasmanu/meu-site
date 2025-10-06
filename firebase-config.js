// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAWwF9kl4OPS2Sa_t1s0BJXHUcxa5Mipkk",
  authDomain: "flash-cards-app-18311.firebaseapp.com",
  projectId: "flash-cards-app-18311",
  storageBucket: "flash-cards-app-18311.firebasestorage.app",
  messagingSenderId: "16352149747",
  appId: "1:16352149747:web:5cd93d2b779e67da03f786",
  measurementId: "G-0H9HG6BN0F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);