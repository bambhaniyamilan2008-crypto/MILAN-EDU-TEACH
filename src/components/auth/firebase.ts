import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// 1. YOUR CONFIGURATION
const firebaseConfig = {
  projectId: "studio-8186080283-f4574",
  appId: "1:31466290334:web:027b890f614e7aceb68f8f",
  apiKey: "AIzaSyAWbOFNGqZ44QupcKPeX7yGsF6zPvp1PVk",
  authDomain: "studio-8186080283-f4574.firebaseapp.com",
  measurementId: "",
  messagingSenderId: "31466290334"
};

// 2. INITIALIZE FIREBASE
// We use this check to prevent "App already initialized" errors in Next.js
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

// 3. INITIALIZE AUTH
const auth = getAuth(app);

// 4. EXPORT FOR USE IN LOGIN FORM
export { app, auth };
