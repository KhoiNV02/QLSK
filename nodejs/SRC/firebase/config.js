// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage, ref } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC3bcHFNjJ2_obnMGg3gwGsgd5MAGYwcK4",
  authDomain: "doan2-15a36.firebaseapp.com",
  projectId: "doan2-15a36",
  storageBucket: "doan2-15a36.appspot.com",
  messagingSenderId: "393629700160",
  appId: "1:393629700160:web:02107109fd8dfe82044fa5",
  measurementId: "G-JYFQ2X6M42"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const storage = getStorage(app);
export {storage}