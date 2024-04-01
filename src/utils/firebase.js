// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDn703Abmyy7rgp44uN15kz8HM3V_3Xub4",
  authDomain: "netflixgpt-121b6.firebaseapp.com",
  projectId: "netflixgpt-121b6",
  storageBucket: "netflixgpt-121b6.appspot.com",
  messagingSenderId: "282549073946",
  appId: "1:282549073946:web:ec2e52181b3a0f177bb9a3",
  measurementId: "G-PZZQJS2GSS",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();