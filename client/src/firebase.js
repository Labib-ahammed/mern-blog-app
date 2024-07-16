// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "aniblog-087.firebaseapp.com",
  projectId: "aniblog-087",
  storageBucket: "aniblog-087.appspot.com",
  messagingSenderId: "420824349389",
  appId: "1:420824349389:web:a3ca508d9707f05f3c8784",
  measurementId: "G-5RDL7NYSH2"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);