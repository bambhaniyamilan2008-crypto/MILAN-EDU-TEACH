import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// ✅ FIX: 'export' keyword lagaya hai taaki ye doosri files mein dikhe
export const firebaseConfig = {
  projectId: "studio-8186080283-f4574",
  appId: "1:31466290334:web:027b890f614e7aceb68f8f",
  apiKey: "AIzaSyAWbOFNGqZ44QupcKPeX7yGsF6zPvp1PVk",
  authDomain: "studio-8186080283-f4574.firebaseapp.com",
  measurementId: "",
  messagingSenderId: "31466290334"
};

// Singleton pattern: Check agar app pehle se initialized hai
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth(app);

// App aur Auth ko bhi export kar rahe hain
export { app, auth };
