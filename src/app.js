// JS modules imported:
import { app, database } from "./modules/_firebase";
import { items, createCards } from "./modules/cardsCreation";
import { displayNav } from "./modules/displayNav/displaynav";
import {
  renderRegistrationForm,
  registerUser,
} from "./modules/registrationForm";
import checkIfLoggedIn from "./modules/displayNav/displaynav";
import { listingForm, renderListingCategories } from "./modules/listingForm";
import { validateAndAddListing } from "./modules/listingAdd";
import { manageListingsUi } from "./modules/manageListings";
import { createCategorySection, loadCategoryManager } from "./modules/categoryManager";
import { addCategoryManagerRow, deleteCategory, editCategory } from "./modules/categoryCrud";
import { search } from "./modules/search";

// Main application logic to render the page:
// Homepage:
checkIfLoggedIn();
createCards(items);
search()

// To be attached to event listeners in the Navbar:
// Listing manager:
manageListingsUi()

// Category manager:
createCategorySection();
loadCategoryManager();
addCategoryManagerRow(); 
deleteCategory();
editCategory();
