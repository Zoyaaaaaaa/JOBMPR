// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDz4LtqDjww9Wrx-cdwNsLawiqgm6S1vDM",
  authDomain: "job-portal-abdc9.firebaseapp.com",
  projectId: "job-portal-abdc9",
  storageBucket: "job-portal-abdc9.appspot.com",
  messagingSenderId: "150339478031",
  appId: "1:150339478031:web:5abd836084c3212da3797a",
  measurementId: "G-8CZNX4WKHH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const firestore=getFirestore(app);
export { app, analytics, auth ,firestore};

