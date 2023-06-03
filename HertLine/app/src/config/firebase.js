import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDoht8KSB05sdbhMTvJCE5SbBofuFDf8O4",
  authDomain: "hertline-dccc9.firebaseapp.com",
  projectId: "hertline-dccc9",
  storageBucket: "hertline-dccc9.appspot.com",
  messagingSenderId: "645556607316",
  appId: "1:645556607316:web:0a42057885d95377ffd0c1",
  measurementId: "G-Q8TP78BE72"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
