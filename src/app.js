// JS modules imported:
import app from "./modules/_firebase";
import { items, createCards } from "./modules/cardsCreation";
import { renderRegistrationForm, registerUser}  from "./modules/registrationForm";

// Main application logic to render the page:
// Homepage:
createCards(items);

// Registration:
renderRegistrationForm();
registerUser();
