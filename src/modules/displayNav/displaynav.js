import { createDropdownCategories } from "./navCreateDropdownCategories";
import { guestNavButtonsDisplay, clearGuestNavButtons } from "../guestNav/displayGuestNavButtons";
import userNavButtonsDisplay, { clearUserNavButtons } from "../userNav/displayUserNavButtons";
import { getAuth, onAuthStateChanged } from "firebase/auth";
const auth = getAuth();
onAuthStateChanged(auth, (user) => {
  if (user) {
    userNavButtonsDisplay();
    const uid = user.uid;
  } else {
    guestNavButtonsDisplay();
  }
});


