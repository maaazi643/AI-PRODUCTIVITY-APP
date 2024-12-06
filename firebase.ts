import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA2P9IDxSWvQY2J0jIS8m8KN9OeSqpixy8",
  authDomain: "ai-productivity-app-52100.firebaseapp.com",
  projectId: "ai-productivity-app-52100",
  storageBucket: "ai-productivity-app-52100.firebasestorage.app",
  messagingSenderId: "508557268969",
  appId: "1:508557268969:web:a5bf054c681b40931add78",
};

// Initialize Firebase
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);

export { db };
