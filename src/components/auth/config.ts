import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  projectId: "studio-8186080283-f4574",
  appId: "1:31466290334:web:027b890f614e7aceb68f8f",
  apiKey: "AIzaSyAWbOFNGqZ44QupcKPeX7yGsF6zPvp1PVk",
  authDomain: "studio-8186080283-f4574.firebaseapp.com",
  measurementId: "",
  messagingSenderId: "31466290334"
};

// 👇 DEBUG LOGS: Check your terminal/browser console for this
console.log("🔥 Config Object:", firebaseConfig); 
console.log("🔥 Project ID:", firebaseConfig?.projectId);

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth(app);

export { app, auth };
