
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyACScsKQ9hiJ6-TF7xEjf-C9_ZNm8lMGto",
  authDomain: "chat-o-24ad3.firebaseapp.com",
  projectId: "chat-o-24ad3",
  storageBucket: "chat-o-24ad3.appspot.com",
  messagingSenderId: "830859650108",
  appId: "1:830859650108:web:f26a89ef30b747a4624f39",
  measurementId: "G-D5DHRV91VD"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const storage = getStorage();
export const db = getFirestore();