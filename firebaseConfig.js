import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore"; // Add getDocs here
import jobsData from "./public/jobs.json";

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
const firestore = getFirestore(app);

async function saveJobsToFirestore(jobsData) {
  try {
    const jobsCollectionRef = collection(firestore, 'jobsdata');
    
    // Loop through each job object and add it to Firestore
    jobsData.forEach(async (job) => {
      await addDoc(jobsCollectionRef, job); // Change jobs to job here
    });

    console.log('Jobs data saved to Firestore');
  } catch (error) {
    console.error('Error saving jobs data to Firestore:', error);
    throw error;
  }
}


//saveJobsToFirestore(jobsData);

// Comment the above line after executing it once

async function fetchJobsFromFirestore() {
  try {
    const jobsCollectionRef = collection(firestore, 'jobsdata');
    const snapshot = await getDocs(jobsCollectionRef);
    const jobs = snapshot.docs.map(doc => doc.data());
    return jobs;
  } catch (error) {
    console.error('Error fetching jobs data from Firestore:', error);
    throw error;
  }
}

export { app, analytics, auth, firestore, fetchJobsFromFirestore };
