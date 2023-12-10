import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import {getAuth} from 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD-3BAbMLoGA0L3_sJqnSJ5U2Wg8v86_wc",
  authDomain: "compostdeal.firebaseapp.com",
  projectId: "compostdeal",
  storageBucket: "compostdeal.appspot.com",
  messagingSenderId: "672168949311",
  appId: "1:672168949311:web:b2298c1d1e04028c3c2a8a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export {fireDB, auth}