// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDR1Ehn7HRWZERaXhdrGn6eDEBdsVYPLVY",
  authDomain: "netflixgpt-9c959.firebaseapp.com",
  projectId: "netflixgpt-9c959",
  storageBucket: "netflixgpt-9c959.appspot.com",
  messagingSenderId: "912564832972",
  appId: "1:912564832972:web:1eeb5ae0996ab9f0845069",
  measurementId: "G-FT11629Y4R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();