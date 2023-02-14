// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCgEOm4KRYRqIg3zFEak-xZYQGrQQCBWHg",
  authDomain: "project-9f526.firebaseapp.com",
  projectId: "project-9f526",
  storageBucket: "project-9f526.appspot.com",
  messagingSenderId: "776035172214",
  appId: "1:776035172214:web:5a57fd42297c7d05d04457",
  measurementId: "G-NVQELB4DS1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export const provider = new GoogleAuthProvider();
