// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
 apiKey: "AIzaSyAd0Gn7t0MyLapPZrv4xpKWfuVTTYWdDCE",
  authDomain: "rdyg-1df56.firebaseapp.com",
  projectId: "rdyg-1df56",
  storageBucket: "rdyg-1df56.appspot.com",
  messagingSenderId: "1013777157264",
  appId: "1:1013777157264:web:6c1ca22f7bce37f5abdc15",
  measurementId: "G-WR16F5S6ML"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
