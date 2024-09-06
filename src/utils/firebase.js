// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyByjZLaWlTlnXB-coaeiIRbaRtP67dgjTs",
  authDomain: "netflixgpt-608e8.firebaseapp.com",
  projectId: "netflixgpt-608e8",
  storageBucket: "netflixgpt-608e8.appspot.com",
  messagingSenderId: "397188010224",
  appId: "1:397188010224:web:a1e2711fdb436fadb1b235",
  measurementId: "G-5MLDQR40GM",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
