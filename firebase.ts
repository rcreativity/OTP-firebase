// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAQieQwJm3Wi6jLFwjc5WmjABUbMocP8zk",
  authDomain: "test-nextjs-baa37.firebaseapp.com",
  projectId: "test-nextjs-baa37",
  storageBucket: "test-nextjs-baa37.firebasestorage.app",
  messagingSenderId: "118470522722",
  appId: "1:118470522722:web:0fe7215aadce1c9c1b9e3b",
};

// Initialize Firebase
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth(app);
auth.useDeviceLanguage();

export { auth };
