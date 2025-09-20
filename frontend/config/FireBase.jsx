import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth"
  const firebaseConfig = {
  apiKey: "AIzaSyAuSqceoBJO7q3OOB2HD9sleOKyhjShYn0",
  authDomain: "mern-61.firebaseapp.com",
  projectId: "mern-61",
  storageBucket: "mern-61.firebasestorage.app",
  messagingSenderId: "41352799293",
  appId: "1:41352799293:web:b3ceb90a2527c4784f7654",
  measurementId: "G-JMMZQTET68"
};
const app = initializeApp(firebaseConfig)
export const auth =getAuth(app)
export const provider = new GoogleAuthProvider()
provider.setCustomParameters({
  prompt:"select_account",
})
