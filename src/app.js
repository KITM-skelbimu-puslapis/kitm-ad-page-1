// JS modules imported:
import { items, createCards } from "./modules/cardsCreation";

// Firebase functions imported:
import { initializeApp } from "firebase/app";

// header:
import { displayNav } from "./modules/displayNav/displaynav";

// Database config and initialisation:
const firebaseConfig = {
  apiKey: "AIzaSyAU7X0jmLzpY1rFFKTFZ-FLyD0tvl0FDqU",
  authDomain: "kitm-ad-page.firebaseapp.com",
  projectId: "kitm-ad-page",
  storageBucket: "kitm-ad-page.appspot.com",
  messagingSenderId: "809165576603",
  appId: "1:809165576603:web:c6c81f9fcc5a137904693e"
};
const app = initializeApp(firebaseConfig);

// Main application logic to render the page:
createCards(items);
