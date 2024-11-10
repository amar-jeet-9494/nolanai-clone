// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCJBOzIcSmPiOb_Yu3RpQijXEU7qI2VBFc",
  authDomain: "nolanai-clone-74466.firebaseapp.com",
  projectId: "nolanai-clone-74466",
  storageBucket: "nolanai-clone-74466.firebasestorage.app",
  messagingSenderId: "41832594670",
  appId: "1:41832594670:web:9e136a651b422c93ac87ff",
  measurementId: "G-PXZ2SGQ7P1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
export { auth };