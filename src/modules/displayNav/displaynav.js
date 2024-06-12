import { createDropdownCategories } from "./navCreateDropdownCategories";
import { guestNavButtonsDisplay, clearGuestNavButtons } from "../guestNav/displayGuestNavButtons";
import userNavButtonsDisplay, { clearUserNavButtons } from "../userNav/displayUserNavButtons";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { renderListingCategoriesForNav } from "./navCreateDropdownCategories";
const auth = getAuth();
renderListingCategoriesForNav()
const divReplace = document.createElement('div')
divReplace.setAttribute('class', 'nav-item d-flex flex-row justify-content-center align-items-center align-self-center text-center');
divReplace.setAttribute('id','replace');
const spotForAddNewListingButton = document.querySelector('#navbarSupportedContent');
spotForAddNewListingButton.appendChild(divReplace);

const checkIfLoggedIn = ()=>{
  onAuthStateChanged(auth, (user) => {
    if (user) {
      divReplace.innerHTML = '';
      userNavButtonsDisplay();
      const uid = user.uid;
    } else {
      divReplace.innerHTML = '';
      guestNavButtonsDisplay();
    }
  });
}
export default checkIfLoggedIn



