// Firebase functions imported:
import { initializeApp } from "firebase/app";
import { getStorage, ref } from "firebase/storage";
import { getDatabase } from "firebase/database";

// Firebase config and initialisation:
const firebaseConfig = {
  apiKey: "AIzaSyAU7X0jmLzpY1rFFKTFZ-FLyD0tvl0FDqU",
  authDomain: "kitm-ad-page.firebaseapp.com",
  projectId: "kitm-ad-page",
  storageBucket: "kitm-ad-page.appspot.com",
  messagingSenderId: "809165576603",
  appId: "1:809165576603:web:c6c81f9fcc5a137904693e",
  databaseURL: "https://kitm-ad-page-default-rtdb.europe-west1.firebasedatabase.app/",
  storageBucket: "gs://kitm-ad-page.appspot.com"
};
export const app = initializeApp(firebaseConfig);

// Storage:
export const storage = getStorage();
export const storageRef = ref(storage);

// Realtime database:
export const database = getDatabase();