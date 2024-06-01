// JS modules imported:
import { app, database } from "./modules/_firebase";
import { items, createCards } from "./modules/cardsCreation";
import { displayNav } from "./modules/displayNav/displaynav";
import { renderRegistrationForm, registerUser}  from "./modules/registrationForm";
import { renderLoginForm, attachLoginHandler } from './modules/loginForm';


// Main application logic to render the page:
// Homepage:
createCards(items);

// Registration:
renderRegistrationForm();
registerUser();

// Render the login form
renderLoginForm();
attachLoginHandler();