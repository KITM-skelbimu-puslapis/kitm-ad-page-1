// JS modules imported:
import { app, database } from "./modules/_firebase";
import { addCategory } from "./modules/addCategoriesToDb";
import { items, createCards } from "./modules/cardsCreation";
import { displayNav } from "./modules/displayNav/displaynav";
import { renderRegistrationForm, registerUser}  from "./modules/registrationForm";
import { renderLoginForm, attachLoginHandler } from './modules/loginForm';
import checkIfLoggedIn from "./modules/displayNav/displaynav";
import { listingForm, renderListingCategories } from "./modules/listingForm";
import { validateAndAddListing } from "./modules/listingAdd";
import { manageListingsUi } from "./modules/manageListings";

// !!! Adding categories to DB (our hardcoded categories have been added; the function should only be called by an event listener, e.g. a button click):
// addCategory(name, imageUrl);

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
manageListingsUi()