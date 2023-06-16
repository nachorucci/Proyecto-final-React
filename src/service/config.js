// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore" 

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_REACT_APP_FIREBASE_API_KEY,
  authDomain: "wineandart-proyecto.firebaseapp.com",
  projectId: "wineandart-proyecto",
  storageBucket: "wineandart-proyecto.appspot.com",
  messagingSenderId: "16448640029",
  appId: "1:16448640029:web:4a69f881a69a4fb42522f4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
// exportamos esta referencia para que esté disponible en toda nuestra aplicación.