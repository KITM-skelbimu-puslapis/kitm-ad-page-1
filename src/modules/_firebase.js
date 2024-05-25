// Firebase functions imported:
import { initializeApp } from "firebase/app";

// Firebase config and initialisation:
const firebaseConfig = {
  apiKey: "AIzaSyAU7X0jmLzpY1rFFKTFZ-FLyD0tvl0FDqU",
  authDomain: "kitm-ad-page.firebaseapp.com",
  projectId: "kitm-ad-page",
  storageBucket: "kitm-ad-page.appspot.com",
  messagingSenderId: "809165576603",
  appId: "1:809165576603:web:c6c81f9fcc5a137904693e",
  databaseURL: "https://kitm-ad-page-default-rtdb.europe-west1.firebasedatabase.app/"
};
export const app = initializeApp(firebaseConfig);

// Realtime database:
// To read or write data from the database, you need an instance of firebase.database.Reference:
import { getDatabase } from "firebase/database";
export const database = getDatabase();