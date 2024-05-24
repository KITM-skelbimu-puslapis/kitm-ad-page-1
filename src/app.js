// JS modules imported:
import app from "./modules/_firebase";
import { items, createCards } from "./modules/cardsCreation";
import registrationForm from "./modules/registrationForm";

// Main application logic to render the page:
createCards(items);
registrationForm();
