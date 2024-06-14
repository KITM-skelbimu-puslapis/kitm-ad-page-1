// JS modules imported:
import { app, database } from "./modules/_firebase";
import { items, createCards } from "./modules/cardsCreation";
import { displayNav } from "./modules/displayNav/displaynav";
import {
  renderRegistrationForm,
  registerUser,
} from "./modules/registrationForm";
import { renderLoginForm, attachLoginHandler } from "./modules/loginForm";
import checkIfLoggedIn from "./modules/displayNav/displaynav";
import { listingForm, renderListingCategories } from "./modules/listingForm";
import { validateAndAddListing } from "./modules/listingAdd";
import { manageListingsUi } from "./modules/manageListings";
import { categorySection, categoryManager } from "./modules/categoryManager";
import { addCategoryManagerRow, deleteCategory, editCategory } from "./modules/categoryCrud";

// Main application logic to render the page:
// Homepage:
createCards(items);

// Registration:
renderRegistrationForm();
registerUser();

// Render the login form
renderLoginForm();
attachLoginHandler();

// Add new listing:
listingForm();
renderListingCategories(); // !!! Check this function when getting categories from DB for the navbar and category cards
validateAndAddListing();

//Check if logged in
checkIfLoggedIn();

//----------------------------
// manageListingsUi()

// Category manager:
categorySection();
categoryManager();
addCategoryManagerRow(); 
deleteCategory();
editCategory();
