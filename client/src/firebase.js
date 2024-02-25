// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-project-8ba27.firebaseapp.com",
  projectId: "mern-project-8ba27",
  storageBucket: "mern-project-8ba27.appspot.com",
  messagingSenderId: "792882431429",
  appId: "1:792882431429:web:6418e0b34d366b164ab7ac"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app